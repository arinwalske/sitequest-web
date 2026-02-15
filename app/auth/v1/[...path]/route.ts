import { NextRequest, NextResponse } from "next/server";

// The real Supabase project URL
const SUPABASE_URL = "https://bmbgppgkquphghhzorqh.supabase.co";

async function handler(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params; // Mandatory await for Next.js 15
  const queryString = request.nextUrl.search;
  const targetUrl = `${SUPABASE_URL}/auth/v1/${path.join("/")}${queryString}`;

  const headers = new Headers(request.headers);

  // --- BRANDING HEADER OVERRIDES ---
  // These trick Google into displaying 'sitequest.me' on the OAuth screen
  headers.set("Origin", "https://sitequest.me");
  headers.set("Referer", "https://sitequest.me/");

  // These tell Supabase to generate redirects based on our proxy domain
  headers.set("X-Forwarded-Host", "sitequest.me");
  headers.set("X-Forwarded-Proto", "https");
  // ---------------------------------

  // Delete the Host header so fetch uses the SUPABASE_URL domain for the TLS handshake
  headers.delete("Host");

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : null,
      redirect: "manual", // Directly return the 302/303 redirect to the mobile app
      // @ts-ignore - duplex is required for streaming bodies in Next.js App Router
      duplex: "half",
    });

    const responseHeaders = new Headers(response.headers);

    // Clean up headers that might conflict with the proxy response
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Auth Proxy Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
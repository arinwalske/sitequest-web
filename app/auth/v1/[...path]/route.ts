import { NextRequest, NextResponse } from "next/server";

// The real Supabase project URL
const SUPABASE_URL = "https://bmbgppgkquphghhzorqh.supabase.co";
// Use your Anon Key from env
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

async function handler(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const pathStr = path.join("/");
  const queryString = request.nextUrl.search;
  const targetUrl = `${SUPABASE_URL}/auth/v1/${pathStr}${queryString}`;

  const headers = new Headers(request.headers);

  // --- BRANDING & AUTH HEADERS ---
  // Fixes the "No API key found" error
  headers.set("apikey", SUPABASE_ANON_KEY);

  // TRICK GOOGLE: These ensure the login screen shows 'sitequest.me'
  headers.set("Origin", "https://sitequest.me");
  headers.set("Referer", "https://sitequest.me/");

  // TELL SUPABASE: Use our domain for generating the redirect
  headers.set("X-Forwarded-Host", "sitequest.me");
  headers.set("X-Forwarded-Proto", "https");

  // FIX "BEARER TOKEN" ERROR: Remove forced Authorization for the authorize path
  // This allows the public OAuth handshake to start without a pre-existing session
  if (pathStr.includes("authorize") || !headers.has("Authorization")) {
    headers.delete("Authorization");
  }
  // -------------------------------

  headers.delete("Host");

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : null,
      redirect: "manual",
      // @ts-ignore
      duplex: "half",
    });

    const responseHeaders = new Headers(response.headers);
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
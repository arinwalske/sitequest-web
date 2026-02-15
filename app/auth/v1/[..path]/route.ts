import { NextRequest, NextResponse } from "next/server";

// The Supabase project URL
const SUPABASE_URL = "https://bmbgppgkquphghhzorqh.supabase.co";

async function handler(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const queryString = request.nextUrl.search;
  const targetUrl = `${SUPABASE_URL}/auth/v1/${path.join("/")}${queryString}`;

  const headers = new Headers(request.headers);

  // Preserve the original Host header as X-Forwarded-Host
  // This ensures Supabase sees 'sitequest.me' as the initiator for redirect generation
  headers.set("X-Forwarded-Host", headers.get("Host") || "");

  // Delete the Host header so the fetch client sets the correct one for the Supabase domain
  // This is required for SNI and routing at the Supabase load balancer
  headers.delete("Host");

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.body,
      redirect: "manual", // Return redirects (303/302) directly to the client
      // @ts-ignore - duplex is required for streaming bodies in Next.js
      duplex: "half",
    });

    const responseHeaders = new Headers(response.headers);

    // Remove headers that shouldn't be forwarded or might cause encoding issues
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
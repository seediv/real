import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// BASIC認証情報（環境変数から取得、フォールバックは現状の値）
const BASIC_AUTH_USER = (process.env.BASIC_AUTH_USER || "nobu").trim();
const BASIC_AUTH_PASSWORD = (
  process.env.BASIC_AUTH_PASSWORD || "mirror2024"
).trim();

// BASIC認証チェック
function checkBasicAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");

  if (authHeader && authHeader.startsWith("Basic ")) {
    try {
      const base64Credentials = authHeader.slice(6);
      const credentials = atob(base64Credentials);
      const colonIndex = credentials.indexOf(":");

      if (colonIndex !== -1) {
        const user = credentials.slice(0, colonIndex).trim();
        const password = credentials.slice(colonIndex + 1).trim();

        // 認証情報の検証（大文字小文字を区別）
        if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
          return true;
        }
      }
    } catch {
      // デコードエラーは無視
    }
  }
  return false;
}

// メインミドルウェア: BASIC認証
export default function middleware(request: NextRequest) {
  // BASIC認証チェック
  if (!checkBasicAuth(request)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="REAL Dashboard"',
      },
    });
  }

  // 認証成功時はリクエストを通す
  return NextResponse.next();
}

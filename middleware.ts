import { NextResponse, NextRequest } from "next/server";
import { localeSettings } from "./locales/settings";

export function middleware(request: NextRequest) {
  // 检查路径名中是否有任何支持的语言环境
  const { pathname } = request.nextUrl;
  const { fallbackLocale, locales } = localeSettings;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 如果没有区域设置，则重定向
  // 获取请求头中的首选语言,如果没有则使用默认的区域设置
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage?.split(",")[0].split("-")[0];
  
  if (preferredLocale && locales.includes(preferredLocale)) {
    request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
    //例如，传入请求是/products
    //新的URL现在是/en/products
    return NextResponse.redirect(request.nextUrl);
  }
  request.nextUrl.pathname = `/${fallbackLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  //不要在以下路径下运行中间件
  // prettier-ignore
  matcher:
  '/((?!api|static|track|data|css|scripts|.*\\..*|_next).*|sitemap.xml)',
};

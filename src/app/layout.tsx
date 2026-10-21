import type { Metadata } from "next";
import "./globals.css";
import "./mobile.css";

const title = "도곡 메타세쿼이아 로드 페스타 시즌3";
const description =
  "메타세쿼이아 길을 따라 걷고 즐기며, 한 페이지씩 채워가는 도곡2동의 가을 축제를 확인해보세요.";
const shareImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: title,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dogokmrf.com"),
  applicationName: title,
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: title,
    title,
    description,
    images: [{ ...shareImage, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

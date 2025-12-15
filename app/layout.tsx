import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiosk Phụ Tùng Xe",
  description: "Kiosk tra cứu phụ tùng xe: danh mục, giá, tồn kho.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

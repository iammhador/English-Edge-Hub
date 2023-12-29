import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Edge Hub",
  description: "Your key to mastering English and acing IELTS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

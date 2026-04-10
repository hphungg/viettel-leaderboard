import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leaderboard | Viettel Codev Hub",
  description: "Viettel Codev Hub Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface font-body text-on-surface flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}

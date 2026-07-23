import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard Template",
  description: "Next.js Dashboard Template for UI8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex min-h-screen relative overflow-x-hidden`}>
        {/* Sidebar wrapper */}
        <Sidebar />

        {/* Main content wrapper */}
        <div className="flex-1 flex flex-col min-w-0 w-full overflow-hidden">
          <Header />
          <main className="p-4 sm:p-6 flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { FeedbackDrawer } from "@/components/FeedbackDrawer";
import { SpotifyPopup } from "@/components/SpotifyPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All Things Frontend",
  description: "Leetcode For React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpotifyPopup />
          <FeedbackDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}

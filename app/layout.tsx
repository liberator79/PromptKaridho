import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./(Providers)/NextUiProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PromptKarido",
  description: "Buy AI Prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable}`}
        >
          <Provider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

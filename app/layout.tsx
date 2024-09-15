import type { Metadata } from "next";
import {Inter} from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./(Providers)/NextUiProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter'
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable}`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

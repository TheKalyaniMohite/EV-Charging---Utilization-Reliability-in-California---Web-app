import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "California EV Charging Insights",
  description:
    "Portfolio project: dashboards and planning signals for public EV charging in California — overview, county supply vs demand, and likely-busy stations.",
  // (optional polish)
  applicationName: "California EV Charging Insights",
  authors: [{ name: "Kalyani Kishor Mohite" }],
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "California EV Charging Insights",
    description:
      "Dashboards and planning signals for EV charging in California.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

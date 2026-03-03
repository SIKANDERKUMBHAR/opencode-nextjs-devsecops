import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Neon Pulse Soda | Futuristic Cold Drink Store",
  description:
    "Premium futuristic soda experience with 3D bottles, immersive visuals, and neon energy.",
  metadataBase: new URL("https://neon-pulse.example"),
  openGraph: {
    title: "Neon Pulse Soda",
    description:
      "Premium futuristic soda experience with 3D bottles, immersive visuals, and neon energy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Providers>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay" />
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}

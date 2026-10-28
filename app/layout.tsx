import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haryourmidey Boutique | Fashion as Unique as You",
  description: "Explore everyday fashion, statement tops, denim and accessories at Haryourmidey Boutique. Browse the collection and enquire on WhatsApp.",
  applicationName: "Haryourmidey Boutique",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

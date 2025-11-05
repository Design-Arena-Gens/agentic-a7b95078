import type { Metadata } from "next";
import "@iconscout/unicons/css/solid.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modality Dojo",
  description:
    "Explore multimodal learning journeys with consistent Unicons solid glyphs."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

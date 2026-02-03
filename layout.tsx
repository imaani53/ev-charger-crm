import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVCharge Pro CRM - EV Charger Installation Management",
  description: "Professional CRM for EV charger installation businesses",
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

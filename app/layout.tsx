import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Zenmo | Notes, shared safely within your class",
  description:
    "Zenmo is a school-based note sharing app for secure class notes, browsing, direct messaging, and profiles.",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-hidden bg-ink text-stone-50 selection:bg-ember/30 selection:text-white">
          <div className="ambient-shell" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

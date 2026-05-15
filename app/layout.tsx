import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TZScheduler — Auto-schedule interviews across global timezones",
  description: "Automatically find optimal interview slots for distributed teams. Integrates with Google Calendar and Outlook to eliminate scheduling back-and-forth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e822459b-f2ae-4753-bbce-d89526780036"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Kumar Gautam | Full-Stack Developer",
  description: "Portfolio of Abhishek Kumar Gautam: full-stack development, UI/UX, and cybersecurity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

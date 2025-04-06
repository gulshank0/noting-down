import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "noting-down",
  description: "A simple note-taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

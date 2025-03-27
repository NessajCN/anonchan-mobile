import type { Metadata } from "next";
import "./globals.css";

// to use rsuite components
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

export const metadata: Metadata = {
  title: "Anonchan Mobile",
  description: "Anonchan client app fo Android",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomProvider theme="dark">{children}</CustomProvider>
      </body>
    </html>
  );
}

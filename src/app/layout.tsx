import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  title: "VeriBid",
  description: "Next Generation Auction Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
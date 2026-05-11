import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  title: "VeriBid",
  description: "Next Generation Auction Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
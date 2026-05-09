import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
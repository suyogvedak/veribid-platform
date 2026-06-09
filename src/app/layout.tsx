import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

import AuthProvider from "@/components/providers/session-provider";

export const metadata = {
title: "VeriBid",
description:
"Next Generation Auction Marketplace",
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
    <AuthProvider> 
      <ThemeProvider>
        {children} 
      </ThemeProvider> 
    </AuthProvider> 
  </body> 
</html>
);
}

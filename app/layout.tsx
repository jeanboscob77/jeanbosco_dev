import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

export const metadata = {
  title: "Jean Bosco Portfolio",
  description: "Full-stack developer and portfolio site",
  verification: {
    google: "YOUR_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

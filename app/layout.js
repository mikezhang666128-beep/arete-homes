import "./globals.css";

export const metadata = {
  title: "Arete Homes | We Buy California Homes for Cash",
  description:
    "Sell your California home for 100% cash. No repairs, no commissions, no hidden fees. Close in as little as 7 days with Arete.",
  openGraph: {
    title: "Arete Homes | We Buy California Homes for Cash",
    description:
      "Sell your California home for 100% cash. No repairs, no commissions, no hidden fees. Close in as little as 7 days.",
    type: "website",
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const siteUrl =
  "https://graduation-invitation-1yqop17n5-devhuynhs-projects.vercel.app";

export const metadata: Metadata = {
  title: "Graduation Ceremony Invitation",
  description: "A meaningful milestone worth celebrating together",

  openGraph: {
    title: "Graduation Ceremony Invitation",
    description: "A meaningful milestone worth celebrating together",
    url: siteUrl,
    siteName: "Graduation Invitation",
    images: [
      {
        url: `${siteUrl}/assets/image.png`, // ĐƯỜNG DẪN CHUẨN
        width: 1200,
        height: 630,
        alt: "Graduation Ceremony Invitation Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Graduation Ceremony Invitation",
    description: "A meaningful milestone worth celebrating together",
    images: [`${siteUrl}/assets/image.png`], // CHUẨN
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} bg-cream`}>
        {children}
      </body>
    </html>
  );
}

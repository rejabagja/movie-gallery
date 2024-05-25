import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Galleries",
  description: "Aplikasi pencarian film sederhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
		    <link rel="icon" href="./img/favicon.ico" sizes="any" />
	    </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}

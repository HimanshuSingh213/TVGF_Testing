import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Voice Of Glaciers Foundation | Glacier Resilience & Preparedness",
  description: "A registered Section 8 nonprofit dedicated to connecting glacier science, local knowledge, and collective action for climate stability in the Hindu Kush Himalaya.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

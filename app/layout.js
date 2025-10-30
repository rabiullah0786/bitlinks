import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Provider from "./provider";  

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>   {/* 👈 Wrap your app inside */}
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

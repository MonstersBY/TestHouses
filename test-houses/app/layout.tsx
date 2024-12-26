
import React from "react";

import { Header } from "./_components/header/Header";
import "./globals.css";
import { Footer } from "./_components/footer/Footer";
import { PopUp } from "./_components/pop-up/PopUp";

export const metadata = {
  title: "Houses",
  description: "Construction solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body`}>
        <Header/>
        {children}
        <Footer/>
        <PopUp/>
      </body>
    </html>
  );
}

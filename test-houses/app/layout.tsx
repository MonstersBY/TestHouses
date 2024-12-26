
import React from "react";

import { Header } from "./_components/header/Header";
import "./globals.css";
import { Footer } from "./_components/footer/Footer";
import { YMapLoader } from './_components/map/YMapLoader';

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
        <YMapLoader />
      </body>
    </html>
  );
}

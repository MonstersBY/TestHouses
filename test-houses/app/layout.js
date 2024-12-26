
import { Footer } from "./_components/footer/Footer";
import { Header } from "./_components/header/Header";
import "./globals.css";

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
      </body>
    </html>
  );
}

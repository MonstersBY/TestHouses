
import "./globals.css";

export const metadata = {
  title: "Houses",
  description: "Construction solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body`}>
        {children}
      </body>
    </html>
  );
}

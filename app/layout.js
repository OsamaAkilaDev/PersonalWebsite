import "./globals.css";
import { workSans } from "./utils/fonts";

export const metadata = {
  title: "Osama Akila",
  description: "Osama Akila's personal website and portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased outline-none focus:ring-0`}
      >
        {children}
      </body>
    </html>
  );
}

import { poppins } from "./font";
import Navbar from "./Navbar"; // Import the client-side Navbar
import "./globals.css";

export const metadata = {
  title: "Om's Portfolio",
  description: "This is Om's Portfolio. Here you can find all of my projects and blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className + ' p-0 m-0'}>
        <Navbar /> {/* Use the client-side Navbar */}
        {children}
      </body>
    </html>
  );
}

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

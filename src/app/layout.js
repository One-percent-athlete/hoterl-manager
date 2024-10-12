import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "@/components/common/bootstrap";


export const metadata = {
  title: "Hotel Manager",
  description: "The best hotel management system ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">
          {children}
        </div>
        <Bootstrap />
        <Footer />
      </body>
    </html>
  );
}

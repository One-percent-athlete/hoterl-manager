import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Hotel Manager",
  description: "The best hotel management system ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

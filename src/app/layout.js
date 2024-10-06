
export const metadata = {
  title: "Hotel Manager",
  description: "The best hotel management system ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

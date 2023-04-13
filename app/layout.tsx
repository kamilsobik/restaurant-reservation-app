import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "OpenTableApp",
  description: "Restaurant reservation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}

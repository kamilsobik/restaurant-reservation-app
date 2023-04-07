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
      <body>{children}</body>
    </html>
  );
}

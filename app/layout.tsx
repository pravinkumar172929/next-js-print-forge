import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>Logo</li>
              <li>3d models</li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

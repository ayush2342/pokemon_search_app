import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F6F6F6] min-h-screen">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

// app/layout.tsx

export const metadata = {
  title: "Cookverse",
  description: "A recipe sharing platform for the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}


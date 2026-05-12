export const metadata = {
  title: "Nazarru",
  description: "Intellectual Garden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

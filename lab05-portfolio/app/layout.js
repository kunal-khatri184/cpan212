import '../styles/globals.css';

export const metadata = {
  title: 'Kunal Portfolio',
  description: 'Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion for CPAN 212 Lab 5',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

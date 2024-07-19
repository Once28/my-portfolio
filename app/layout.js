'use client'
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>My Portfolio</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

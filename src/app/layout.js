import './globals.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

export const metadata = {
  title: 'Beyond The Hiills',
  description: 'This is my portfolio description.',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
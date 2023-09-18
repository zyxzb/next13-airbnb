import './globals.css';
import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb clone by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Modal title='Hello World' actionLabel='Submit' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Ubuntu } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import HeaderBar from "@/components/header/page";
import FooterMain from "@/components/footer/page";
import TopBar from "@/components/topbar/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./page.module.css";
import { WhatsApp } from '@/components/whatsApp/page';
import ScrollToTop from '@/components/ScrollToTop/page';

// Load Inter font
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // choose the weights you need
  variable: '--font-ubuntu',
  display: 'swap',
});

export const metadata = {
  title: "Arofine Polymers ",
  description: "Arofine Polymers is one of India's leading manufacturers of industrial adhesives with products for over 150 industrial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className=' position-relative'>

        <TopBar />
        <HeaderBar />
        {children}
        <FooterMain />
        {/* <WhatsApp/> */}
        <ScrollToTop />
      </body>
    </html>
  );
}

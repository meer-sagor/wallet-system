import { Header } from '@/components/common/Header';
import '@/styles/globals.css';
import { Anek_Bangla } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const anekBangla = Anek_Bangla({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={`container m-auto ${anekBangla.className}`}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </>
  );
}

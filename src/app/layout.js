import './globals.css';
import Providers from './providers';

export const metadata = {
  title: "Miray Dogan",
  description: "Bu bir staj projesidir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body  >
        <Providers >
        {children}
        </Providers>
      </body>
    </html>
  );
}

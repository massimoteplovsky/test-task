import { FC, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface IComponentProps {
  children: ReactNode;
}

const Layout: FC<IComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

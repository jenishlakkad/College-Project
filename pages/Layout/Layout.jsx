import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="content">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterTwo from "../components/FooterTwo";
import Nav from "./Nav";
import Meta from "./Meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <FooterTwo />
    </>
  );
};
export default Layout;

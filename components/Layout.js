import Navbar from "./Navbar";
import Footer from "./Footer";

import Meta from "./Meta";
export const layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default layout;

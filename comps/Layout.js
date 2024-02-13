import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* Title Image */}
      <div className="title-image">
        <Image src="/title1.png" alt="Title" width={700} height={400} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

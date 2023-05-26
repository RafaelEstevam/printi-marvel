import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer.component";
import Header from "../components/Header/header.component";

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrivateLayout;

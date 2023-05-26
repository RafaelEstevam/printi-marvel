import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer.component";
import Header from "../components/Header/header.component";
import { DivWrapper } from "../components/Section/section.style";

const PrivateLayout = () => {
  return (
    <DivWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DivWrapper>
  );
};

export default PrivateLayout;

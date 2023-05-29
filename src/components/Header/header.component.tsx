import Grid from "../Grid/grid.component";
import { GridContent } from "../Grid/grid.style";
import logo1 from "../../assets/imgs/logo_3.png";
import GridItem from "../Grid/grid.item.component";
import { HeaderWrapper } from "./header.style";
import Button from "../Button/button.component";
import useNavigationHook from "../../hooks/useNavigation.hook";
import { theme } from "../../styles/theme";
import { removePaginationOnStorage } from "../../helpers/paginationPersist.helper";

const Header = () => {
  const { handleLogout } = useNavigationHook();

  return (
    <HeaderWrapper>
      <GridContent>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logo1}
            alt="Logo Marvel Comics"
            title="Logo Marvel Comics"
            height="40px"
          />
          <Button
            className="logout"
            id="logout"
            label="Logout"
            onClick={() => {
              handleLogout();
              removePaginationOnStorage("characterComicsListPageOffset");
              removePaginationOnStorage("charactersListPageOffset");
            }}
            _color={theme.colors.white}
          />
        </div>
      </GridContent>
    </HeaderWrapper>
  );
};

export default Header;

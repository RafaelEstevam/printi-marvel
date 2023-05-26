import Grid from "../Grid/grid.component";
import { GridContent } from "../Grid/grid.style";
import logo1 from "../../assets/imgs/logo_1.png";
import GridItem from "../Grid/grid.item.component";
import { HeaderWrapper } from "./header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <GridContent>
        <Grid>
          <GridItem>
            <img
              src={logo1}
              alt="Logo Marvel Comics"
              title="Logo Marvel Comics"
              height="40px"
            />
          </GridItem>
        </Grid>
      </GridContent>
    </HeaderWrapper>
  );
};

export default Header;

import Grid from "../Grid/grid.component";
import { GridContent } from "../Grid/grid.style";
import logo1 from "../../assets/imgs/logo_1.png";
import GridItem from "../Grid/grid.item.component";

const Header = () => {
  return (
    <header>
      <GridContent>
        <Grid>
          <GridItem>
            <img
              src={logo1}
              alt="Logo Marvel Comics"
              title="Logo Marvel Comics"
            />
          </GridItem>
        </Grid>
      </GridContent>
    </header>
  );
};

export default Header;

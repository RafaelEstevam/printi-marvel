import Card from "../../components/Card/card.component";
import Grid from "../../components/Grid/grid.component";
import GridItem from "../../components/Grid/grid.item.component";
import Section from "../../components/Section/section.component";
import Text from "../../components/Text/text.component";

import logo1 from "../../assets/imgs/logo_3.png";
import useFormData from "./hooks/useFormData.hook";
import Input from "../../components/Input/input.component";
import Button from "../../components/Button/button.component";
import { theme } from "../../styles/theme";
import { Div, StyledDivProps } from "../../components/Layout/layout.style";
import { LinkText } from "../../components/Text/text.style";

const Access = () => {
  const { formData, setFormData, submitAccessForm } = useFormData();

  const divStyle: StyledDivProps = {
    _display: "flex",
    _flexdirection: "column",
    _alignitems: "center",
  };

  return (
    <Section
      _height="100vh"
      _justifycontent="center"
      _alignitems="center"
      _flex="flex"
      _direction="column"
      _px={theme.margin.X4}
    >
      <Grid
        {...{
          _flex: "flex",
          _alignitems: "center",
          _direction: "column",
          _justifycontent: "center",
        }}
      >
        <GridItem {...{ _lg: 4, _md: 6, _sm: 8, _xs: 12 }}>
          <Card>
            <Div {...divStyle} _gap={theme.margin.X4}>
              <img
                src={logo1}
                alt="Logo Marvel Comics"
                title="Logo Marvel Comics"
                width="250px"
                height="101px"
              />
              <Text text="Login" variant="h2" />
            </Div>

            <form onSubmit={submitAccessForm}>
              <Div {...divStyle} _gap={theme.margin.X6}>
                <Input
                  set={setFormData}
                  state={formData}
                  placeholder="Insert your public key"
                  name="publicKey"
                  id="publicKey"
                  value={formData.publicKey}
                  required
                />

                <Input
                  set={setFormData}
                  state={formData}
                  placeholder="Insert your private key"
                  name="privateKey"
                  id="privateKey"
                  value={formData.privateKey}
                  required
                />

                <Button id="login-button" label="Login" type="submit" />
              </Div>
            </form>

            <Div _padding={`${theme.margin.X4} 0px 0px`}>
              <LinkText>
                If you haven't got a public and private key, create your
                <a href="https://developer.marvel.com/" target={"_blank"}>
                  Marvel Development Account.
                </a>
              </LinkText>
            </Div>
          </Card>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Access;

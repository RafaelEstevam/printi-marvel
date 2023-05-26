import Card from "../../components/Card/card.component";
import Grid from "../../components/Grid/grid.component";
import GridItem from "../../components/Grid/grid.item.component";
import Section from "../../components/Section/section.component";
import Text from "../../components/Text/text.component";

import logo1 from "../../assets/imgs/logo_1.png";
import useFormData from "./hooks/useFormData.hook";
import Input from "../../components/Input/input.component";
import Button from "../../components/Button/button.component";

const Access = () => {
  const { formData, setFormData, submitAccessForm } = useFormData();

  return (
    <Section
      _fullheight
      _justifycontent="center"
      _alignitems="center"
      _flex
      _direction="column"
    >
      <Grid
        {...{
          _flex: true,
          _alignitems: "center",
          _direction: "column",
          _justifycontent: "center",
        }}
      >
        <GridItem {...{ _lg: 4, _md: 4, _sm: 8, _xs: 12 }}>
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}
            >
              <img
                src={logo1}
                alt="Logo Marvel Comics"
                title="Logo Marvel Comics"
              />
              <Text text="Login" variant="h2" />
            </div>

            <form onSubmit={submitAccessForm}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  width: "100%",
                }}
              >
                <Input
                  set={setFormData}
                  state={formData}
                  placeholder="Insira sua chave privada"
                  name="privateKey"
                  id="privateKey"
                  value={formData.privateKey}
                  required
                />

                <Input
                  set={setFormData}
                  state={formData}
                  placeholder="Insira sua chave pública"
                  name="publicKey"
                  id="publicKey"
                  value={formData.publicKey}
                  required
                />

                <Button id="login-button" label="Acessar" type="submit" />
              </div>
            </form>
          </Card>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Access;

import Card from "../../components/Card/card.component";
import Grid from "../../components/Grid/grid.component";
import GridItem from "../../components/Grid/grid.item.component";
import Section from "../../components/Section/section.component";

import logo1 from "../../assets/imgs/logo_1.png";
import useFormData from "./hooks/useFormData.hook";
import { submitAccessForm } from "./services/access.service";

const Access = () => {
  const { formData, setFormData } = useFormData();

  return (
    <Section _fullheight _justifycontent="center">
      <Grid
        {...{
          _flex: true,
          _alignitems: "center",
          _direction: "column",
          _justifycontent: "center",
        }}
      >
        <GridItem {...{ _lg: 1, _md: 3, _sm: 6, _xs: 1 }}>
          <Card>
            <img
              src={logo1}
              alt="Logo Marvel Comics"
              title="Logo Marvel Comics"
            />
            <h1>Login</h1>
            <form onSubmit={submitAccessForm}>
              <input
                placeholder="Insira sua chave privada"
                name="priKey"
                id="priKey"
                value={formData.priKey}
                onChange={(e) => {
                  setFormData({ ...formData, ...{ priKey: e.target.value } });
                }}
              />
              <input
                placeholder="Insira sua chave pública"
                name="pubKey"
                id="pubKey"
                value={formData.pubKey}
                onChange={(e) => {
                  setFormData({ ...formData, ...{ pubKey: e.target.value } });
                }}
              />
              <button type="submit">Acessar</button>
            </form>
          </Card>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Access;

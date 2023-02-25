import { Header } from "../../../components/Header";
import { NewMeal } from "../../../components/NewMeal";
import { Percent } from "../../../components/Percent";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Percent />
      <NewMeal />
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { appRoutes } from "../../routes/routes";
import { Container, Icon, PercentSubtitle, PercentTitle } from "./styles";

export function Percent() {
  const { navigate } = useNavigation();

  function handlePercentPress() {
    navigate(appRoutes.Dashboard.Stats);
  }

  return (
    <Container onPress={handlePercentPress}>
      <PercentTitle>90,86%</PercentTitle>
      <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
      <Icon />
    </Container>
  );
}

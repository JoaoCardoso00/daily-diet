import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import { Header, Icon, PercentSubtitle, PercentTitle, StatsContainer } from "./styles";

export function DashBoardStats() {
  const theme = useTheme();

  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: theme.COLORS.green_light }}
      />
      <Header>
        <PercentTitle>90,86%</PercentTitle>
        <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
        <Icon />
      </Header>
      <StatsContainer></StatsContainer>
      
    </>
  );
}

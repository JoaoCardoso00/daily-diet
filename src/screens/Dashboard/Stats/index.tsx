import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import {
  BottomStat,
  BottomStatsContainer,
  BottomStatSubtitle,
  Header,
  Icon,
  IconContainer,
  IndividualStatsContainer,
  IndividualStatsSubtitle,
  IndividualStatsTitle,
  PercentSubtitle,
  PercentTitle,
  StatsContainer,
  StatsTitle,
} from "./styles";

export function DashBoardStats() {
  const theme = useTheme();

  const { goBack } = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: theme.COLORS.green_light }}
      />
      <Header>
        <PercentTitle>90,86%</PercentTitle>
        <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
        <IconContainer onPress={goBack}>
          <Icon />
        </IconContainer>
      </Header>
      <StatsContainer>
        <StatsTitle>Estatísticas gerais</StatsTitle>
        <IndividualStatsContainer>
          <IndividualStatsTitle>22</IndividualStatsTitle>
          <IndividualStatsSubtitle>
            melhor sequência de pratos dentro da dieta
          </IndividualStatsSubtitle>
        </IndividualStatsContainer>

        <IndividualStatsContainer>
          <IndividualStatsTitle>22</IndividualStatsTitle>
          <IndividualStatsSubtitle>
            melhor sequência de pratos dentro da dieta
          </IndividualStatsSubtitle>
        </IndividualStatsContainer>

        <BottomStatsContainer>
          <BottomStat type="PRIMARY" style={{ marginRight: 12 }}>
            <IndividualStatsTitle>22</IndividualStatsTitle>
            <BottomStatSubtitle>refeições dentro da dieta</BottomStatSubtitle>
          </BottomStat>
          <BottomStat type="SECONDARY">
            <IndividualStatsTitle>22</IndividualStatsTitle>
            <BottomStatSubtitle>refeições fora da dieta</BottomStatSubtitle>
          </BottomStat>
        </BottomStatsContainer>
      </StatsContainer>
    </>
  );
}

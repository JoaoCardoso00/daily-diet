import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type BottomStatStyleProps = {
  type: "PRIMARY" | "SECONDARY";
};

export const Header = styled.View`
  height: 200px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.green_light};
  align-items: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.green_dark,
}))``;

export const IconContainer = styled(TouchableOpacity)`
  position: absolute;
  left: 24;
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["3xl"]};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_1};
    margin-top: 16px;
  `}
`;

export const PercentSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.COLORS.gray_2};
  `}
`;

export const StatsContainer = styled.View`
  flex: 1;
  z-index: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
  position: absolute;
  border-radius: 20px;
  padding: 33px 24px;
  top: 200px;
  left: 0;
  right: 0;
  height: 100%;
`;

export const StatsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_1};
    font-size: ${theme.FONT_SIZE.md};
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    margin-bottom: 11px;
  `}
`;

export const IndividualStatsContainer = styled.View`
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.gray_6};
`;

export const IndividualStatsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_1};
    font-size: ${theme.FONT_SIZE["2xl"]};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
  `}
`;

export const IndividualStatsSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_2};
    font-size: ${theme.FONT_SIZE.md};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const BottomStatsContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin-top: 12px;
  width: 100%;
`;

export const BottomStat = styled.View<BottomStatStyleProps>`
  flex: 1;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ type, theme }) =>
    type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light};
`;

export const BottomStatSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_2};
    font-size: ${theme.FONT_SIZE.md};
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    text
  `}
`;

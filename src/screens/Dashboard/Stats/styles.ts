import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Header = styled.View`
  height: 200px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.green_light};
  align-items: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.green_dark,
}))`
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
  top: 200px;
  left: 0;
  right: 0;
  height: 100%;
`;

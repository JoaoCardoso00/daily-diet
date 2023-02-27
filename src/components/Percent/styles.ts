import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  padding: 20px 16px;
  margin-top: 32px;
  justify-content: center;
  border-radius: ;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.green_light};
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["3xl"]};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_1};
  `}
`;

export const PercentSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.COLORS.gray_2};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.green_dark,
}))`
  position: absolute;
  right: 8;
  top: 8;
`;

import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md};
    color: ${theme.COLORS.gray_1};
  `}
`;

export const Button = styled.TouchableOpacity`
  padding: 16px 24px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.gray_2};
  `}
`;

export const ButtonTitle = styled.Text`
  margin-left: 12px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.white};
    font-size: ${theme.FONT_SIZE.md};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.white,
}))``;

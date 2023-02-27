import styled, { css } from "styled-components/native";

export type MealStyleProps = {
  isMealOnDiet: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  border-width: 1px;
  margin-top: 8px;
  border-color: ${({ theme }) => theme.COLORS.gray_5};
  border-radius: 6px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_1};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.gray_4};
  margin: 0 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md};
    color: ${theme.COLORS.gray_2};
    flex: 1;
  `}
`;

export const Icon = styled.View<MealStyleProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ isMealOnDiet, theme }) =>
    isMealOnDiet ? `${theme.COLORS.green_mid}` : `${theme.COLORS.red_mid}`};
  margin-left: 12px;
  border-radius: 50%;
`;

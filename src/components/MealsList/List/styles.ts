import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xl};
    color: ${theme.COLORS.gray_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-top: 32px;
  `}
`;

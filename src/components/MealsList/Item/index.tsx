import {
  Container,
  Divider,
  Icon,
  MealStyleProps,
  Time,
  Title,
} from "./styles";

export type MealProps = MealStyleProps & {
  time: string;
  title: string;
};

export function Meal({ isMealOnDiet, time, title }: MealProps) {
  return (
    <Container>
      <Time>{time}</Time>
      <Divider />
      <Title>{title}</Title>
      <Icon isMealOnDiet={isMealOnDiet} />
    </Container>
  );
}

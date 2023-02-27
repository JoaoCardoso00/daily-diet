import { Header } from "../../../components/Header";
import { DayListProps } from "../../../components/MealsList/List/DayList";
import { MealsList } from "../../../components/MealsList/List/MealsList";
import { NewMeal } from "../../../components/NewMeal";
import { Percent } from "../../../components/Percent";
import { Container } from "./styles";

const DayLists: DayListProps[] = [
  {
    day: "20/12/2022",
    Meals: [
      {
        title: "X-Tudo",
        time: "20:00",
        isMealOnDiet: false,
      },
      {
        title: "Salada",
        time: "21:00",
        isMealOnDiet: true,
      },
    ],
  },
  {
    day: "21/12/2022",
    Meals: [
      {
        title: "Hamburguer",
        time: "16:00",
        isMealOnDiet: false,
      },
      {
        title: "Tomate",
        time: "21:00",
        isMealOnDiet: true,
      },
      {
        title: "Tomate",
        time: "21:00",
        isMealOnDiet: true,
      },
      {
        title: "Tomate",
        time: "21:00",
        isMealOnDiet: true,
      },
    ],
  },
];

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Percent />
      <NewMeal />
      <MealsList DayLists={DayLists} />
    </Container>
  );
}

import { FlatList, ScrollView } from "react-native";
import { Meal, MealProps } from "../Item";
import { Title } from "./styles";

export type DayListProps = {
  day: string;
  Meals: MealProps[];
};

export function DayList({ day, Meals }: DayListProps) {
  return (
    <>
      <Title>{day}</Title>
      <FlatList
        data={Meals}
        renderItem={({ item }) => (
          <Meal
            isMealOnDiet={item.isMealOnDiet}
            title={item.title}
            time={item.time}
          />
        )}
      />
    </>
  );
}

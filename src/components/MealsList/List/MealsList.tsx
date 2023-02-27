import { FlatList, View } from "react-native";
import { DayList, DayListProps } from "./DayList";
import { LinearGradient } from "expo-linear-gradient";

type MealsListProps = {
  DayLists: DayListProps[];
};

export function MealsList({ DayLists }: MealsListProps) {
  return (
    <FlatList
      data={DayLists}
      renderItem={({ item }) => <DayList day={item.day} Meals={item.Meals} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

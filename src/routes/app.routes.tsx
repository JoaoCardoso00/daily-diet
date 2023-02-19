import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens/Dashboard/Main";
import { DashBoardStats } from "../screens/Dashboard/Stats";
import { EditMeal } from "../screens/Meal/EditMeal";
import { NewMeal } from "../screens/Meal/NewMeal";
import { appRoutes } from "./routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={appRoutes.Dashboard.Main} component={Dashboard} />
      <Screen name={appRoutes.Dashboard.Stats} component={DashBoardStats} />
      <Screen name={appRoutes.Meal.New} component={NewMeal} />
      <Screen name={appRoutes.Meal.edit} component={EditMeal} />
    </Navigator>
  );
}

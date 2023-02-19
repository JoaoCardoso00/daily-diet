import { ThemeProvider } from "styled-components";
import theme from "./src/theme/index";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes/index";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Regular": require("./src/assets/fonts/NunitoSans-Regular.ttf"),
    "NunitoSans-Bold": require("./src/assets/fonts/NunitoSans-Bold.ttf"),
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

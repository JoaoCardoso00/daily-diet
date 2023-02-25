import { View, Image } from "react-native";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/avatar.png";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo />
      <Image source={Avatar} />
    </Container>
  );
}

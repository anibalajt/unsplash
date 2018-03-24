import Home from "./Home";
import Profile from "./containers/profile/index";
import { StackNavigator } from "react-navigation";

export default StackNavigator(
  {
    home: {
      screen: Home
    },
    profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "home",
    headerMode: "none"
  }
);

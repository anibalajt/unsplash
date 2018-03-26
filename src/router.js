import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Home from "./Home";
import Profile from "./containers/profile/index";
import Search from "./containers/search/index";
import SearchAux from "./containers/search/aux";
import Add_to_collection from "./containers/collection/add/index";
import { StackNavigator, TabNavigator, TabBarTop } from "react-navigation";

const Tab = TabNavigator(
  {
    home: {
      screen: Home
    },
    new: {
      screen: Home
    },
    search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
          console.log("navigation", navigation);
          navigation.navigate("searchAux");
        }
      })
    },
    profile: {
      screen: Profile
    }
  },
  {
    // initialRouteName: 'search',
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: true,
      showLabel: false,
      tabBarVisible: false,
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#999"
      }
    },
    tabBarComponent: TabBarTop,
    tabBarPosition: "top",
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true
  }
);

export default StackNavigator(
  {
    tab: {
      screen: Tab
    },
    add_to_collection: {
      screen: Add_to_collection
    },
    searchAux: {
      screen: SearchAux
    }
  },
  {
    initialRouteName: "tab",
    headerMode: "none"
  }
);

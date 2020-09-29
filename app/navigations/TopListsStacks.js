import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopREstaurants";

const TopRListsScreenStacks = createStackNavigator({
    TopRestaurants: {
        screen: TopRestaurantsScreen,
        navigationOptions: () => ({
            title: "Los mejores restaurantes"
        })
    }
});

export default TopRListsScreenStacks;
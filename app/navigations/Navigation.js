import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AcountStacks";
import FavoritesScreenSatcks from "./FavoritesStacks";

const NavigationStacks = createBottomTabNavigator(
    {
        Restaurants: {
            screen: RestaurantsScreenStacks,
            navigationOptions: () => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type='material-community'
                        name="silverware-fork-knife"
                        size={32}
                        color={tintColor}
                    />
                )
            })
        },
        Favorites: {
            screen: FavoritesScreenSatcks,
            navigationOptions: () => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="material-community"
                        name="heart-outline"
                        size={32}
                        color={tintColor}
                    />
                )
            })
        },
        TopLists: {
            screen: TopListsScreenStacks,
            navigationOptions: () => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type='material-community'
                        name="star-outline"
                        size={32}
                        color={tintColor}
                    />
                )
            })
        },
        Search: {
            screen: SearchScreenStacks,
            navigationOptions: () => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type='material-community'
                        name="magnify"
                        size={32}
                        color={tintColor}
                    />
                )
            })
        },
        Account: {

            screen: AccountScreenStacks,
            navigationOptions: () => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type='material-community'
                        name="account"
                        size={32}
                        color={tintColor}
                    />
                )
            })
        }
    },
    {
        initialRouteName: "Restaurants",
        order: ["Restaurants", "TopLists", "Search", "Favorites", "Account"],
        tabBarOptions: {
            inactiveTintColor: "#c8c8c8",
            activeTintColor: "#333333",

        },

    }
);

export default createAppContainer(NavigationStacks)

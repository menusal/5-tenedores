import { createStackNavigator } from "react-navigation-stack";
import AcountScreen from "../screens/Account/MyAcount";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";

const AccountScreenStacks = createStackNavigator({
    MyAccount: {
        screen: AcountScreen,
        navigationOptions: () => ({
            title: "Mi cuenta"

        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: "Login"

        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: "Registro"
        })
    }
});

export default AccountScreenStacks;
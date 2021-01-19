import { Login, Register } from "components/auth"
import { Home } from "components/Home"
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const authScreens = {
  Login: Login,
  Register: Register,
}

const userScreens = {
  Home: Home,
}
const Stack = createStackNavigator();
const MainStack = () => {
  const isLoggedIn = true;
  return (
    <Stack.Navigator>
      {Object.entries({
        // Use some screens conditionally based on some condition
        ...(isLoggedIn ? userScreens : authScreens),
      }).map(([name, component]) => (
        <Stack.Screen name={name} component={component} />
      ))}
    </Stack.Navigator>
  )
}

export default MainStack

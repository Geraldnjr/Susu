import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Pay() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pay Screen</Text>
      </View>
    );
  }

  function Earn() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Earn Screen</Text>
      </View>
    );
  }

  function Cards() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cards Screen</Text>
      </View>
    );
  }

  function Escrow() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Escrow Screen</Text>
      </View>
    );
  }

const Stack = createStackNavigator();
  
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
          <Stack.Screen name="Pay" component={Pay} options={{title: 'Pay'}}/>
          <Stack.Screen name="Earn" component={Earn} options={{title: 'Earn'}}/>
          <Stack.Screen name="Cards" component={Cards} options={{title: 'Cards'}}/>
          <Stack.Screen name="Escrow" component={Escrow} options={{title: 'Escrow'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
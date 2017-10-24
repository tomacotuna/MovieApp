import React from 'react';
import { Navigator } from 'react-native';
import Movies from './src/Movies';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Confirmation from './src/Confirmation';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
}; 

export default class App extends React.Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ name: 'movies' }}
        configureScene={( route, routeStack ) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom }
        renderScene={ RouteMapper }
      />
    );
  }
}
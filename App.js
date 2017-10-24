import React from 'react';
import { Navigator } from 'react-native';
import Movies from './src/Movies';
import NavigationExperimental from 'react-native-deprecated-custom-components';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return <Movies navigator={navigator} />;
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
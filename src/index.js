import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/navegacao';

const App = () => (
  <>
    <StatusBar barStyle='light-content' backgroundColor='#A1E4FD'/>
    <Routes />
  </>
);

export default App;

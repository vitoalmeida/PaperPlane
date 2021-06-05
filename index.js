import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Stack from '~/pages/Auth';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Stack);

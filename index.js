import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Auth from '~/pages/Auth';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Auth);

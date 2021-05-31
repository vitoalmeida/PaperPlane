import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Navegacao from '~/navegacao';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);

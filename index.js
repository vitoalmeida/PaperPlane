import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Navegacao from '~/navigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);

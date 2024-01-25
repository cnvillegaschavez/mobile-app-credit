import {NativeModules} from 'react-native';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: jest.fn(),
    useIsFocused: jest.fn(),
    useFocusEffect: jest.fn(),
  };
});

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve({})),
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

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

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@gluestack-ui/themed', () => ({
  useThemedStyles: jest.fn(() => ({
    container: 'mocked-container-style',
  })),
  componentsConfig: jest.fn(),
}));

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve({})),
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

import React, {Children} from 'react';
import {render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {GluestackUIProvider} from '@gluestack-ui/themed';

const mockStore = configureStore([]);

const navigation = {
  navigate: jest.fn(),
  addListener: jest.fn(),
  setOptions: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  replace: jest.fn(),
};

const config = {
  aliases: {},
  tokens: {},
  globalStyle: {},
  plugins: [],
};

const Providers = ({store, children}) => {
  return (
    <Provider {...{store}}>
      <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
    </Provider>
  );
};

const customRender = (ui, options) => {
  const {initialState, params} = options || {};
  const store = mockStore(initialState || {});
  const route = {
    params: params || {},
  };
  store.dispatch = jest.fn(store.dispatch);
  return {
    store,
    navigation,
    ...render(
      <Providers {...{store}}>
        {Children.map(ui, child =>
          React.cloneElement(child, {navigation, route}),
        )}
      </Providers>,
    ),
  };
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

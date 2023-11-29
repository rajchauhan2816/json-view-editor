import React from 'react';
import { Page } from './Page';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';

type Props = {
  value: any;
  setValue: (data: any) => void;
};

export const JsonViewEditor: React.FC<Props> = ({ value, setValue }) => {
  return (
    <Provider store={store}>
      <div className="testing"></div>
      <Page value={value} setValue={setValue} />
    </Provider>
  );
};

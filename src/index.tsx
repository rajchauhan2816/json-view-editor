import React from 'react';
import { Page } from './Page';
import { Provider } from 'react-redux';
import { store } from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';

type Props = {
  value: any;
  setValue: (data: any) => void;
};

export const JsonViewEditor: React.FC<Props> = ({ value, setValue }) => {
  return (
    <Provider store={store}>
      <div className="json-view-editor">
        <Page value={value} setValue={setValue} />
      </div>
    </Provider>
  );
};

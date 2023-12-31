import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JsonViewEditor } from '../.';
import '../dist/json-view-editor.cjs.development.css';

const sampleData = {
  key: 'product_type',
  values: ['Whole Round', 'Fillet Skin on', 'Fillet Skin off ', 'GG'],
  display_label: 'Product Type',
  description_label: ' Product Type',
};

const App = () => {
  const [value, setValue] = React.useState(sampleData);

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <JsonViewEditor value={value} setValue={setValue} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

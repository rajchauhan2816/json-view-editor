import React, { useMemo, useEffect } from 'react';
import VisualizedData from './VisualizedData/VisualizedData';
import { useSelector, useDispatch } from 'react-redux';
import { textareaSlice } from './features/textarea/textareaSlice';
import { dataSlice } from './features/data/dataSlice';
import { RootState } from './store';

const tabSize = 4;
type Props = {
  value: any;
  setValue: (data: any) => void;
};

export const Page: React.FC<Props> = ({ value, setValue }) => {
  const dispatch = useDispatch();
  const { initializeData } = dataSlice.actions;
  const { setLocalText } = textareaSlice.actions;

  const data = useSelector((state: RootState) => state.data.data);
  const text = useMemo(() => {
    return data === null ? '' : JSON.stringify(data, null, tabSize);
  }, [data]);

  useEffect(() => {
    dispatch(initializeData({ data: value }));
  }, []);

  // set value
  useEffect(() => {
    setValue(data);
  }, [data, setValue]);

  //update local text
  useEffect(() => {
    dispatch(setLocalText(text));
  }, [text, dispatch, setLocalText]);

  return <VisualizedData />;
};

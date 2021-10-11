import React from 'react'
import { useDispatch } from 'react-redux';
import { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import './index.css';
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify'
import { item, content } from './redux/actions';
import { SELECT, ITEM, CONTENT } from './redux/constants';

export const Content = () => {
  const item = useSelector((store) => store.item)
  const screenFoucs = useSelector((store) => store.screenFoucs);
  console.log(screenFoucs);
  return (
    <>
      <span>
        {DOMPurify.sanitize(JSON.stringify(item.name), {
          USE_PROFILES: { html: true }
        })}{' '}
      </span>

      <div>Create: </div>
      <br />
      <MultipleChoice />

      <div>Preview : </div>
      <br />
      <MultipleChoicePreview />

    </>
  );
}

function cases(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const App = () => {
  const dispatch = useDispatch();
  const screenFoucs = useSelector((store) => {
    return store.screenFoucs
  });
  const changeFocus = (e) => {
    const code = e?.target?.value;
    if (code !== undefined && code !== '' && code !== SELECT) {
      if (code === ITEM) {
        dispatch(item(ITEM));
      } else {
        dispatch(content(CONTENT));
      }
    } else {
      dispatch(content(null));
    }
  }
  return (
    <>
      <select value={screenFoucs.value} onChange={changeFocus}>
        <option selected value={SELECT}>{cases(SELECT)}</option>
        <option value={ITEM}>{cases(ITEM)}</option>
        <option value={CONTENT}>{cases(CONTENT)}</option>
      </select>
      <Content />
    </>
  );
};

export default App;
import React from 'react'

import { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import 'cp-items/dist/index.css'
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify'

const App = () => {
  const item = useSelector((store) => store.item)

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

export default App

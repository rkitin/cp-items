import { Fragment, default as React } from 'react'

import { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import 'cp-items/dist/index.css'

const App = () => {

  return (
    <>
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

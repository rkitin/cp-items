import React from 'react'

import { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import 'cp-items/dist/index.css'

const App = () => {
  return (
    <>
      <MultipleChoice />
      
      <div>Preview : </div>

      <MultipleChoicePreview />

    </>
  );
}

export default App

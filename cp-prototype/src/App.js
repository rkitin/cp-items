import React from 'react'

import ExampleComponent, { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import 'cp-items/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <MultipleChoice text="Create React Library Example 😄" />
      <div>Preview : </div>

      <MultipleChoicePreview />

    </>
  );
}

export default App

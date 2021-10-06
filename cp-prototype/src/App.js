import React from 'react'

import ExampleComponent, {MultipleChoice} from 'cp-items'
import 'cp-items/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <MultipleChoice text="Create React Library Example 😄" />
    </>
  );
}

export default App

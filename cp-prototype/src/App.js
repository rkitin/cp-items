import { Fragment, default as React } from 'react'

import { MultipleChoice, MultipleChoicePreview } from 'cp-items'
import 'cp-items/dist/index.css'

const App = () => {

  return (
    <Fragment>
      <div className="row">
        <div >Create: </div>
        <MultipleChoice />
      </div>
      <div className="row">
        <div>Preview : </div>
        <MultipleChoicePreview />
      </div>
    </Fragment>
  );
}

export default App

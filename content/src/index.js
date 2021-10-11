/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './styles.module.css'
import MultipleChoice from './components/create/multiplechoice'
import MultipleChoicePreview from './components/preview/MutlipleChoicePreview'
// import itemReducer from './reducers/item.reducer'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default ExampleComponent
export { MultipleChoice, MultipleChoicePreview }

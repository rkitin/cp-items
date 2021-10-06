import React from 'react'
import styles from './styles.module.css'
import MultipleChoice from './components/create/multiplechoice'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default ExampleComponent
export { MultipleChoice }

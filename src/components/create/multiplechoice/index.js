import React from 'react'
// import styles from './index.css'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useDispatch } from 'react-redux'

const MultipleChoice = ({ content, onUpdate, itemType }) => {
  const dispatch = useDispatch()
  const updateItem = (key, value) => {
    // dispatch({ type: 'UPDATE_STEM_CONTENT', payload: { [key]: value } })
    dispatch({ type: 'UPDATE_STEM_CONTENT', payload: { [key]: value } })
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={
        {
          // toolbar: {
          //     items: [
          //         'bold',
          //         'MathType'
          //     ]
          // },
        }
      }
      data=''
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        updateItem('name', data)
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor)
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor)
      }}
    />
  )
}

export default MultipleChoice

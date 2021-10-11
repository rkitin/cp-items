/* eslint-disable prettier/prettier */
import React from 'react'
import './index.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useDispatch } from 'react-redux';

const MultipleChoice = ({ content, onUpdate, itemType }) => {
  console.log('testing...');
  const dispatch = useDispatch();
  const updateItem = (key, value) => {
    dispatch({ type: 'UPDATE_STEM_CONTENT', payload: { [key]: value } })
  }

  return (
<<<<<<< HEAD
    <div className="test">
      <input
        type='text'
        value=''
        onChange={(event) => {
          const data = event.target.value;
          if (data !== undefined) {
            updateItem('name', data)
          }
        }}
      />
      <CKEditor
        editor={ClassicEditor}
        config={{}}
        data=''
        onReady={(editor) => { // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          updateItem('name', data)
        }}
      />
      <span>testing DOM 1...</span>
    </div>
=======
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
>>>>>>> 771e9175099c26c9a579566329496859e4c9893c
  )
}

export default MultipleChoice

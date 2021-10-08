import * as React from 'react'
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify'

export const MultipleChoicePreview = () => {
  const item = useSelector((store) => store.item)

  return (
    <React.Fragment>
      <p>
        <div>Name :</div>
        <p class="text-left">{item.name}</p>
      </p>
      <p>
        <div>Stem Content :</div>
        <p class="text-left" >
          {DOMPurify.sanitize(JSON.stringify(item.stemContent), {
            USE_PROFILES: { html: true }
          })}
        </p>
      </p>
    </React.Fragment>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify'

export const MultipleChoicePreview = () => {
  const item = useSelector((store) => store.item)

  return (
    <span>
      {DOMPurify.sanitize(JSON.stringify(item.name), {
        USE_PROFILES: { html: true }
      })}{' '}
    </span>
  )
}

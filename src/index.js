import React from 'react'

export default function Test({ children }) {
  return (
    <div
      style={{ padding: 5, border: '1px solid black', display: 'inline-block' }}
    >
      Component is working. Input: <strong>{children}</strong>
    </div>
  )
}

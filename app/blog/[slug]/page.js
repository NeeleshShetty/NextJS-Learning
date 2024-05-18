import React from 'react'

const BlgPostPage = ({params}) => {
  return (
    <main><h1>BlgPostPage</h1>
    <h1>{params.slug}</h1></main>
  )
}

export default BlgPostPage
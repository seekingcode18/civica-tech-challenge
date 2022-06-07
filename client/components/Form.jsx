import React, { useState } from 'react'

const Form = ({ handleSearch }) => {
  const handleInput = (e) => {
    const searchString = e.target.value.toLowerCase()
    handleSearch(searchString)
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Start typing to search" onChange={(e) => handleInput(e)} />
      </form>
    </>
  )
}

export default Form

import React, { useState, useEffect } from 'react'
import PersonnelList from './components/PersonnelList'
import Form from './components/Form'

const App = () => {
  const [data, setData] = useState()
  const [url, setUrl] = useState('http://localhost:8080/api/personnel')
  const [inputText, setInputText] = useState('')
  const [filteredData, setFilteredData] = useState()

  const getData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
  }

  const getAllPersonnel = (e) => {
    e.preventDefault()
    getData(url)
  }

  const handleSearchText = (searchString) => {
    setInputText(searchString)

    const filteredData = data.filter(item => filterValues(item, searchString))
    
    setFilteredData(filteredData)
  }
  
  const filterValues = (item, searchString) => Object.values(item).join('').toLowerCase().includes(searchString.toLowerCase())

  useEffect(() => {
    if (inputText === '') getData(url)
  }, [])
  
  return (
    <main className='container'>
      <h1 className='heading'>Personnel App</h1>
      <Form getAll={getAllPersonnel} handleSearch={handleSearchText} />
      {filteredData ? <PersonnelList items={filteredData} /> : data ? <PersonnelList items={data} /> : ''}
    </main>
  )
}

export default App

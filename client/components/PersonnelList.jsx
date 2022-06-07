import React from 'react'
import PersonnelItem from './PersonnelItem'

const PersonnelList = ({ items }) => {
  return (
    <ul className='personnel-list'>
      {items.map(item => (
        <PersonnelItem key={item._id} item={item} />
      ))}
    </ul>
  )
}

export default PersonnelList

import React from 'react'

const PersonnelItem = ({ item }) => {
  return (
    <li className='personnel-card'>
      <h3>{item.GivenName} {item.FamilyName}</h3>
      <p><span className="personnel-label">Date of birth:</span> {item.DateOfBirth.slice(0, 10)}</p>
      <p><span className="personnel-label">Reference:</span> {item.Reference}</p>
    </li>
  )
}

export default PersonnelItem
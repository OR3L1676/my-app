import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [{id: 1, name: 'Orel', age: 19, skill: 'Developer'},
{id: 2, name: 'Mayyan', age: 18, skill: 'Sleeping'}, 
{id: 3, name: 'Idan', age: 11, skill: 'Gamer'}]

  const personsList = persons.map((person) => <Person key={person.id} person={person} />)
    return (
    <div>
      {
      personsList  
      }     
    </div>
  )
}

export default NameList

function List3(props) {
    const list = [
        {name: 'Eliran', age: '19', city: 'Ashdod'}
        ,{name: 'Orel', age: '19', city: 'Rishon LeZion'},
        {name: 'David', age: '22', city: 'Rishon LeZion'}]

    return (
    <div>
      <ul>
        <li>{props.zname}</li>
        {list.map((itzik,index) => (
            <li key={index}>{itzik.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List3
import React from 'react'

const Greet = ({name, heroName, children}) => {
return ( 
<>
<h1>hello {name} the {heroName}</h1>
{children}
</>
   )
}

export default Greet
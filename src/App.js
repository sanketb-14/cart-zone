import React from 'react'

import {Navbar,Product,Menu} from './components'


const App = () => {
  const menu = ["All" ,"Men", "Women" , "Children" , "Other" ]
  return (
    <div className='w-full'>
      <Navbar menu={menu}/>
      <Menu menu={menu}/>
      <Product/>
     
    </div>
  );
}

export default App
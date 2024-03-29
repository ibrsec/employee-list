

import React from 'react'

function Header({first,last}) {
  return (
    <div className='text-center m-3'>
        <h3>Employee List</h3>
        <span>(Employees {first+1} to {last})</span>
    </div>
  )
}

export default Header;
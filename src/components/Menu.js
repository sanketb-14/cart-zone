import React from 'react'
import {useSelector} from 'react-redux'

const Menu = ({onMenuClick}) => {
  const products = useSelector((state) => state.products.items)
  let menu = ["All",...new Set(products.map((item) => item.category))]
  
  return (
    <div className="btn-group btn-group-horizontal flex justify-center bg-neutral-content p-4">
      {menu.map((item,id) => (
        <button key={id} className="btn btn-md font-semibold text-accent mx-2 border-y-4 border-accent shadow-xl bg-base-300 border-none focus:bg-accent-focus active:bg-accent-focus outline-none active:text-accent-content focus:text-accent-content " onClick={() => onMenuClick(item)}>{item}</button>
      ))}
    </div>
  );
}

export default Menu
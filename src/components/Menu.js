import React from 'react'

const Menu = (props) => {
  return (
    <div className="btn-group btn-group-horizontal flex justify-center bg-neutral-content p-4">
      {props.menu.map((name,ind) => (
        <button key={ind} className="btn btn-md font-semibold text-accent mx-2 border-y-4 border-accent shadow-xl bg-base-300 border-none focus:bg-accent-focus active:bg-accent-focus outline-none active:text-accent-content focus:text-accent-content ">{name}</button>
      ))}
    </div>
  );
}

export default Menu
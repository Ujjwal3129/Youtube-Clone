import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='px-4  py-2 m-2 rounded-lg bg-zinc-200 hover:bg-gray-300 text-black hover:shadow-md tranistion-all' >{name}</button>
    </div>
  )
}

export default Button

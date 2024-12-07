import React from 'react'

const Button = ({content,path,color,hover}) => {
  return (
    <a href={`${path}`} download>
          <button className={`w-full py-2 px-4  text-white ${color} rounded shadow hover:${hover}`}>
            {content}
          </button>
        </a>
  )
}

export default Button

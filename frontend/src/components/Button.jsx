import React from 'react'

const Button = ({content,path,color}) => {
  return (
    <a href={`${path}`} download>
          <button className={`w-full py-2 px-4  text-white ${color}-500 rounded shadow hover:${color}-600`}>
            {content}
          </button>
        </a>
  )
}

export default Button

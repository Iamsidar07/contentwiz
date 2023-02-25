import React from 'react'

const Input = ({value,setValueHook,type="text",placeholder}) => {
  return (
      <input
          type={type}
          name="code"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValueHook(e.target.value)}
          className="text-base leading-6 text-gray-200 px-4 py-6 flex-1 rounded-lg outline-none  "
      />
  )
}

export default Input
import React from 'react'

const LogIn = () => {
  return (
    <button
        value={5}
        onClick={(e:React.MouseEvent)=>{
            console.log('event',e.target.value)
        }}
    >LogIn
    </button>
  )
}

export default LogIn
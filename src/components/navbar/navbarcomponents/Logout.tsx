import React from 'react'

const Logout = () => {
  return (
    <button
        onClick={(e:any)=>{
            alert(JSON.stringify(e))
        }}
    >
        Log OUT
    </button>
  )
}

export default Logout
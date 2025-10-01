import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ loading }) {
  return (
    <div>
        <ClipLoader 
        color="#4338ca" 
        loading={loading}
        cssOverride={override} />
      
    </div>
  )
}

export default Spinner
import React from 'react'

import loaderImg from '../images/loader.gif'

const Loader = () => {
  return (
    <div 
        style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'grid',
            placeItems:'center',
            backgroundColor: '#00081F',
        }}
    >
         <img src={loaderImg} alt="" style={{maxWidth:'100%'}}/>
    </div>
  )
}

export default Loader
import React from 'react'
import pho1 from './mp01.webp'
import pho2 from './mp02.webp'
import pho3 from './mp03.webp'

export default function Milan(){
  return(
    <>
        <div className="photolog">
            <div className="pho1"><img src={pho1} alt="" /></div>
            <div className="pho2"><img src={pho2} alt="" /></div>
            <div className="pho3"><img src={pho3} alt="" /></div>
        </div>

    </>
  )
}

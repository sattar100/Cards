import React from 'react'
import { Bookmark } from 'lucide-react'
export const Cards = (props) => {
  return (

    < div className='flex flex-col gap-y-5 '>
      <div className=' p-6 '>
        <div className='   w-[400px] h-[500px] bg-white  p-4 border-0 rounded-3xl  '>
          <div className='flex justify-between p-6 '>
            <div className='w-24 h-12 rounded-full object-cover '><img src="data:image/png;base64,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KsH4Gf3dVzqn4vF+PyF3g7PE7MhNGT8Ok/HthtIZTw4vViVUOX25OP2wctusxc0CvgGdzVLHFMlLmZ8Xzg0VhM7EWTxvK6HluWPu1wG5467nL38iorsAk52fCxAz0S39c3Vw6bh2xp2xszisPjMWkqtn3okHmrrGYR3uu4A7wtllaC58NrZvq91m6owvch3jyXSzW63nNAvH4A2PJffo1l9+R87BRcdZ6fofFpmMrmf2y7fX95VLSIz7cG1heti9v74tt3/c7kwtIlPZTnHdHc9fPqok8DV0nPdKlIsjHR66+/18Pl8uXz7W76vVs4vVar3+/Fwu5/OnfdfvFP220l3Q+++GVdbul3oJgs6qonPKSywpLGK769Y8Ese7avb6i22DYLPtJiztCrgMPa2jucXUyrz9vqCKC2P6vswka8YFNOius93wtv7D+leI8DDZrOb618lwadi/Psc4xc3unzANAuew+9R5JenzNFjb1WH6jy03Ee7ZuPGua65gw01bvFrHD1TBvhtu6uDs3NzBOk/HsX7/+Ty9R8byS2F0OpPFautdZ0ajpmPo5V1lVPbvBydSxP6fwg2lV5/7JxfdAO7/95/r3eJHCuQ/D2M8do74HxuCgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMD/FP8B8NLkHDjMl6QAAAAASUVORK5CYII=" alt="" srcset="" /></div>
            <div className=''> <button className='bg-gray-100 flex   p-2 rounded-xl font-medium text-sm'>save< Bookmark /></button> </div>
          </div>
          <div className='p-5 h-[200px] '>
            <div>

              <div className='flex gap-1.5 '>
                <h2 className=' text-3xl font-bold'>{props.company} </h2>
                <p className='pt-3.5 text-gray-600 text-sm '> {props.date}</p>
              </div>
              <h2 className='font-extrabold text-3xl '> {props.post}</h2>
            </div>
            <div className='flex gap-x-2.5 text-sm pt-2'>
              <h4 className='bg-gray-200 p-2 rounded-3xl'>Part Time</h4>
              <h4 className='bg-gray-200 p-2 rounded-3xl'>Senior Engineer</h4>
            </div>
          </div>
          <div className='flex border-t-2 mt-22 pt-2 justify-between'>
            <div>
              <h3 className='text-xl '>200k-300k</h3>
              <p>Islamabad,Pakistan</p></div>
            <div>
              <button className='bg-black text-white p-2 text-sm rounded-2xl'>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

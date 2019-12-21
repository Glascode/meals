import React from 'react'

import { Trash2 } from 'react-feather'

function IntakeCard(props) {
  return (
    <div className={`relative flex md:flex-col p-4 md:px-6 bg-gray-200 rounded-lg border border-transparent ${props.className}`}>
      <img src={`/images/food/${props.id}.png`}
           className="w-1/6 md:w-1/2 mr-4 md:mx-auto md:mt-4 md:mb-8" />

      <div className="flex-grow flex md:flex-col items-center justify-between md:justify-center mr-8 md:mr-0">
        <div className="text-lg md:text-center text-gray-700 md:px-4 mr-4 md:mr-0 md:mb-4">{props.name}</div>
        <div className="flex-shrink-0 text-center text-gray-600 md:mb-4">{props.portions} {props.portions > 1 ? 'portions' : 'portion'}</div>
      </div>

      <button onClick={props.removeIntake}
              className="md:absolute md:top-0 md:right-0 md:p-4 focus:outline-none"
              title="Remove intake">
        <Trash2 size={16} className="text-gray-600" />
      </button>
    </div>
  )
}

export default IntakeCard

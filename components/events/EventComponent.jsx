import { MoreHorizontal, MoreVertical } from 'lucide-react'
import React from 'react'

const EventComponent = ({ event, ...props }) => {
  return (
    <div className="flex flex-col  items-start w-full h-20 bg-white/50 dark:bg-zinc-500/20 rounded-lg">
      <div className='flex flex-row w-full mt-2 mx-2 items-center '>
        <div className=" w-2 h-2 rounded-full bg-green-500 mr-2" />
        <p className="font-semibold text-sm text-gray-600 dark:text-white">10:00-11:00</p>

        <MoreVertical className=" w-4 h-4 text-gray-600 ml-auto mr-4" />
      </div>
      <div className=' ml-2'>
        <p className="text-black font-semibold text-md dark:text-white ">Meeting with the team</p>
        <p className="text-gray-500 text-xs ">Explain them how to center a div</p>
      </div>
    </div>
  )
}

export default EventComponent

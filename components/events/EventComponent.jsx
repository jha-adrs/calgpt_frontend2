import { getTimeRange } from '@/lib/utils';
import { MoreVertical } from 'lucide-react'


const EventComponent = ({ event, ...props }) => {
  const { title, description, time } = event;
  if (!event || !event.title || !event.start || !event.end ) return null;
  return (
    <div className="flex flex-col items-start w-full h-20 bg-white/50 dark:bg-zinc-500/20 rounded-lg mb-2">
      <div className='flex flex-row w-full mt-2 mx-2 items-center '>
        <div className={`w-2 h-2 rounded-full  mr-2 bg-${event.color||"green"}-500`} />
        <p className="font-semibold text-sm text-gray-600 dark:text-white">Starts: 10:30 AM</p>

        <MoreVertical className="cursor-pointer w-4 h-4 text-gray-600 ml-auto mr-4" />
      </div>
      <div className=' ml-2'>
        <p className="text-black font-semibold text-md dark:text-white ">{event.title}</p>
        <p className="text-gray-500 text-xs ">{event.description}</p>
      </div>
    </div>
  )
}

export default EventComponent

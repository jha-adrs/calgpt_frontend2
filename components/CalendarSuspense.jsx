import { Loader2 } from 'lucide-react'


const CalendarSuspense = () => {
    return (
        <div className='relative w-[95%] h-[60%] sm:w-full  sm:h-[95%] bg-white/40 rounded-lg  sm:ml-4 mt-4  overflow-hidden dark:bg-zinc-600/10'>
            <div className='relative left-[50%] top-[50%] items-center justify-center '>
                <Loader2 size={32} className="text-primary animate-spin" />
            </div>
        </div>
    )
}

export default CalendarSuspense

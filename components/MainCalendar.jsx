
import { Suspense, lazy } from "react"
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "./ui/button";
import {  Loader2 } from "lucide-react";
import FullCalendar from "@fullcalendar/react";
//Lazy load
// const FullCalendar = lazy(() =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(import("@fullcalendar/react")), 3000); // 2000 ms delay
//   })
// );
const MainCalendar = () => {
  return (
    <div className='relative w-[95%] h-[60%] sm:w-full  sm:h-[95%] bg-white/40 rounded-lg  sm:ml-4 mt-4 overflow-visible sm:overflow-hidden dark:bg-zinc-600/10'>
      <div className='w-full h-fit p-4 m-4 rounded-lg'>
      <FullCalendar
        
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2023-11-30' },
          { title: 'event 2', date: '2023-11-29' }
        ]}
      />
      </div>
        
    </div>
  )
}

export default MainCalendar

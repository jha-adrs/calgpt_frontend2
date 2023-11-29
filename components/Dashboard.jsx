import LeftNavbar from './navbar/LeftNavbar'

import MainCalendar from './MainCalendar'
import React, { Suspense, lazy } from 'react'
import LeftWidgetSkeleton from './LeftWidgetSkeleton';
import LeftWidget from '@/components/LeftWidget';
import CalendarSuspense from './CalendarSuspense';
const Dashboard = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, [])
    return (
        <div className=" h-screen flex-col  justify-center 
    bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-200 via-rose-300 to-violet-600
        dark:bg-[radial-gradient(at_center,_var(--tw-gradient-stops))] dark:from-[rgb(31,31,31)] dark:via-[#141414] dark:to-black
        ">
            <div className='flex flex-col sm:flex-row m-2 rounded-lg  h-[98%] max-h-[95%] shadow-sm shadow-inherit  overflow-hidden items-center sm:items-start'>
                {/* Left Nav */}
                <LeftNavbar />

                {/*Left Widget */}
                
                {isLoaded ? <LeftWidget /> : <LeftWidgetSkeleton />}
            
                {/*Main Calendar */}
                {isLoaded ? <MainCalendar /> : <CalendarSuspense />}
            </div>
        </div>
    )
}

export default Dashboard

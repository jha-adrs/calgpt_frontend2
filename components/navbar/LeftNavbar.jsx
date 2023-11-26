
import {  ModeToggleWithTransition } from '../mode-toggle'
import {   Calendar, Feather, FileClock, LucideLogOut, Settings2, Users2 } from 'lucide-react'


import "@/styles/extra.css"
import MiniToolTip from '../mini-tooltip'
import UserAvatar from '../forms/UserAvatar'
import ExpandedLeftNav from './ExpandedLeftNav'


const LeftNavbar = () => {
    
    return (
        <>
        <div className='hidden sm:flex flex-col w-[6%] sm:min-w-12 bg-white/60 dark:bg-zinc-600/10 rounded-lg ml-2 mt-4   justify-between h-[95%] '>
            <div className='my-4'>
                <Feather  className='flex flex-col items-center justify-center w-full aspect-square rounded bg-transparent border-none text-gray-800 dark:text-white mb-8  h-8' />
                <div className="flex flex-col gap-6 items-center">

                    <MiniToolTip text='Calendar' type="leftNav" Component={Calendar} />
                    <MiniToolTip text='Past Events' type="leftNav" Component={FileClock} />
                    <MiniToolTip text='Team' type="leftNav" Component={Users2} />
                    <MiniToolTip text='Settings' type="leftNav" Component={Settings2} />


                </div>
            </div>
            <div className='mb-8'>
                <div className="flex flex-col gap-6 items-center">
                    <MiniToolTip text='Profile' type="leftNav" Component={UserAvatar} />
                    <MiniToolTip text='Toggle Theme' type="leftNav" Component={ModeToggleWithTransition} />
                    <MiniToolTip text='Logout' type="leftNav" Component={LucideLogOut} />
                </div>
            </div>

        </div>

        <div className='sm:hidden'>
        <ExpandedLeftNav/>
        </div>
        
        </>
    )
}

export default LeftNavbar

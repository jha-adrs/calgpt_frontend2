import React from 'react'
import { ModeToggle, ModeToggleWithTransition } from '../mode-toggle'
import { AlignCenter, AlignLeft, BadgePercent, Calendar, CalendarClock, ChevronFirstIcon, FileClock, LogOut, LucideLogOut, LucideMenu, MenuIcon, Settings, Settings2, User2, Users, Users2 } from 'lucide-react'
import { Button } from '../ui/button'

import "@/styles/extra.css"
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import MiniToolTip from '../mini-tooltip'
import { Avatar } from '../ui/avatar'
import UserAvatar from '../forms/UserAvatar'

const LeftNavbar = () => {
    return (
        <div className='flex flex-col w-10  bg-white/40 rounded ml-4 mt-4  dark:bg-gray-200/10 justify-between h-[96%]'>
            <div className='my-4'>
                <AlignLeft variant='outline' className='flex flex-col items-center justify-center w-full aspect-square rounded bg-transparent border-none text-primary mb-8 ' />
                <div className=" flex flex-col gap-6 items-center">

                    <MiniToolTip text='Calendar' type="leftNav" Component={Calendar} />
                    <MiniToolTip text='Team' type="leftNav" Component={Users2} />
                    <MiniToolTip text='Settings' type="leftNav" Component={Settings2} />


                </div>
            </div>
            <div className='mb-4'>
                <div className="flex flex-col gap-6 items-center">
                    <MiniToolTip text='Profile' type="leftNav" Component={UserAvatar} />
                    <MiniToolTip text='Toggle Theme' type="leftNav" Component={ModeToggleWithTransition} />
                    <MiniToolTip text='Logout' type="leftNav" Component={LucideLogOut} />
                </div>
            </div>

        </div>
    )
}

export default LeftNavbar

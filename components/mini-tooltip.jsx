import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const ToolTipPresetClasses = {
    "leftNav": "text-gray-700 dark:text-white h-[1.2rem] w-[1.2rem]  transition-colors  rotate-0 scale-100 "
}
const settings={
    "leftNav": {
        sideOffset: 5,
        alignOffset: -5,
        side: "right"
    }
}

const MiniToolTip = ({text,side,alignOffset,sideOffset,type, Component, ...props}) => {
    const reqClass = ToolTipPresetClasses[type] || ""

    return (
    <Tooltip>
        <TooltipTrigger {...props}>
        <Component className={reqClass}/>
        </TooltipTrigger>
        <TooltipContent sideOffset={settings[type].sideOffset}  alignOffset={settings[type].alignOffset} side={settings[type].side} >
        <span className='text-xs'>{text}</span>
        </TooltipContent>
    </Tooltip>
    
  )
}

export default MiniToolTip

// Props Validation

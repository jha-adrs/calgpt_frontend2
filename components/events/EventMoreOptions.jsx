import React from 'react'
import { getTimeRange } from '@/lib/utils';
import { BellOff, BellRing, BookOpenCheck, BookX, Bot, BrainCircuit, Delete, Ear, EarOff, Eye, EyeOff, Monitor, MoreVertical, PhoneOutgoing, ScreenShare, ScreenShareOff, Trash } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';

const EventMoreOptions = () => {

  const [allowBot, setAllowBot] = React.useState({ videoRecord: false, audioRecord: true, screenRecord: false });
  const [notify, setNotify] = React.useState(true);
  const [allowTranscript, setAllowTranscript] = React.useState(false);
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className=" text-gray-600 ml-auto mr-4 " >
        <MoreVertical className=" w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="bg-white dark:bg-black">

        <DropdownMenuSub>
          <DropdownMenuSubTrigger><Bot className='w-4 h-4 mx-2 ' /> Bot Settings </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="bg-white dark:bg-black">
              <DropdownMenuItem onClick={(e) => {
                e.preventDefault();
                setAllowBot({ ...allowBot, videoRecord: !allowBot.videoRecord })
              }}>
                {allowBot.videoRecord ? <Eye className='w-4 h-4 mx-2 ' /> : <EyeOff className='w-4 h-4 mx-2 text-gray-400' />} Video
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => {
                e.preventDefault();
                setAllowBot({ ...allowBot, audioRecord: !allowBot.audioRecord })
              }}>
                {allowBot.audioRecord ? <Ear className='w-4 h-4 mx-2 ' /> : <EarOff className='w-4 h-4 mx-2 text-gray-400' />} Audio
              </DropdownMenuItem>

              <DropdownMenuItem onClick={(e) => {
                e.preventDefault();
                setAllowBot({ ...allowBot, screenRecord: !allowBot.screenRecord })
              }}>
                {allowBot.screenRecord ? <Monitor className='w-4 h-4 mx-2 ' /> : <ScreenShareOff className='w-4 h-4 mx-2 text-gray-400' />} Screen
              </DropdownMenuItem>

            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>


        <DropdownMenuItem>
          <PhoneOutgoing className='w-4 h-4 mx-2 ' /> Join Event
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Eye className='w-4 h-4 mx-2 ' /> View Event
        </DropdownMenuItem>

        <DropdownMenuItem onClick={(e) => {
          e.preventDefault();
          setNotify(!notify)
        }}>
          {notify ? <BellRing className='w-4 h-4 mx-2 ' /> : <BellOff className='w-4 h-4 mx-2 text-gray-400' />} Notify Me
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => {
          e.preventDefault();
          setAllowTranscript(!allowTranscript)
        }}>
          {allowTranscript ? <BookOpenCheck className='w-4 h-4 mx-2 ' /> : <BookX className='w-4 h-4 mx-2 text-gray-400' />} Transcribe
        </DropdownMenuItem>

        <DropdownMenuItem><Trash className='w-4 h-4 mx-2' /> Clear Item</DropdownMenuItem>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default EventMoreOptions

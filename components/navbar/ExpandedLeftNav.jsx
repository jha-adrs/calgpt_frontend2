import { AlignLeft, X, Calendar, LucideLogOut, Settings2, Users2, FileClock, Feather } from 'lucide-react'
import Icons from "../Icons"
import MiniToolTip from "../mini-tooltip"
import * as Dialog from '@radix-ui/react-dialog';
import { ModeToggleWithTransition } from '../mode-toggle';
import UserAvatar from '../forms/UserAvatar';

export function ExpandedLeftNav() {
    return (
        <Dialog.Root className="absolute ">
            
            <Dialog.Trigger className="absolute left-3 top-3 flex flex-col  items-start justify-start w-fit aspect-square rounded bg-transparent border-none text-primary mb-8 ">
                <AlignLeft variant='outline' className='flex flex-col items-center justify-center w-full aspect-square rounded bg-transparent border-none text-black dark:text-white  ' />
            </Dialog.Trigger>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 " />
            <Dialog.Content open={true} className="fixed w-[70%] inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-slate-100/20 dark:bg-zinc-950/80
        rounded ">
                <Dialog.Title className="text-lg text-white text-center">
                    <div className="flex flex-row gap-2 items-center justify-center my-4">
                    <Feather/>GCal
                    </div>
                </Dialog.Title>
                <Dialog.Close className="absolute top-0 right-0  m-2  rounded-md bg-zinc-500/10">
                    <X className='text-white' />
                    <span className="sr-only">Close</span>
                </Dialog.Close>

                <div className="flex flex-col mt-4 ml-4 justify-between h-[90%]">
                    <div className="flex flex-col gap-6 items-start">
                        <DialogCloser text="Your Calendar" Component={Calendar} />
                        <DialogCloser text="Past Events" Component={FileClock} />
                        <DialogCloser text="Team" Component={Users2} />
                        <DialogCloser text="Settings" Component={Settings2} />
                    </div>
                    <div className="flex flex-col gap-6 items-start">
                        <DialogCloser text="Profile" Component={UserAvatar} />
                        <MenuItem text="Toggle Theme" Component={ModeToggleWithTransition} />
                        <DialogCloser text="Logout" Component={LucideLogOut} />
                    </div>

                </div>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default ExpandedLeftNav;

const DialogCloser = ({ text, Component }) => {
    return (<Dialog.Close asChild>
        <div className="flex flex-row text-white cursor-pointer  h-7">
            <Component className="h-5 w-5" />
            <span className="ml-2" >{text}</span>
        </div>
    </Dialog.Close>)
}

const MenuItem = ({ text, Component }) => {
    return (
        <div className="flex flex-row text-white cursor-pointer h-7">
            <Component className="h-5 w-5 text-white" />
            <span className="ml-2" >{text}</span>
        </div>
    )
}
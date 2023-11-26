import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { constants } from "@/lib/constants"
import UserAvatar from "./forms/UserAvatar"
import { MoreHorizontal, MoreVertical } from "lucide-react"
import { currentDate } from "@/lib/utils"
import EventComponent from "./events/EventComponent"
// SCrollable Left Widget to show upcoming events, etc.
const LeftWidget = ({ user, ...props }) => {
    return (
        <div className='relative  w-[95%] h-[60%] sm:w-[50%]  sm:h-[95%] max-h-[95%] sm:max-w-[50%] bg-white/50 rounded-lg  sm:ml-4 mt-12 sm:mt-4 dark:bg-gray-300/10'>

            <div className=" w-full h-20 bg-transparent items-center justify-between flex flex-row">
                <div className=" mt-2 mx-4  flex flex-row gap-x-2 items-center">
                    <img src={constants.avatarFallbackURL + "AJ"} alt="logo" className="w-8 h-8 aspect-square" />
                    <span className="">
                        <p className="text-gray-800 dark:text-white font-semibold">Aadarsh&apos;s Personal Space</p>
                        <p className="text-gray-500 dark:text-white text-xs">{currentDate()}</p>
                    </span>
                </div>
                <div className="m-2">
                    <MoreHorizontal className=" w-6 h-6 text-black dark:text-white " />
                </div>
            </div>

            <div className="ml-6 mt-4 w-[90%] items-start justify-start flex flex-col ">
                <p className=" font-semibold text-black/80 dark:text-white text-2xl">Upcoming Events</p>
                <p className="text-gray-500 text-sm">Your Upcoming events for today.</p>
            </div>
            <div className="mx-3 mt-4 w-[94%] items-center ">
                <EventComponent />
            </div>

        </div>
    )
}

export default LeftWidget

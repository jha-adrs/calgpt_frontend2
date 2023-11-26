
import { constants } from "@/lib/constants"
import { MoreHorizontal } from "lucide-react"
import { currentDate } from "@/lib/utils"
import EventComponent from "./events/EventComponent"
import { ScrollArea } from "./ui/scroll-area"
import { events } from "@/lib/constants"
import React from "react"
import { Button } from "./ui/button"
// SCrollable Left Widget to show upcoming events, etc.
const LeftWidget = ({ user, ...props }) => {

    React.useEffect(() => {
        console.log(events);
        // Get events from the server
    }, [events])

    return (
        <div className='relative flex flex-col justify-between w-[95%] h-fit  sm:w-[50%]  sm:h-[95%] max-h-[95%] sm:max-w-[50%] bg-white/50 rounded-lg  sm:ml-4 mt-12 sm:mt-4 dark:bg-zinc-600/10'>

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
            <ScrollArea type="always" className="relative h-48 sm:h-[60%] xl:h[70%] ml-6 mx-3 mt-4 w-[94%] items-center overflow-y-auto">
                <div className="mr-3">{eventsList(events)}</div>
            </ScrollArea>

            <div className=" mx-3 my-4 w-[94%] items-center rounded-md ">
                <Button className="w-full h-full text-white font-semibold text-sm">Create Event</Button>
            </div>

        </div>
    )
}

export default LeftWidget

const eventsList = (events) => {
    if (events?.length == 0) {
        console.log("No events for today.")
        return <p className="text-gray-500 text-sm items-center justify-center mb-5 ml-4">No events for today. ☹️ </p>
    }
    return events.map((event) => {
        return <EventComponent key={event.id} event={event} />
    })
}
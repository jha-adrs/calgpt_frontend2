
import { constants } from "@/lib/constants"
import { Loader2, MoreHorizontal } from "lucide-react"
import { currentDate } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
// SCrollable Left Widget to show upcoming events, etc.
const LeftWidgetSkeleton = () => {


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
                <div className="mr-3">
                    <SkeletonEvent />
                    <SkeletonEvent />
                    <SkeletonEvent />
                    <SkeletonEvent />
                    <SkeletonEvent />
                    <SkeletonEvent />
                    <SkeletonEvent />

                </div>
            </ScrollArea>

            <div className=" mx-3 my-4 w-[94%] items-center rounded-md ">
                <Button className="w-full h-full text-white font-semibold text-sm" ><Loader2 className="animate-spin" /></Button>
            </div>

        </div>
    )
}

export default LeftWidgetSkeleton

const SkeletonEvent = () => {
    return (
        <>
            <Skeleton className="w-[30%] h-4 rounded-md mt-4" />
            <Skeleton className="w-[75%] h-4 rounded-md my-2" />
            <Skeleton className="w-[50%] h-4 rounded-md mb-4" />

        </>
    )
}
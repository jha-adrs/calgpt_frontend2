import React from 'react'
import LeftNavbar from './navbar/LeftNavbar'

const Dashboard = () => {
  return (
    <div className=" h-screen flex-col  justify-center 
    bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-50 via-rose-100 to-violet-200
        dark:bg-[radial-gradient(at_center,_var(--tw-gradient-stops))] dark:from-[rgb(31,31,31)] dark:via-[#141414] dark:to-black
        ">
      
      {/* Left Nav */}
      <LeftNavbar />
      {/*Left Widget */}
      {/*Main Calendar */}
    </div>
  )
}

export default Dashboard

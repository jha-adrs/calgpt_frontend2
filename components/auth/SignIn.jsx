import React from 'react'
import '@/styles/extra.css'
import Icons from '../Icons'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { UserAuthForm } from '@/components/forms/UserAuthForm'
import { ModeToggle } from '../mode-toggle'
import { Feather } from 'lucide-react'
const Signin = () => {
    return (
        <>
        
        <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0
        lg:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-50 via-rose-300 to-violet-500
        lg:dark:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] dark:from-[#011838] dark:via-zinc-800 dark:to-black rounded">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            Login
          </Link>
          <div id="hide-md" className="relative  h-full flex-col p-10 text-white  md:flex">
            
            <div className="relative z-20 flex items-center justify-between text-lg font-medium">
              <div className='flex flex-row'>GCal<Feather className="w-6 h-6 mx-2" /></div>
              <ModeToggle className='bg-transparent border-none' />
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;Lets get you started on your journey to become Unstoppable!&rdquo;
                </p>
                <footer className="text-sm">-GCal</footer>
              </blockquote>
            </div>
          </div>
          <div className="pt-[50%] md:p-8 lg:p-8">
            <div className=" mx-auto my-auto flex w-full items-center flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              {/* <UserAuthForm /> */}
              <UserAuthForm/>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </>
    )

    
}

export default Signin

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@/components/theme-provider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from '@/components/auth/Signin.jsx'
import SignUp from '@/components/auth/SignUp.jsx'
import NotFound from '@/components/not-found.jsx'
import Dashboard from '@/components/Dashboard.jsx'
import { TooltipProvider } from '@/components/ui/tooltip.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/signin",
    Component: Signin
  },
  {
    path: "/signup",
    Component: SignUp
  },
  {
    path: "/dashboard",
    Component: Dashboard
  },
  //Not Found
  {
    path: "*",
    Component: () => <NotFound />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
        <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

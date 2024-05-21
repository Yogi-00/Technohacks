/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100 dark:bg-gray-800">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold text-black dark:text-white">
          Registration Form
        </div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Yogi-00/Technohacks" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yugandhar-chinipilli-601858270/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </nav>
    </div>
  )
}

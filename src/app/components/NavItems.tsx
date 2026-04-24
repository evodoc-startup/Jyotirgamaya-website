"use client"
import React from 'react'
import type { NavigationItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function NavItems({items, phoneNavOpen, setPhoneNavOpen, mobile} : {items : NavigationItem[], phoneNavOpen : boolean, setPhoneNavOpen : React.Dispatch<React.SetStateAction<boolean>>, mobile?: boolean}) {
    const pathname = usePathname()
  return (
    <>
    {items.map((item: NavigationItem, index: number) => (
        <li key={"navItem" + index + 1} className="relative group/navItem" onClick={() => setPhoneNavOpen(false)}>
          <Link
            href={item.link}
            className={`${
              pathname == item.link 
                ? "text-[#FE3E3E]" 
                : "text-charcoal/80"
            } transition-colors duration-300 hover:text-[#FE3E3E] font-medium tracking-normal`}>
            {item.name}
          </Link>
          {!mobile && (
            <div
              className={`${
                pathname == item.link
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0 group-hover/navItem:scale-x-100 group-hover/navItem:opacity-100"
              } absolute -bottom-1 left-0 w-full h-[2px] bg-[#FE3E3E] transition-all duration-300`}></div>
          )}
        </li>
      ))}
      </>
  )
}

export default NavItems

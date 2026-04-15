"use client"
import React from 'react'
import type { NavigationItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function NavItems({items, phoneNavOpen, setPhoneNavOpen} : {items : NavigationItem[], phoneNavOpen : boolean, setPhoneNavOpen : React.Dispatch<React.SetStateAction<boolean>>}) {
    const pathname = usePathname()
  return (
    <>
    {items.map((item: NavigationItem, index: number) => (
        <li key={"navItem" + index + 1} className="relative group/navItem" onClick={() => setPhoneNavOpen(false)}>
          <Link
            href={item.link}
            className={`${
              pathname == item.link ? "text-indigo" : "text-charcoal/80"
            } transition-colors duration-300 hover:text-indigo`}>
            {item.name}
          </Link>
          <div
            className={`${
              pathname == item.link
                ? "scale-100"
                : "scale-0 group-hover/navItem:scale-100 transition-all duration-300"
            } w-full bottom-0 h-[2px] bg-indigo/40 origin-center transition-transform`}></div>
        </li>
        
      ))}
      </>
  )
}

export default NavItems

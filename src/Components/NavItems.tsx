"use client"
import React from 'react'
import type { NavigationItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function NavItems({items} : {items : NavigationItem[]}) {
    const pathname = usePathname()
  return (
    <>
    {items.map((item: NavigationItem, index: number) => (
        <li key={"navItem" + index + 1} className="relative group/navItem">
          <Link
            href={item.link}
            className={`${
              pathname == item.link ? `${"text-"+item.color}` : "text-black"
            }`}>
            {item.name}
          </Link>
          <div
            className={`${
              pathname == item.link
                ? "scale-100"
                : "scale-0 group-hover/navItem:scale-100 transition-all duration-500"
            } w-full bottom-0 h-[2px] ${"bg-"+item.color}`}></div>
        </li>
        
      ))}
      </>
  )
}

export default NavItems

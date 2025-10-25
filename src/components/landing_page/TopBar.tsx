"use client"

import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import { useLocale } from "@/components/LocaleProvider"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm leading-none font-normal">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function TopBar() {
  const isMobile = useIsMobile()
  const { t } = useLocale()

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex justify-between items-center">
      <div className="flex items-baseline gap-4 sm:gap-8">
        <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-normal text-black hover:underline transition-all">
          {t.brand}
        </Link>
        
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="items-baseline">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm sm:text-base lg:text-lg py-0">{t.solutions}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 w-[300px] sm:w-[600px] gap-3 p-4">
                  <ListItem href="/solutions/advertisements" title={t.advertisements}>
                    {t.advertisementsDesc}
                  </ListItem>
                  <ListItem href="/solutions/accessibility" title={t.accessibility}>
                    {t.accessibilityDesc}
                  </ListItem>
                  <ListItem href="/solutions/announcements" title={t.announcements}>
                    {t.announcementsDesc}
                  </ListItem>
                  <ListItem href="/solutions/call-centers" title={t.callCenters}>
                    {t.callCentersDesc}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-sm sm:text-base lg:text-lg py-0`}>
                <Link href="/company">{t.company}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-sm sm:text-base lg:text-lg py-0`}>
                <Link href="/careers">{t.careers}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <Link 
        href="/login"
        className="px-3 py-2 sm:px-4 bg-black text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base lg:text-lg font-medium leading-none"
      >
        {t.login}
      </Link>
    </nav>
  )
}

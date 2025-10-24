"use client"

import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
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

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="text-base sm:text-lg lg:text-xl font-normal text-black">
          Neiom Systems
        </div>
        
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Léisungen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 w-[600px] gap-3 p-4">
                  <ListItem href="/solutions/advertisements" title="Reklammen">
                    Text-zu-Sprach Léisungen fir Reklamcampagnen
                  </ListItem>
                  <ListItem href="/solutions/accessibility" title="Accessibilitéit">
                    Inhalter zougänglech maachen duerch Stëmm
                  </ListItem>
                  <ListItem href="/solutions/announcements" title="Ëffentlech Uweisungen">
                    Automatiséiert ëffentlech Uweisingssystemer
                  </ListItem>
                  <ListItem href="/solutions/call-centers" title="Call Centers">
                    Stëmmenléisungen fir Clientsservice
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/company">Firma</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/careers">Karriär</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <button className="px-4 py-2 bg-black text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base font-medium">
        Umellen
      </button>
    </nav>
  )
}

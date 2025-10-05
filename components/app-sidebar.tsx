"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Image, 
  Share2, 
  Folder,
  Settings,
  Home,
  ChevronRight
} from "lucide-react"

// Menu items for different sections of the design kit
const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Brand Assets",
    url: "/brand",
    icon: Folder,
    items: [
      {
        title: "Logo Designs",
        url: "/brand/logos",
        badge: "12",
      },
      {
        title: "Brand Guidelines",
        url: "/brand/guidelines",
      },
      {
        title: "Typography",
        url: "/brand/typography",
      },
    ],
  },
  {
    title: "Color Concepts",
    url: "/colors",
    icon: Palette,
    items: [
      {
        title: "Primary Palettes",
        url: "/colors/primary",
        badge: "8",
      },
      {
        title: "Accent Colors",
        url: "/colors/accents",
      },
      {
        title: "Color Schemes",
        url: "/colors/schemes",
        badge: "5",
      },
    ],
  },
  {
    title: "Social Media",
    url: "/social",
    icon: Share2,
    items: [
      {
        title: "Instagram Posts",
        url: "/social/instagram",
        badge: "24",
      },
      {
        title: "Facebook Graphics",
        url: "/social/facebook",
        badge: "18",
      },
      {
        title: "LinkedIn Headers",
        url: "/social/linkedin",
        badge: "6",
      },
      {
        title: "Twitter/X Graphics",
        url: "/social/twitter",
        badge: "12",
      },
    ],
  },
  {
    title: "Design Templates",
    url: "/templates",
    icon: Image,
    items: [
      {
        title: "Business Cards",
        url: "/templates/business-cards",
      },
      {
        title: "Presentations",
        url: "/templates/presentations",
      },
      {
        title: "Marketing Materials",
        url: "/templates/marketing",
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex flex-col gap-2 px-4 py-4">
          <h1 className="font-semibold text-lg">Business Design Kit</h1>
          <p className="text-xs text-sidebar-foreground/70">
            Brand & Design Management
          </p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1">{item.title}</span>
                      {item.items && <ChevronRight className="h-3 w-3" />}
                    </a>
                  </SidebarMenuButton>
                  
                  {/* Sub-items */}
                  {item.items && (
                    <SidebarMenu className="ml-6 mt-1">
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild size="sm">
                            <a href={subItem.url} className="flex items-center justify-between">
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <Badge variant="secondary" className="text-xs">
                                  {subItem.badge}
                                </Badge>
                              )}
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">DK</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Design Kit</p>
              <p className="text-xs text-sidebar-foreground/70">v1.0.0</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
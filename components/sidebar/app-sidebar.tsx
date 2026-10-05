import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { UsersRound, List, FileText, ClipboardList, Landmark } from "lucide-react"

const listMenu = [
    { 
        "name" : "User Management", 
        "url" : "/user-management",
        "icon" : UsersRound
    },
    { 
        "name" : "Category", 
        "url" : "/category",
        "icon" : List
    },
    { 
        "name" : "Jurusan", 
        "url" : "/jurusan",
        "icon" : ClipboardList
    },
    { 
        "name" : "Article", 
        "url" : "/article",
        "icon" : FileText
    },
    { 
        "name" : "Profile", 
        "url" : "/profile",
        "icon" : Landmark
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <h1 className="text-lg font-bold text-center">Menu Dashboard</h1>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {listMenu.map((menu) => (
                                <SidebarMenuItem key={menu.name}>
                                    <SidebarMenuButton asChild>
                                        <a href={menu.url}>
                                            <menu.icon />
                                            <span>{menu.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
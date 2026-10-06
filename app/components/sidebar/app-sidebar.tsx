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
import { UsersRound, List, FileText, ClipboardList, Landmark, House } from "lucide-react"

const listMenu = [
    { 
        "name" : "Dashboard", 
        "url" : "/admin",
        "icon" : House
    },
    { 
        "name" : "User Management", 
        "url" : "/admin/user-management",
        "icon" : UsersRound
    },
    { 
        "name" : "Categories", 
        "url" : "/admin/categories",
        "icon" : List
    },
    { 
        "name" : "Jurusan", 
        "url" : "/admin/jurusan",
        "icon" : ClipboardList
    },
    { 
        "name" : "Article", 
        "url" : "/admin/article",
        "icon" : FileText
    },
    { 
        "name" : "Profile", 
        "url" : "/admin/profile",
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
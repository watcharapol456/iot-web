import { ISidebarItem } from "@/types/share";
export const Sidebar_Menu = [
    {
        imgURL : "/assets/layout-dashboard.svg",
        route : "/dashboard",
        label : "Dashboard"
    },
    {
        imgURL : "/assets/file.svg",
        route : "/report",
        label : "Report"
    },
    {
        imgURL : "/assets/picture-in-picture-2.svg",
        route : "/remote",
        label : "Remote"
    },
    {
        imgURL : "/assets/cctv.svg",
        route : "/camera",
        label : "Camera Feed"
    },
    
] as ISidebarItem [];
export const Sidebar_General = [
    {
        imgURL : "/assets/sliders-horizontal.svg",
        route : "/",
        label : "Settings"
    },


    
]as ISidebarItem [];
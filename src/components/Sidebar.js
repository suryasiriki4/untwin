import React from 'react';
import SidebarOption from "./SidebarOption"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import Logo from './Logo';
import './component-styles/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo/>
            <SidebarOption active text = "Home" Icon={HomeIcon}/>
            <SidebarOption text = "Explore" Icon={SearchIcon}/>
            <SidebarOption text = "Notifications" Icon={NotificationsIcon}/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            {/* button -> post a doubt */}
            <Button variant="outlined" className="sidebar__doubt">Doubt</Button>

        </div>
    );
}

export default Sidebar;

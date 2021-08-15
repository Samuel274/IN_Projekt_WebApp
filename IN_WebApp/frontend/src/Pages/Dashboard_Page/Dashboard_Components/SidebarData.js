import React from 'react'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';



export const SidebarData = [
    {
        title: "Home",
        icon: <AppsIcon />,
        link: "/"
    },
    {
        title: "Module",
        icon: <ImportContactsIcon />,
        link: "/modules"
    },
    {
        title: "Ranking",
        icon: <EqualizerIcon />,
        link: "/ranking"
    },
    {
        title: "Profile",
        icon: <PersonIcon />,
        link: "/profile"
    },
    
    
]
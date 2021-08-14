import React from 'react'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import QueueIcon from '@material-ui/icons/Queue';

export const SidebarDataLehrer = [
    {
        title: "Module",
        icon: <ImportContactsIcon />,
        link: "/modules"
    },
    {
        title: "Katalog",
        icon: <AppsIcon />,
        link: "/catalogue"
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
    {
        title: "Quiz erstellen",
        icon: <QueueIcon />,
        link: "/quizerstellen"
    },
]
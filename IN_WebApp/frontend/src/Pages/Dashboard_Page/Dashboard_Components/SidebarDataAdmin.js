import React from 'react'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import GroupIcon from '@material-ui/icons/Group';
import QueueIcon from '@material-ui/icons/Queue';

export const SidebarDataAdmin = [
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
    {
        title: "Quiz erstellen",
        icon: <QueueIcon />,
        link: "/quizerstellen"
    },
    {
        title: "User verwalten",
        icon: <GroupIcon />,
        link: "/userverwalten"
    },
]
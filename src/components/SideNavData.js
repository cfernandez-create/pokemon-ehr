import React from 'react'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

export const SideNavData = [
{
    title: "STATUS BAR",
    icon: <FavoriteRoundedIcon />,
    link:  '#',
},

{
    title: "TREATMENT",
    icon: <ScienceRoundedIcon />,
    link:  "#",
},

{
    title: "ADMIT",
    icon: <AddRoundedIcon />,
    link:  "#",
},

{
    title: "DISCHARGE",
    icon: <RemoveRoundedIcon />,
},

{
    title: "DOCUMENT",
    icon: <AssignmentTurnedInRoundedIcon />,
    link:  "#",
},

{
    title: "HISTORY",
    icon: <HistoryRoundedIcon />,
    link:  "#",
},

]
import { CiMail } from "react-icons/ci";
import { RiSettings4Line } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";
import Profile from '../assets/profile1.jpg';

export const navBarLinks=[
    {
        id:'nbl1',
        name:'message',
        icon:<CiMail size={20}/>,
        updates:3,
    },
    {
        id:'nbl2',
        name:'settings',
        icon:<RiSettings4Line size={20}/>,
        updates:0,
    },
    {
        id:'nbl3',
        name:'notification',
        icon:<HiOutlineBell size={20}/>,
        updates:2,
    },
    {
        id:'nbl4',
        name:'profile',
        image:Profile,
    },
]
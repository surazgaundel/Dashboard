import { HiHome } from "react-icons/hi";
import { MdOutlineInsertChart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";

export const sideBarLinks = [
    {
        id: "sbl01",
        name: "overview",
        icon: <HiHome size={20} />,
    },
    {
        id: "sbl02",
        name: "insights",
        icon: <MdOutlineInsertChart size={20} />,
    },
    {
        id: "sbl03",
        name: "history",
        icon: <TbReportAnalytics size={20} />,
    },
    {
        id: "sbl04",
        name: "wallet",
        icon: <CiWallet size={20} />,
    },
    {
        id: "sbl05",
        name: "cart",
        icon: <IoBagCheckOutline size={20} />,
    },
];

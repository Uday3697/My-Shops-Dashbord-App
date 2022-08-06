//sidebar imports 
import {
    UilEstate,
    UilClipboardAlt,
    UilUserAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilSignOutAlt,
} from "@iconscout/react-unicons";
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'


export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard",
    },
    {
        icon:UilClipboardAlt,
        heading:"Orders",

    },
    {
        icon:UilPackage,
        heading:"Products",

    },
    {
        icon:UilChart,
        heading:"Analytics",

    },
    
];
export const CardsData=[
    {
        titles:"sales",
        color: {
            backGround:"linear-gradient(180deg,#bb67ff 0%,#c484 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f6",
         }, 
         barvalue:70,
         value:"25,970",
         png:UilUsdSquare, 
         series:[
            {
            name:"sales",
            data:[31,40,28,51,42,109,100],
            },
         ],

    },
    {
        titles:"Revenue",
        color:{
            backGround: "linear-gradient(180deg,#FF919D 0%,#FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
         }, 
         barvalue:80,
         value:"14,270",
         png:UilMoneyWithdrawal, 
         series:[
            {
            name:"Revenue",
            data:[10,100,50,70,80,30,40],
            },
         ],

    },
    {
        titles:"Expenses",
        color: {
            backGround:"linear-gradient(rgb(248,212,154)-146.42%,rgb(255 202 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
         }, 
         barvalue:60,
         value:"4,270",
         png:UilClipboardAlt, 
         series:[
            {
            name:"Expenses",
            data:[31,40,28,51,42,109,100],
            },
         ],

    },

];

export const UpdatesData=[
    {
        img:img1,
        name:"uday kumar sah",
        time:"25 sec ago",
    },
    {
        img:img2,
        name:"Sharwanan",
        time:"25 min ago",
    },
    {
        img:img3,
        name:"Mugilasaran",
        time:"30min ago",
    },
    
];
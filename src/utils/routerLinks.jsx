import OverView from '../pages/OverView';
import Insight from '../pages/Insight';
import History from '../pages/History';
import Wallet from '../pages/Wallet';
import Cart from '../pages/Cart';
import Message from '../pages/Message';
import Settings from '../pages/Settings';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import LogOut from '../pages/LogOut';
import Error from '../pages/Error';

export const routerLinks=[
    {
        id:'r01',
        path:'/',
        element:<OverView/>,
    },
    {
        id:'r02',
        path:'/overview',
        element:<OverView/>,
    },
    {
        id:'r03',
        path:'/insights',
        element:<Insight/>,
    },
    {
        id:'r04',
        path:'/history',
        element:<History/>,
    },
    {
        id:'r05',
        path:'/wallet',
        element:<Wallet/>,
    },
    {
        id:'r06',
        path:'/cart',
        element:<Cart/>,
    },
    {
        id:'r07',
        path:'/message',
        element:<Message/>,
    },
    {
        id:'r08',
        path:'/settings',
        element:<Settings/>,
    },
    {
        id:'r09',
        path:'/notification',
        element:<Notification/>,
    },
    {
        id:'r10',
        path:'/profile',
        element:<Profile/>,
    },
    {
        id:'r11',
        path:'/logout',
        element:<LogOut/>,
    },
    {
        id:'r12',
        path:'/*',
        element:<Error/>,
    },
]
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as FiIcons from 'react-icons/fi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <IoIcons.IoMdPerson />,
        className: 'nav-text'
    },
    {
        title: 'Users Lists',
        path: '/UsersList',
        icon: <IoIcons.IoMdListBox />,
        className: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/Blog',
        icon: <FiIcons.FiBook />,
        className: 'nav-text'
    },
    ];




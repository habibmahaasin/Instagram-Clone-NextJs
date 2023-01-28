import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { AiOutlineInstagram,AiFillHome,AiOutlineSearch,AiOutlineCompass,AiOutlinePicture,AiOutlineMessage,AiOutlineNotification,AiOutlinePlusCircle,AiOutlineUnorderedList } from "react-icons/ai";
import Link from 'next/link';

export default function SidebarMedium(props){
    return(
        <nav id="sidebar-min">
            <div className="sidebar-header bg-white">
                <Link href={'#'} className='bg-white d-flex justify-content-left mt-4 align-middle link-menu'>
                    <AiOutlineInstagram className='icon-logo bg-white'/> 
                </Link>
            </div>
            <div className='sidebar-min-menu bg-white mt-5'>
                <div className='bg-white'>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle link-menu'>
                        <AiFillHome className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineSearch className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineCompass className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlinePicture className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineMessage className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineNotification className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlinePlusCircle className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'/api/auth/signout'} className='bg-white d-flex justify-content-left align-middle mt-4 link-menu' onClick={e=>{
                        e.preventDefault()
                        signOut() 
                    }}><Image src={`${props.profileImg}`} alt='profile' width='28' height='28' className='icon-menu bg-white rounded-circle'></Image>
                    </Link>
                </div>
            </div>
            <div className='bottom-menu bg-white'>
                <div className='bg-white d-flex justify-content-left align-middle mt-2 mb-3 link-menu'>
                    <AiOutlineUnorderedList className='icon-menu bg-white'/> 
                </div>
            </div>
        </nav>
    )
}
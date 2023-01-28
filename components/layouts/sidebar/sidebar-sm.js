import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { BsHeart } from "react-icons/bs";
import { AiFillHome,AiOutlineCompass,AiOutlineSearch,AiOutlinePicture,AiOutlineMessage,AiOutlinePlusCircle } from "react-icons/ai";
import Link from 'next/link';

export default function SidebarSmall(props){
    return(
        <section id='sidebar-mobile'>
            <nav class="navbar fixed-top bg-white" id='top-menu-mobile'>
                <div class="container-fluid bg-white">
                <Image src={'app-img/text-instagran.svg'} className='image bg-white' align='center' width="103" height="30" alt="instagram" />
                <div className='wrapper-search-notification'>
                    <input className='search-input' placeholder='Cari'></input>
                    <Link href={'#'} className='bg-white link-menu'>
                        <BsHeart className='icon-menu bg-white'/> 
                    </Link>
                </div>
                </div>
            </nav>
            <nav class="navbar fixed-bottom bg-white" id='bottom-menu-mobile'>
                <div class="container-fluid bg-white">
                    <Link href={'#'} className='bg-white link-menu'>
                        <AiFillHome className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white link-menu'>
                        <AiOutlineCompass className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white link-menu'>
                        <AiOutlinePicture className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white link-menu'>
                        <AiOutlinePlusCircle className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'#'} className='bg-white link-menu'>
                        <AiOutlineMessage className='icon-menu bg-white'/> 
                    </Link>
                    <Link href={'/api/auth/signout'} className='bg-white d-flex justify-content-left align-middle link-menu' onClick={e=>{
                        e.preventDefault()
                        signOut() 
                    }}><Image src={`${props.profileImg}`} alt='profile' width='28' height='28' className='icon-menu bg-white rounded-circle'></Image>
                    </Link>
                </div>
            </nav>
        </section>
    )
}
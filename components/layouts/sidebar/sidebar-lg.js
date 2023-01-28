import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { AiFillHome,AiOutlineSearch,AiOutlineCompass,AiOutlinePicture,AiOutlineMessage,AiOutlineNotification,AiOutlinePlusCircle,AiOutlineUnorderedList } from "react-icons/ai";
import Link from 'next/link';

export default function SidebarLarge(props){
    return(
        <nav id="sidebar">
            <div className="sidebar-header bg-white">
                <div className="image-container logo-login bg-white w-50 mt-3 ml-3">
                    <Image src={'app-img/text-instagran.svg'} className='image bg-white' align='center' width="1000" height="1000" alt="instagram" />
                </div>
            </div>
            <div className='sidebar-menu bg-white mt-5'>
                <div className='bg-white'>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle link-menu'>
                        <AiFillHome className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white aktif-menu'>Beranda</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineSearch className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Cari</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineCompass className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Jelajahi</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlinePicture className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Reels</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineMessage className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Pesan</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlineNotification className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Notifikasi</p>
                    </Link>
                    <Link href={'#'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                        <AiOutlinePlusCircle className='icon-menu bg-white'/> 
                        <p className='text-menu bg-white'>Buat</p>
                    </Link>
                    <Link href={'/api/auth/signout'} className='bg-white d-flex justify-content-left align-middle mt-2 link-menu' onClick={e=>{
                        e.preventDefault()
                        signOut() 
                    }}><Image src={`${props.profileImg}`} alt='profile' width='28' height='28' className='icon-menu bg-white rounded-circle'></Image>
                        <p className='text-menu bg-white'>Log out</p>
                    </Link>
                </div>
            </div>
            <div className='bottom-menu bg-white'>
                <div className='bg-white d-flex justify-content-left align-middle mt-2 link-menu'>
                    <AiOutlineUnorderedList className='icon-menu bg-white'/> 
                    <p className='text-menu bg-white'>Lainnya</p>
                </div>
            </div>
        </nav>
    )
}
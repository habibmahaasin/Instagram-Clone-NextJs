import { useSession,signIn } from 'next-auth/react';
import SidebarLarge from './sidebar-lg';
import SidebarMedium from './sidebar-md';
import SidebarSmall from './sidebar-sm';

export default function Sidebar(){
    const { data: session, status } = useSession();
    if (!session && status === 'unauthenticated') {
        return signIn()
    }
    
    if(session && status === 'authenticated'){
    return(
        <section className={`${!session && status === 'loading' ? 'loading' : 'loaded' }`}>
            <div className="wrapper">
                <SidebarLarge profileImg={session.user.image}/>
                <SidebarMedium profileImg={session.user.image}/>
                <SidebarSmall profileImg={session.user.image}/>
            </div>
        </section>
    )}
}
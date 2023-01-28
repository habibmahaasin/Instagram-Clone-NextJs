import { useSession } from 'next-auth/react';
import styles from '../styles/Home.module.css'
import PostList from '../components/layouts/home/post-section';
import StoryList from '../components/layouts/home/story-section';
import RecommendationAccount from '../components/layouts/home/recomendation-account';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({userData}){
    const { data: session, status } = useSession();

    if (session && status === 'authenticated'){
    return(
        <section className={`container-fluid gx-0 container-home d-flex ${!session && status === 'loading' ? 'loading' : 'loaded' }`}>
            <div className='main-wrapper-container'>
                <div className={`${styles.wrapperContent} d-flex gap-2 ${styles.horizontalSlider}`}>
                    <br className='break-left'></br>
                    {userData.map(posts => {
                    return(
                        <StoryList 
                            key={posts.id}
                            username={posts.owner.lastName}
                            profileImg = {posts.owner.picture}
                        />
                    )
                    })}
                </div>
                {userData.map(posts => {
                    return(
                        <PostList 
                            key={posts.id}
                            post_id = {posts.id}
                            username={posts.owner.lastName}
                            imagePost = {posts.image}
                            likes={posts.likes}
                            profileImg = {posts.owner.picture}
                            caption = {posts.text}
                        />
                    )
                })}
            </div>
            <div className='secondary-wrapper-container w-100'>
                <div className='wrapper-profile-user d-flex justify-content-between align-middle'>
                    <div className={`${styles.authorProfie} pb-2 mt-3 d-flex`}>
                        <Image src={session.user.image} alt='profile' width='62' height='62' className={`${styles.iconProfile} bg-white rounded-circle`}></Image>
                        <div className={`${styles.profileView}`}>
                            <Link href={'#'} className={`${styles.profileName}`}>
                                {session.user.name.replaceAll(' ','').toLowerCase()}
                            </Link>
                            <p className={`${styles.fullname}`}>{session.user.name}</p>
                        </div>
                    </div>
                    <div className={`${styles.btnFunc}`}>
                        <Link href={'#'} className={`${styles.linkFunc}`}>
                            Alihkan
                        </Link>
                    </div>
                </div>
                <div className='wrapper-profile-user d-flex justify-content-between align-middle'>
                    <div className={`${styles.breaktitle} pb-2 mt-3 d-flex`}>
                        <p>Saran Untuk Anda</p>
                    </div>
                    <div className={`${styles.break}`}>
                        <Link href={'#'} className={`${styles.linkFunc}`}>
                            Lihat Semua
                        </Link>
                    </div>
                </div>
                {userData.slice(0,5).map(posts => {
                    return(
                        <RecommendationAccount 
                            key={posts.id}
                            username={posts.owner.lastName}
                            profileImg = {posts.owner.picture}
                        />
                    )
                })}
                <span className={`${styles.copyrightig}`}>© 2023 PROJECT-001 FROM MAHAASIN</span>
            </div>
        </section>
    )}
}

export async function getStaticProps(){
    const resp = await fetch(
        `https://dummyapi.io/data/v1/post?limit=10`,
        {
            method: 'GET',
            headers:{
                'app-id' : '63d37883f2b1fc55148f42db',
            }
        }
    )
    const data = await resp.json()
    return{
        props:{
            userData : data.data,
        }
    }
}
import styles from '../../styles/Post.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts({post}){
    return(
        <section className={`${styles.postingSection} container-fluid d-flex justify-content-end`}>
            <div className='col-12 col-lg-7'>
                <div className="image-container">
                    <Image
                        src={`${post.image}`}
                        className="image"
                        width="1000"
                        priority
                        height="1000"
                        alt="instagram"
                    />
                </div>
            </div>
            <div className={`${styles.commentSection} col-12 col-lg-5`}>
                <div className={`${styles.authorProfie} pb-2 mt-1 p-1`}>
                    <div className={`slide-content ${styles.backgroundAuthor}`}>
                        <Image src={`${post.owner.picture}`} alt='profile' width='36' height='36' className={`${styles.authorImg} bg-white rounded-circle`}></Image>
                    </div>
                    <Link href={'#'} className={`${styles.authorName}`}>
                        {post.owner.firstName.toLowerCase()}{post.owner.lastName.toLowerCase()}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context){
    const { params } = context
    const resp = await fetch(`https://dummyapi.io/data/v1/post/${params.post_id}`,
    {
        method: 'GET',
        headers:{
            'app-id' : '63d37883f2b1fc55148f42db',
        }
    })
    const data = await resp.json()

    if (!data.id){
        return {
            notFound: true
        }
    }

    return{
        props:{
            post : data,
        }
    }
}
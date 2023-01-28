import Link from 'next/link';
import Image from 'next/image';
import { FiSmile } from "react-icons/fi";
import { BsHeart,BsHeartFill,BsBookmark,BsChatDots,BsCursor} from "react-icons/bs";
import styles from '../../../styles/Home.module.css'
import { useState } from 'react';

function PostList(props) {
    const [ like, setLike] = useState(null)

    let likes = props.likes;
    let btnlike;
    
    if ( like === null){
        btnlike = <BsHeart className={`${styles.reactionIcon} ${like}`} 
            onClick={e=>{
                e.preventDefault()
                setLike("likeActive")
            }}
        />
    }
    else{
        btnlike = <BsHeartFill className={`${styles.reactionIcon} ${like}`} 
            onClick={e=>{
                e.preventDefault()
                setLike(null)
            }}
        />
        likes += 1
    }
    
    return (
        <>
            <div className={`${styles.wrapperContent} mt-3 pt-2 mb-3`}>
                <div className={`${styles.authorProfie} pb-2`}>
                    <div className={`slide-content ${styles.backgroundAuthor}`}>
                        <Image src={`${props.profileImg}`} alt='profile' width='36' height='36' className={`${styles.authorImg} bg-white rounded-circle`}></Image>
                    </div>
                    <Link href={'#'} className={`${styles.authorName}`}>
                        {props.username}
                    </Link>
                </div>
                <Link href={`/post/${props.post_id}`}>
                    <div className="image-container">
                        <Image
                            src={`${props.imagePost}`}
                            className="image"
                            width="1000"
                            priority
                            height="1000"
                            alt="instagram"
                        />
                    </div>
                </Link>
                <div className='reaction-btn d-flex justify-content-between p-3'>
                    <div className={`${styles.reactionIcoWrap}`}>
                        {btnlike}
                        <BsChatDots className={`${styles.reactionIcon2}`} />
                        <BsCursor className={`${styles.reactionIcon3}`} />
                    </div>
                    <div className='save-icon'>
                        <BsBookmark className={`${styles.reactionIcon}`} />
                    </div>
                </div>
                <p className={`${styles.likes} p-3`}> {likes} Suka</p>
                <p className={`${styles.author} p-3 mb-2`} align='justify'>{props.username}
                    <span>{props.caption}</span>
                </p>
                <p className={`${styles.spanComment} p-3`}>Lihat Semua {Math.floor((Math.random() * 100) + 1)} Komentar</p>
                <p className={`${styles.spanTime} p-3`}>{Math.floor((Math.random() * 10) + 1)} JAM YANG LALU</p>
                <div className={`${styles.inputComment} mb-1 d-flex`}>
                    <FiSmile className={`${styles.emotComment}`}/>
                    <input className='w-100 mt-1' placeholder='Tambahkan komentar...'></input>
                    <Link href={'#'} className={`${styles.sendComment}`}>Kirim</Link>
                </div>
            </div>
        </>
    )
}

export default PostList
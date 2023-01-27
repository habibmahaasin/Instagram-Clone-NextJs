import Image from 'next/image';
import styles from '../../../styles/Home.module.css'

function StoryList(props) {
    return (
        <>
            <div className='wrapper-story'>
                <div className={`slide-content ${styles.backgroundIG} mt-3`}>
                    <Image src={`${props.profileImg}`} alt='profile' width='62' height='62' className={`${styles.iconProfile} bg-white rounded-circle`}></Image>
                </div>
                <p className={`${styles.storyProfileText} mb-2`}>{props.username}</p>
            </div>
        </>
    )
}

export default StoryList
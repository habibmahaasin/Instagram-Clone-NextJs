import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import Link from 'next/link';

function RecommendationAccount(props) {
    return (
        <>
            <div className='wrapper-profile-user d-flex justify-content-between align-middle'>
                <div className={`${styles.authorProfie} d-flex`}>
                    <Image src={`${props.profileImg}`} alt='profile' width='38' height='38' className={`${styles.iconProfile} bg-white rounded-circle`}></Image>
                    <div className={`${styles.otherProfileView}`}>
                        <Link href={'#'} className={`${styles.otherProfileName}`}>
                            {props.username}
                        </Link>
                        <p className={`${styles.followedby}`}>Diikuti oleh avekiddos + 54 lainnya</p>
                    </div>
                </div>
                <div className={`${styles.btnfollow}`}>
                    <Link href={'#'} className={`${styles.followfunc}`}>
                        Ikuti
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RecommendationAccount
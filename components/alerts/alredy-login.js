import Link from "next/link"
import {signOut} from 'next-auth/react'

export default function AlredyLogin(){
    return(
        <div className="card border-0 w-100">
            <div className="card-body">
                <div className="alert alert-warning" role="alert">
                    You`re Alredy Logged in as User, you need to log out before logging in as different user.
                </div>
                <div className="card-text d-flex justify-content-end gap-2">
                    <Link href={'/'} class="btn btn-primary-outline">Back</Link>
                    <Link href={'/api/auth/signout'} className="btn btn-danger" onClick={e=>{
                        e.preventDefault()
                        signOut()
                    }}>Log Out</Link>
                </div>
            </div>
        </div>
    )
}
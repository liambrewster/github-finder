import {useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from "../context/github/GithubContext"



function User() {

    const {searchUser, user} = useContext(GithubContext)

    const params = useParams()
    useEffect(() => {
        searchUser(params.login)
    }, [])

    return (
        <div>
            {user.login} {user.html_url}
        </div>
    )
}

export default User

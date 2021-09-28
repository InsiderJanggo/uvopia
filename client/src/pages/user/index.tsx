import Header from "../../components/Header";
import UserInterface from "../../interfaces/User";
import { 
    useEffect,
    useState 
} from "react";
import UserList from "../../components/UserList";
import usersService from "../../services/users.service";

const User = () => {
    const [users, setUsers] = useState([])

    const getAll = () => {
        usersService.getAll()
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getAll()
        document.title = 'Users - Uvopia'
    }, [])

    return(
        <>
            <Header />
            {users.map((user: any) => (
                <UserList key={user.user_id} user={user} />
            ))}
        </>
    )
}

export default User
import React from "react";
import {UserType} from "../../../redux/users-reducer";
import styles from "../Users.module.css";
import axios from "axios";
import defaultAvatar from "../../../assets/images/default-avatar.svg";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Legacy_Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {

    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items)
            })
        }
    }

    console.log('render: Users')
    return (
        <div>
            <button onClick={getUsers}>Загрузить пользователей</button>
            {
                users.map((u) => {
                    return <div key={u.id} className={styles.userWrapper}>
                        <div>
                            <div>
                                <img src={u.photos.small !== null
                                    ? u.photos.small
                                    : defaultAvatar} width={'90px'} height={'auto'} alt={'user-avatar'}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>Отписаться</button>
                                    : <button onClick={() => follow(u.id)}>Подписаться</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Legacy_Users;
import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import axios from "axios";
import defaultAvatar from "./../../assets/images/default-avatar.svg";
import {v1} from "uuid";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        console.log('render: UsersClass')
        return (
            <div>
                {
                    this.props.users.map((u) => {
                        return <div key={v1()} className={styles.userWrapper}>
                            <div>
                                <div>
                                    <img src={u.photos.small !== null
                                        ? u.photos.small
                                        : defaultAvatar} width={'90px'} height={'auto'} alt={'user-avatar'}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Отписаться</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Подписаться</button>}
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
    }
}

export default Users;
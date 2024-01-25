import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import {v1} from "uuid";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {

    if (users.length === 0) {
        setUsers([
            {
                id: v1(),
                avatarUrl: "https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg",
                followed: false,
                fullName: 'Дмитрий',
                status: 'Культурный код',
                location: {city: 'Москва', country: 'Россия'}
            },
            {
                id: v1(),
                avatarUrl: "https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg",
                followed: true,
                fullName: 'Анна',
                status: 'Люблю путешествовать',
                location: {city: 'Москва', country: 'Россия'}
            },
            {
                id: v1(),
                avatarUrl: "https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg",
                followed: false,
                fullName: 'Владимир',
                status: 'Сила в правде!',
                location: {city: 'Санкт-Петербург', country: 'Россия'}
            },
            {
                id: v1(),
                avatarUrl: "https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg",
                followed: false,
                fullName: 'Андрей',
                status: 'Я не толстый, это мускулы',
                location: {city: 'Минск', country: 'Беларусь'}
            },
        ])
    }

    console.log('render: Users')
    return (
        <div>
            {
                users.map((u) => {
                    return <div key={u.id} className={styles.userWrapper}>
                        <div>
                            <div>
                                <img src={u.avatarUrl} width={'90px'} height={'auto'} alt={'user-avatar'}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>Отписаться</button>
                                    : <button onClick={() => follow(u.id)}>Подписаться</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Users;
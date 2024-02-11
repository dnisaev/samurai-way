import React from 'react';
import styles from "./Users.module.css";
import {v1} from "uuid";
import defaultAvatar from "../../assets/images/default-avatar.svg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClickPageChanges: (number: number) => void
}

const Users = ({
                   users,
                   follow,
                   unfollow,
                   currentPage,
                   onClickPageChanges,
                   totalUsersCount,
                   pageSize
               }: UsersPropsType) => {
    console.log('render: Users')

    const pagesCountArray = [];
    for (let i = 1; i <= 10; i++) {
        pagesCountArray.push(i);
    }

    return (
        <div>
            <div className={styles.countPage}>
                {
                    pagesCountArray.map((number, index) => {
                        return (
                            <span key={index}
                                  onClick={() => onClickPageChanges(number)}
                                  className={currentPage === number ? styles.selectedPage : ''}>{number}</span>
                        )
                    })
                }
            </div>
            {
                users.map((user) => {
                    return <div key={v1()} className={styles.userWrapper}>
                        <div>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small !== null
                                        ? user.photos.small
                                        : defaultAvatar} width={'90px'} height={'auto'} alt={'user-avatar'}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unfollow(user.id)}>Отписаться</button>
                                    : <button onClick={() => follow(user.id)}>Подписаться</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Users;
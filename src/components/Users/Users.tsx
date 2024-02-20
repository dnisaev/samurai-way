import React from 'react';
import styles from "./Users.module.css";
import {v1} from "uuid";
import defaultAvatar from "../../assets/images/default-avatar.svg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = ({users, follow, unfollow,
                          currentPage, onClickPageChanges,
                          toggleIsFollowingProgress, followingProgress}: UsersPropsType) => {
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
                                    ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                        toggleIsFollowingProgress(true, user.id)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "bb82ba3c-ed1e-4248-bb07-d52f74e8ed63"}
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                unfollow(user.id);
                                            }
                                            toggleIsFollowingProgress(false, user.id)
                                        })
                                    }}>Отписаться</button>
                                    : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                        toggleIsFollowingProgress(true, user.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "bb82ba3c-ed1e-4248-bb07-d52f74e8ed63"}
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                follow(user.id);
                                            }
                                            toggleIsFollowingProgress(false, user.id)
                                        })
                                    }}>Подписаться</button>}
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

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClickPageChanges: (number: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    followingProgress: Array<string>
}
import React from "react";
import styles from "./Users.module.css";
import { v1 } from "uuid";
import defaultAvatar from "../../assets/images/default-avatar.svg";
import { UserType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

export const User = ({ user, followingProgress, unfollowUser, followUser }: UserPropsType) => {
  return (
    <div key={v1()} className={styles.userWrapper}>
      <div>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : defaultAvatar}
              width={"90px"}
              height={"auto"}
              alt={"user-avatar"}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Отписаться
            </button>
          ) : (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              Подписаться
            </button>
          )}
        </div>
      </div>
      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
      </div>
    </div>
  );
};

type UserPropsType = {
  user: UserType;
  followingProgress: Array<string>;
  followUser: (userId: string) => void;
  unfollowUser: (userId: string) => void;
};

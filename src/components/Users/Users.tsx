import React from "react";
import { UserType } from "../../redux/users-reducer";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";

export const Users = ({
  users,
  currentPage,
  pageSize,
  totalUsersCount,
  onClickPageChanges,
  followingProgress,
  followUser,
  unfollowUser,
}: UsersPropsType) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onClickPageChanges={onClickPageChanges}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}/>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingProgress={followingProgress}
          followUser={followUser}
          unfollowUser={unfollowUser}
        />
      ))}
    </div>
  );
};

type UsersPropsType = {
  users: Array<UserType>;
  currentPage: number;
  pageSize: number;
  totalUsersCount: number;
  onClickPageChanges: (number: number) => void;
  followingProgress: Array<string>;
  followUser: (userId: string) => void;
  unfollowUser: (userId: string) => void;
};

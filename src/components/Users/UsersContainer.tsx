import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import {
  followSuccess,
  followUserTC,
  getUsersTC,
  toggleFollowingProgress,
  unfollowSuccess,
  unfollowUserTC,
  UserType,
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { Users } from "./Users";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onClickPageChanges = (pageNumber: number) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          onClickPageChanges={this.onClickPageChanges}
          followingProgress={this.props.followingProgress}
          followUser={this.props.followUserTC}
          unfollowUser={this.props.unfollowUserTC}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    toggleFollowingProgress,
    getUsersTC,
    followUserTC,
    unfollowUserTC,
  }),
)(UsersContainer);

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingProgress: Array<string>;
};
type MapDispatchPropsType = {
  followSuccess: (userId: string) => void;
  unfollowSuccess: (userId: string) => void;
  toggleFollowingProgress: (isFetching: boolean, userId: string) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
  followUserTC: (userId: string) => void;
  unfollowUserTC: (userId: string) => void;
};
type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType;

import {connect} from "react-redux";
import {ReducersType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersAPIPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onClickPageChanges = (number: number) => {
        this.props.setCurrentPage(number);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(number, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        console.log('render: UsersContainer')

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       currentPage={this.props.currentPage}
                       onClickPageChanges={this.onClickPageChanges}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                />
            </>
        );
    }
}

let mapStateToProps = (state: ReducersType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
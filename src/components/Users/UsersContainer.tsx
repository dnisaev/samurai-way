import {connect} from "react-redux";
import {ActionsType, ReducersType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
                //console.log(response);
            })
    }

    onClickPageChanges = (number: number) => {
        this.props.setCurrentPage(number);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        console.log('render: UsersContainer')

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
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

let mapDispatchToProps = (dispatch: (type: ActionsType) => void) => {
    return {
        follow: (userId: string) => {
            const action = followAC(userId);
            dispatch(action)
        },
        unfollow: (userId: string) => {
            const action = unfollowAC(userId);
            dispatch(action)
        },
        setUsers: (users: Array<UserType>) => {
            const action = setUsersAC(users);
            dispatch(action)
        },
        setCurrentPage: (currentPage: number) => {
            const action = setCurrentPageAC(currentPage);
            dispatch(action)
        },
        setTotalUsersCount: (totalCount: number) => {
            const action = setTotalUsersCountAC(totalCount);
            dispatch(action)
        },
        toggleIsFetching: (isFetching: boolean) => {
            const action = toggleIsFetchingAC(isFetching);
            dispatch(action)
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
import {connect} from "react-redux";
import {ActionsType, ReducersType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state: ReducersType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
import Users from "./Users";
import {connect} from "react-redux";
import {ActionsType, ReducersType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";

let mapStateToProps = (state: ReducersType) => {
    return {
        users: state.usersPage.users
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
            const action = setUsersAC(users)
            dispatch(action)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
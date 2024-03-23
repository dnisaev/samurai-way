import React from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileTC,
  getStatusTC,
  ProfileType,
  savePhotoTC,
  saveProfileTC,
  updateStatusTC,
} from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.PureComponent<ProfileContainerPropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "30560";
    }
    this.props.getProfileTC(userId);
    this.props.getStatusTC(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <Profile
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatusTC={this.props.updateStatusTC}
          savePhotoTC={this.props.savePhotoTC}
          saveProfileTC={this.props.saveProfileTC}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  isOwner: null,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.profilePage.profile?.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC, savePhotoTC, saveProfileTC }),
  withRouter,
)(ProfileContainer);

type MapStatePropsType = {
  isOwner: boolean | null;
  profile: ProfileType;
  status: string;
  authorizedUserId: number;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  getProfileTC: (userId: string) => void;
  getStatusTC: (userId: string) => void;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (photo: File) => void;
  saveProfileTC: (profile: any) => void;
};
type PathParamsType = {
  userId: string;
};
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType;

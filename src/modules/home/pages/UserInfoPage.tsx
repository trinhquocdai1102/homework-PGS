import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducer';
import { avatarDefault } from '../../../utils/constants';

const UserInfoPage = () => {
  const { avatar, name, email } = useSelector((state: AppState) => {
    return {
      avatar: state.profile.user?.avatar,
      name: state.profile.user?.name,
      email: state.profile.user?.email,
      // region: state.profile.user?.region,
    };
  });
  const src = avatar ? avatar : avatarDefault;
  return (
    <>
      <title>
        <FormattedMessage id="userInfo" />
      </title>
      <div className="userInfoPage">
        <div className="text-center userAvatar">
          <img src={src}></img>
        </div>
        <div className="text-center userInfo">
          <h2 className="font-weight-bold">{name}</h2>
          <h4>{email}</h4>
          {/* <h5>{region}</h5> */}
        </div>
      </div>
    </>
  );
};

export default UserInfoPage;

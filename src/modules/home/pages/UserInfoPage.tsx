import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducer';
import { avatarDefault } from '../../../utils/constants';

const UserInfoPage = () => {
  const { avatar, name, email, gender } = useSelector((state: AppState) => {
    return {
      avatar: state.profile.user?.avatar,
      name: state.profile.user?.name,
      email: state.profile.user?.email,
      gender: state.profile.user?.gender,
    };
  });
  const src = avatar ? avatar : avatarDefault;
  return (
    <>
      <title>
        <FormattedMessage id="user-info" />
      </title>
      <div className="user-info-page">
        <div className="text-center user-avatar">
          <img src={src}></img>
        </div>
        <div className="text-center user-info">
          <h2 className="font-weight-bold">{name}</h2>
          <h4>{email}</h4>
          <h5>
            Giới tính: <FormattedMessage id={gender} />
          </h5>
        </div>
      </div>
    </>
  );
};

export default UserInfoPage;

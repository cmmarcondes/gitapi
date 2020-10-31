import React from "react";
import { Source, TextBox, UserAvatar } from "../../styles/detailstyle";
import {ReactComponent as View} from '../svgs/olho.svg';
interface Props {
  user_details: any;
}
const AvatarDetails: React.FC<Props> = ({ user_details }) => {
  const getUserProfile = (url: any) => {
    window.open(url)
  }
  return (
    <>
    <UserAvatar>
    <img src={`${user_details[0].owner.avatar_url}`} alt="profileimg"  width='250px' height='250px' />
    </UserAvatar>
    <TextBox public>
      {user_details[0].owner.login}
    </TextBox>
    <TextBox>
      <Source onClick={() => getUserProfile(user_details[0].owner.html_url)}>
      <View width="25px" height="25px" />
      </Source> 
    </TextBox>
    </>
  );
};

export default AvatarDetails;

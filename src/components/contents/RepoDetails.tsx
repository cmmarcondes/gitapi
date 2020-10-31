import React from "react";
import { TextBox, RepoBox, Source} from "../../styles/detailstyle";
import {ReactComponent as SourceCode} from '../svgs/programacao.svg';
interface Props {
  user_details: any;
}
const RepoDetails: React.FC<Props> = ({ user_details }) => {
console.log(user_details)
  const getHistory = (url: any) => {
    window.open(url, '_blank')
  }
  return (
    <>
      {user_details.owner.login === "undefined" ? (
        false
      ) : (
          <>
        <RepoBox>
          <TextBox width="400px">{user_details.name}</TextBox>
          <TextBox public>
            this repository is public
          </TextBox>
          <Source onClick={() => getHistory(user_details.html_url)}>
          <SourceCode width="24px" height="24px"/> 
          </Source>
        
        </RepoBox>
        </>
      )}
    </>
  );
};

export default RepoDetails;

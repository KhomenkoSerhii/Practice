import React, {useEffect} from 'react'
import Profile from "../Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/Reducer/profileReducer";
import axios from "axios";
import { withRouter } from 'react-router-dom';

const ProfileContainer = (props) => {
   useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => props.setUserProfile(response.data, console.log(response.data)));
      console.log(props)
  }, []);

  return (
    <div className="MyPosts">
      <Profile {...props} profile={props.profile} />
    </div>
  );
};

const mapStateToProps = (state) => ({
profile: state.profileReducer.profile
});


let withRouterData = withRouter(ProfileContainer)

export default connect(mapStateToProps,{ setUserProfile })(withRouterData);

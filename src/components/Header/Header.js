import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { authData } from '../../redux/auth'

const Header = (props) => {
    console.log(props)
    useEffect(() => {
        axios
        .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
        .then(response => props.authData(response.data.data.login))
    }, [])
    return (
    <header className='header'>

        <div className='loginBlock' style={{float:'right'}}>
            {/* {props.isAuth ? props.login :} */}
              <NavLink to={'/login'}>Login</NavLink>
           
        </div>

        {/* <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' /> */}
    </header>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth,
    login: state.auth
})

export default connect(mapStateToProps, {authData}) (Header);
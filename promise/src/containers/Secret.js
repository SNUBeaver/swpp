import React from 'react'
import Secret from '../components/molecules/Secret'
import { connect } from "react-redux";
import {postPromiseRequest} from "../store/promises/actions";

const mapStateToProps = (state) => {
    return {
      users: state.user.users,
      state: state,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addPromise: (sinceWhen, tilWhen, user2)=>{
        dispatch(postPromiseRequest(sinceWhen, tilWhen, user2))
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Secret)

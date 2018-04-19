import React from 'react'
import {connect} from 'react-redux'
import {Promises} from '../components/molecules/Promises'


const mapStateToProps = (state) => {
  return {
    promiselist: state.promises.promiselist
  }
}


const mapDispatchToProps = (dispatch)=>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Promises)

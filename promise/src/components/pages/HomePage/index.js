import React from 'react'
// import ReactDOM from 'react-dom'
import Auth from '../../../containers/Auth'
import Promises from '../../../containers/Promises'
import Secret from '../../../containers/Secret'


const HomePage = () => {
  return (

    <div>
      <h1>약속 추가 후 새로고침</h1>
      <Auth/>
      <Promises/>
      <Secret/>
    </div>
    )
}

export default HomePage

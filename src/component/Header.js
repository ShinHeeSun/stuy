import React from 'react'
import logo from '../img/logo.png'


const Header = () => {
  return (
  <div className='body'>
   <div className='background'>

   </div>
    <div className='header'>
      <div className='navbar'>
        <div className='logo_img'>
    <img src={logo} />
        </div>
    <ul>
        <li>
            회사소개
        </li> 
        <li>
            쿠폰 구매하기
        </li>
        <li>
            프리미엄 구매하기
        </li>
        <li>
            고객지원
        </li>
    </ul>
    <div className='login_bar'>
    <div className='login'>로그인</div>
    <div className='join'> 회원가입</div>
    </div>
      </div>
      <div className='title'>  오늘보다 안전한 내일을 위해
지금 바로 스캔 하세요</div>

    </div>
    </div>
  )
}

export default Header

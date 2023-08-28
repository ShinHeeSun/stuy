import React from 'react'
import page2_img from '../img/page2_img.png'

const Page2 = () => {
  return (
    <div className='page2'>
              <div className='pa'>  </div>
              <div className='page2_title'>
              프리미엄 주차 번호판
           <div className='p5'>  <p5>수신자 발신자 모두 전화번호 노출없이 안전하고 간편하게 사용할 수 있습니다.
(QR스캔후에 번호노출없이 온라인으로 연결됩니다)
공유자 기능으로 하나의 번호판으로 최대4명의 사용자가 편리하게 사용할 수 있습니다.
(최초 가입자만 사용자 설정권한을 갖을 수 있습니다)</p5>
</div> 
              </div>
             <div className='page2_img'> <img src={page2_img} /></div>
    </div>
  )
}

export default Page2

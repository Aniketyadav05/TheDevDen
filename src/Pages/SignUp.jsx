import React from 'react'
import { SignUp as SignUpComponent,FadeInWrapper } from '../Components/index'

const SignUp = () => {
  return (
    <FadeInWrapper>
    <div className='py-8'>
        <SignUpComponent/>

    </div>
    </FadeInWrapper>
  )
}

export default SignUp
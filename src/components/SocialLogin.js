
import React,{useState} from 'react'
import SocialButton from './SocialButton'

export default function SocialLogin() {
    const [state, setstate] = useState({ userData: []})
    
    const handleSocialLogin = (user) => {
        console.log(user);
        setstate({ userData: user })
      };
      
      const handleSocialLoginFailure = (err) => {
        console.error(err);
      };
      
    return (
        <div>
            <h1>Login Gmail</h1>
    

    <SocialButton
      provider="google"
      appId="553982774235-s0k0e0j1tjp2ktevfqenifsa6i1b1eb4.apps.googleusercontent.com"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Gmail
    </SocialButton>

    {state.userData._profile != undefined ?
                <>
                    <h4>Name: {state.userData._profile.name}</h4>
                    <h4>Email: {state.userData._profile.email}</h4>
                    {/* {/ <h4>image URL:</h4> <q> {state.userData._profile.profilePicURL}</q> /} */}
                </>
                : ""
            }
        </div>
    )
}
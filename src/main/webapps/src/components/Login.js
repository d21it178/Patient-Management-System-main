import { GoogleLogin } from 'react-google-login';



function Login(){
    
    const clientId = "859580040004-f244eepri1uagr437rdcgmddkuj28i8q.apps.googleusercontent.com"

        const onSuccess = (res) => {
            console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
        } 
        const onFailure = (res) => {
            console.log("LOGIN FAILED! res: ", res);
        } 

    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
 }
 export default Login;
import { GoogleLogout } from 'react-google-login';

const clientId = "859580040004-f244eepri1uagr437rdcgmddkuj28i8q.apps.googleusercontent.com"

function Logout(){
    const onSuccess = () =>{
        console.log("Log Out SuccessFull");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}
export default Logout;
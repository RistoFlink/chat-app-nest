import Auth from "./Auth";
import {Link as MUILink} from "@mui/material";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <Auth  onSubmit={async () => {}} submitLabel={"Signup"}>
            <Link to={"/login"} style={{alignSelf: "center"}}>
                <MUILink>Login</MUILink>
            </Link>
        </Auth>
    );
};

export default Signup;
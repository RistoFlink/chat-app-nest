import { Link } from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import Auth from "./Auth";

const Login = () => {
    return (
        <Auth  onSubmit={async () => {}} submitLabel={"Login"}>
            <Link to={"/signup"} style={{alignSelf: "center"}}>
                <MUILink>Signup</MUILink>
            </Link>
        </Auth>
    );
};

export default Login;
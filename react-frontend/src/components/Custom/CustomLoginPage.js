import React, { useEffect, useState, useRef } from "react";

import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useHistory } from "react-router-dom";
import { Toast } from "primereact/toast";

import client from "../../services/restClient";

import "../OnlineDummyAPI/TestDummy";

const CustomLoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [maskPassword, setMaskPassword] = useState(true);
    const history = useHistory();

    const toast = useRef(null);

    useEffect(() => {
        if (props.isLoggedIn === true) history.push("/");
    }, [props.isLoggedIn]);

    const onEnter = (e) => {
        if (e.key === "Enter") login();
    };

    const login = () => {
        client
            .authenticate({
                strategy: "local",
                email: email,
                password: password,
            })
            .then((result) => {
                toast.current.show({
                    severity: "success",
                    summary: "Authentication successful",
                    detail: "You have successfully authenticated!",
                });
                console.log(result);
            })
            .catch((err) => {
                toast.current.show({ severity: "error", summary: "Error", detail: "Message Content", life: 3000 });
                console.log({ err });
            });

        // if (validate()) {
        //     props.login({ email, password }).then(() => {
        //         history.push("/");
        //         console.log(email, password);
        //     });
        // }
    };

    const validate = () => {
        let isValid = true;
        let re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setEmailError("Please Enter a valid Email address");
            isValid = false;
        }
        if (password.length < 6) {
            setPasswordError("Please enter a valid password. Must be at least 6 characters");
            isValid = false;
        }
        return isValid;
    };

    // toast pop up message

    return (
        <div className="grid p-fluid flex flex-column align-items-center h-screen mt-8">
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card flex flex-column align-items-center">
                    <div className="grid col-12 xl:col-8 flex flex-column align-items-center">
                        <h4>Login</h4>
                        <div className="w-full mb-4">
                            <p className="m-0">Email</p>
                            <InputText type="text" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError ? "p-invalid" : ""} onKeyDown={onEnter}></InputText>
                            <small className="p-error">{emailError}</small>
                        </div>
                        <div className="w-full mb-4">
                            <p className="m-0">Password</p>
                            <span className="p-input-icon-right">
                                <i className={`pi ${maskPassword ? "pi-eye" : "pi-eye-slash"} cursor-pointer`} onClick={() => setMaskPassword(!maskPassword)} title={`${maskPassword ? "Show" : "Hide"} password`} />
                                <InputText type={maskPassword ? "password" : "text"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError ? "p-invalid" : ""} onKeyDown={onEnter}></InputText>
                            </span>
                            <small className="p-error">{passwordError}</small>
                        </div>
                        <div className="w-6 mb-4">
                            <Link to="/testdummy">
                                <Button label="Login" className="p-button-raised p-button-rounded" onClick={login}></Button>
                            </Link>
                            <Toast ref={toast} />
                        </div>

                        <div className="w-full flex flex-column align-items-center">
                            <div className="w-full flex justify-content-between">
                                <Link to="/signup">Don't have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// const mapState = (state) => {
//     const { isLoggedIn } = state.auth;
//     return { isLoggedIn };
// };
// const mapDispatch = (dispatch) => ({
//     login: (data) => dispatch.auth.login(data),
//     alert: (data) => dispatch.toast.alert(data),
// });

export default CustomLoginPage;

import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth/web-extension";

const provider = GoogleAuthProvider();

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu.");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Giriş yapılamadı!" + error.message);
        }
    };

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            if (user){
                navigate("/")
            }
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            // const user = response.user
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="auth">
            <h3>Giriş Yap/Kaydol</h3>
            <div>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email Adres"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="şifre"
                />
            </div>
            <div>
                <button>Google ile giriş yap</button>
                <button onClick={login}>Giriş Yap</button>
                <button onClick={register}>Kaydol</button>
            </div>
        </div>
    );
}

export default Auth;

import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Layout } from "../components/layout"
import useAuth from "../auth/context"
import { useRouter } from "next/router"

const FormPage = () => {

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const router = useRouter();

    const {login, isAuthenticated} = useAuth();

    const handleChange = (name) => e => {
        setValues({...values, [name]: e.target.value}) // le paramètre name correspond à l'attribut name dans l'input
    }

    const handleSubmit = e => {
        e.preventDefault();
        login(values.username, values.password)
    }

    return (
        <Layout>
            <section className="login mTop">
                <MDBContainer>
                    <div className="card col-xl-6 col-lg-6 col-md-6 col-12 mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <p className="h4 text-center my-4">Connexion</p>
                            <div className="grey-text">
                                <MDBInput 
                                    label="Nom d'utilisateur: johndoe" 
                                    icon="user"
                                    name="username" 
                                    group
                                    type="text"
                                    onChange={handleChange("username")}
                                />

                                <MDBInput 
                                    label="Mot de passe: secret"
                                    name="password"
                                    icon="lock" 
                                    group 
                                    type="password" 
                                    onChange={handleChange("password")}
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={handleSubmit} className="globalButton">Connexion</button>
                            </div>
                        </form>
                    </div>
                </MDBContainer>
            </section>
        </Layout>
    );
};

export default FormPage;
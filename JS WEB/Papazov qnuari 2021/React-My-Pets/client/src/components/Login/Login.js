

const Login = () => {

    return (

        <section class="login">
                <form action="#" method="post">
                    <fieldset>
                        <legend>Login</legend>
                        <p class="field">
                            <label for="username">Username</label>
                            <span class="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                                <span class="actions"></span>
                                <i class="fas fa-user"></i>
                            </span>
                        </p>
                        <p class="field">
                            <label for="password">Password</label>
                            <span class="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <span class="actions"></span>
                                <i class="fas fa-key"></i>
                            </span>
                        </p>
                        <input class="button" type="submit" class="submit" value="Login" />
                    </fieldset>
                </form>

                <style jsx>
                    {`
                    .login form,
                    .register form,
                    .create form {
                        margin: 5rem auto;
                    }
                    `}
                </style>
            </section>

    )
}

export default Login;
function Login(){ 

    let loginscreen = css`

        position: absolute;
        top: 40%;
        left: 55%;
        transform: translate(-50%, -50%);
    `

    let info = css`
        color: white; 
        font-size: calc(3px + 1vh);
        width: 50%;
        display: block;
        margin
    `

    let button = css`
        background-color: rgba(255, 255, 255, 0.16);
        border: 1px solid black;
        width: 75%;
        height: 5%;
        padding-left: 1%;
        padding-top: 2%;
        padding-bottom: 2%;
        border-radius: 5px;

        ::placeholder {
            color: white;
        }
        color: white;

        & :focus {
            outline: none;
            border: none;
        }
    `

    let realbutton = css`
        width: 77%;
        height: 7vh;
        background-color: rgba(255, 255, 255, 0.16);
        border-radius: 5px;
        border: 1px solid black;
        text-align: center;
        color: white;
    `

    let heading = css`
        font-size: 2.5rem;
        display: block;
        margin-top: 5vh;
        text-align: center;
    `
    return html`
        <span class=${heading}> evergreen </span>
        <div class=${loginscreen}>
            <h1>Login to Genesis</h1>


            <span>Genesis Username</span><br>
            <input class=${button} placeholder="Email/Username"></input><br><br>

            <span>Genesis Password</span><br>
            <input class=${button} placeholder="Password"></input><br><br>

            <span>Genesis District</span><br>
            <input class=${button} placeholder="District Domain"></input><br><br>

            <span class=${info}>
            Your data is only stored on your device. Our proxy server can never see any information on your genesis, including your passwords. You can clear this data at any time.
            </span><br>

            <button class=${realbutton}>Login</button>
        </div>

    `
}

export default Login
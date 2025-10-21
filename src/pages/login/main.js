function Login() {
  const loginWrapper = css`
    position: absolute;
    top: 40%;
    left: 55%;
    transform: translate(-50%, -50%);
  `;

  const heading = css`
    display: block;
    font-size: 2.5rem;
    margin-top: 5vh;
    text-align: center;
  `;

  const infoText = css`
    display: block;
    font-size: calc(3px + 1vh);
    width: 50%;
  `;

  const inputField = css`
    background-color: rgba(255, 255, 255, 0.16);
    border: 2px solid rgba(255, 255, 255, 0.30);
    border-radius: 5px;
    color: white;
    height: 5%;
    padding: 2% 1%;
    user-select: none;
    width: 75%;

    transition: border 0.3s ease-in-out;
    &::placeholder {
      color: rgba(255, 255, 255, 0.30);
    }

    &:focus {
      border: 2px solid rgba(165, 79, 250, 0.8);;
      box-shadow: none;
      outline: none;
    }
  `;

  const loginButton = css`
    background-color: rgba(255, 255, 255, 0.16);
    border: 1px solid black;
    border-radius: 5px;
    color: white;
    height: 7vh;
    text-align: center;
    width: 77%;
  `;

  return html`
    <span class=${heading}>evergreen</span>

    <div class=${loginWrapper}>
      <h1>Login to Genesis</h1>

      <label>Genesis Username</label><br />
      <input class=${inputField} placeholder="Email / Username" id="uname"/><br /><br />

      <label>Genesis Password</label><br />
      <input
        class=${inputField}
        placeholder="Password"
        type="password"
        id="pass"
      /><br /><br />

      <label>Genesis District</label><br />
      <input class=${inputField} placeholder="District Domain" id="domain"/><br /><br />

      <span class=${infoText}>
        Your data is only stored on your device. Our proxy server can never see
        any Genesis information, including your passwords. You can clear this
        data at any time.
      </span>
      <br /><br />

      <button class=${loginButton} on:click=${sendlogin}>Login</button>
    </div>
  `;
}

function sendlogin() {
    let info = {
        "user": document.getElementById("uname").value,
        "pass": document.getElementById("pass").value,
        "domain": document.getElementById("domain").value
        }
    
    // TODO - actual login system
    
}

export default Login;

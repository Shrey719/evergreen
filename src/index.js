import "./lib/mote.bundle.js";
import Home from "./pages/home/main.js";
import Login from "./pages/login/main.js";
function Body() {
  let body = css`
    background-color: rgba(27, 22, 34, 1);
    color: rgba(236, 206, 255, 1);
    width: 100vw;
    height: 100vh;
    padding: none;
    margin-bottom: 10vh;
    overflow-y: hidden;
    -moz-overflow: hidden;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  `;
  if (localStorage.getItem("loggedIn")) {
    return html`
      <div class=${body}>
        <div>${Home()}</div>
      </div>
    `;
  } else {
    return html`
      <div class=${body}>
        <div>${Login()}</div>
      </div>
    `;
  }
}

document.body.appendChild(Body());



// usage: login("https://example.com", "username", "password")
async function login(url, username, password) {
    let rsp = await fetch(`${url}/genesis/sis/j_security_check?parents=Y`, {
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
    },
    "referrer": `${url}/genesis/sis/view?gohome=true`,
    "body": `idTokenString=&j_username=${username}&j_password=${password}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    });
    location.href = (rsp.url)
}

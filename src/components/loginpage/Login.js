

function LoginPage() {
    return (
        <section className="login">
            <p>Enter a login key:</p>
            <input type="text" />
            <button type="submit" onClick={hello}>Log In</button>
            <div className="instructions">
                <p>Don't own a login key?</p>
                <p>Send an email to:</p>
                <address>example@jamk.fi</address>
            </div>
        </section>
    )
}

const hello = function Test() {
    console.log("Log In clicked")
}
export default LoginPage; 
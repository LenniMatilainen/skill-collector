import Login from "./Login"
import WhiteLogoText from "../../images/jamk_tunnus_valkoinen_nimella_englanti.png"

function LoginPage() {
    return (
      <>
        <section className="state">
            <img src={WhiteLogoText} width="195px" alt="Jamk logo" />
            <h1 className="collector">Skill Collector</h1>
            <h2>Log In</h2>
        </section>
        <Login />
      </>
    );
  }
  
  export default LoginPage;
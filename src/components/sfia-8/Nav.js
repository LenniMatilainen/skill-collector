import WhiteLogo from "../../images/jamk_tunnus_valkoinen.png"

export default function Navbar() {
    function Refresh() {
        window.location.reload();
    }

    return (
      <nav>
        <section onClick={Refresh} className="Logos">
            <img className="WhiteLogo" src={WhiteLogo} />
            <h1 className="pinkLogo">Skill Collector</h1>
        </section>
        <section className="state">
            <div className="rod"></div>
            <div className="balls">
                <div className="step">
                    <div className="sfiaBall"></div>
                    <p>SFIA-8 Skills</p>
                </div>
                <div className="step">
                    <div className="softBall"></div>
                    <p>Soft Skills</p>
                </div>
                <div className="step">
                    <div className="reviewBall"></div>
                    <p>Review</p>
                </div>
            </div>
        </section>
        <section className="userSettings">
            <p>Example Oy</p>
            <p>Log Out</p>
        </section>
      </nav>
    );
  }
  

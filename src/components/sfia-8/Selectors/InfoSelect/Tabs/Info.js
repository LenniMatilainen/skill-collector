import Skills from "../../../../../skiller-sfia-8-data.json"

export default function Info(props) {
    function findById(id) {
        return Object.values(Skills).find(skill => skill.Id === id);
      }
    
    const result = findById(props.clicked);
    let bColor = {
        "backgroundColor": props.clicked ? result.Color : null
    }
    let hColor = {
        "border": props.clicked ? `2px solid ${result.Color}` : null
    }

    if (props.clicked === false) {
        return (
            <p className="instruction">Click on a skill to get more info.</p>
        )
    }
    else {
        return (
            <>
                <p className="info--guide"><i>Double click on a skill to select  it.</i></p>
                <p style={bColor} className="info--subHeading">{result.Subcategory}</p>
                <h1 className="info--skillHeading">{result.Skill}</h1>
                <p className="info--quickDesc">{result["Overall description"]}</p>
                <div style={hColor} className="info--guidance">
                    <h3>Guidance notes</h3>
                    <p>{result["Guidance notes"].Intro}</p>
                    {result["Guidance notes"].Bullet1 && <ul>
                        {result["Guidance notes"].Bullet1 && <li>{result["Guidance notes"].Bullet1}</li>}
                        {result["Guidance notes"].Bullet2 && <li>{result["Guidance notes"].Bullet2}</li>}
                        {result["Guidance notes"].Bullet3 && <li>{result["Guidance notes"].Bullet3}</li>}
                        {result["Guidance notes"].Bullet4 && <li>{result["Guidance notes"].Bullet4}</li>}
                        {result["Guidance notes"].Bullet5 && <li>{result["Guidance notes"].Bullet5}</li>}
                        {result["Guidance notes"].Bullet6 && <li>{result["Guidance notes"].Bullet6}</li>}
                        {result["Guidance notes"].Bullet7 && <li>{result["Guidance notes"].Bullet7}</li>}
                        {result["Guidance notes"].Bullet8 && <li>{result["Guidance notes"].Bullet8}</li>}
                        {result["Guidance notes"].Bullet9 && <li>{result["Guidance notes"].Bullet9}</li>}
                        {result["Guidance notes"].Bullet10 && <li>{result["Guidance notes"].Bullet10}</li>}
                        {result["Guidance notes"].Bullet11 && <li>{result["Guidance notes"].Bullet11}</li>}
                        {result["Guidance notes"].Bullet12 && <li>{result["Guidance notes"].Bullet12}</li>}
                    </ul>
                    }
                    {result["Guidance notes"].AfterText && <p>{result["Guidance notes"].AfterText}</p>}
                    {result["Guidance notes"].AfterBullet1 && <ul>
                        {result["Guidance notes"].AfterBullet1 && <li>{result["Guidance notes"].AfterBullet1}</li>}
                        {result["Guidance notes"].AfterBullet2 && <li>{result["Guidance notes"].AfterBullet2}</li>}
                        {result["Guidance notes"].AfterBullet3 && <li>{result["Guidance notes"].AfterBullet3}</li>}
                        {result["Guidance notes"].AfterBullet4 && <li>{result["Guidance notes"].AfterBullet4}</li>}
                        {result["Guidance notes"].AfterBullet5 && <li>{result["Guidance notes"].AfterBullet5}</li>}
                        {result["Guidance notes"].AfterBullet6 && <li>{result["Guidance notes"].AfterBullet6}</li>}
                        {result["Guidance notes"].AfterBullet7 && <li>{result["Guidance notes"].AfterBullet7}</li>}
                        {result["Guidance notes"].AfterBullet8 && <li>{result["Guidance notes"].AfterBullet8}</li>}
                        {result["Guidance notes"].AfterBullet9 && <li>{result["Guidance notes"].AfterBullet9}</li>}
                        {result["Guidance notes"].AfterBullet10 && <li>{result["Guidance notes"].AfterBullet10}</li>}
                        {result["Guidance notes"].AfterBullet11 && <li>{result["Guidance notes"].AfterBullet11}</li>}
                    </ul>
                    }
                    {result["Guidance notes"].SecondAfterText && <p>{result["Guidance notes"].SecondAfterText}</p>}
                    {result["Guidance notes"].SecondAfterBullet1 && <ul>
                        {result["Guidance notes"].SecondAfterBullet1 && <li>{result["Guidance notes"].SecondAfterBullet1}</li>}
                        {result["Guidance notes"].SecondAfterBullet2 && <li>{result["Guidance notes"].SecondAfterBullet2}</li>}
                        {result["Guidance notes"].SecondAfterBullet3 && <li>{result["Guidance notes"].SecondAfterBullet3}</li>}
                        {result["Guidance notes"].SecondAfterBullet4 && <li>{result["Guidance notes"].SecondAfterBullet4}</li>}
                        {result["Guidance notes"].SecondAfterBullet5 && <li>{result["Guidance notes"].SecondAfterBullet5}</li>}
                        {result["Guidance notes"].SecondAfterBullet6 && <li>{result["Guidance notes"].SecondAfterBullet6}</li>}
                        {result["Guidance notes"].SecondAfterBullet7 && <li>{result["Guidance notes"].SecondAfterBullet7}</li>}
                        {result["Guidance notes"].SecondAfterBullet8 && <li>{result["Guidance notes"].SecondAfterBullet8}</li>}
                        {result["Guidance notes"].SecondAfterBullet9 && <li>{result["Guidance notes"].SecondAfterBullet9}</li>}
                        {result["Guidance notes"].SecondAfterBullet10 && <li>{result["Guidance notes"].SecondAfterBullet10}</li>}
                        {result["Guidance notes"].SecondAfterBullet11 && <li>{result["Guidance notes"].SecondAfterBullet11}</li>}
                    </ul>
                    }
                    {result["Guidance notes"].ThirdAfterText && <p>{result["Guidance notes"].ThirdAfterText}</p>}
                </div>
                {result["Level1Desc"] &&
                <div className="info--level">
                    <h2>{result.Skill}: Level 1</h2>
                    <p>{result["Level1Desc"]}</p>
                </div>
                }
                {result["Level2Desc"] &&
                <div className="info--level">
                    <h2>{result.Skill}: Level 2</h2>
                    <p>{result["Level2Desc"]}</p>
                </div>
                }
                {result["Level3Desc"] && <div className="info--level">
                    <h2>{result.Skill}: Level 3</h2>
                    <p>{result["Level3Desc"]}</p>
                </div>
                }
                {result["Level4Desc"] && <div className="info--level">
                    <h2>{result.Skill}: Level 4</h2>
                    <p>{result["Level4Desc"]}</p>
                </div>
                }   
                {result["Level5Desc"] && <div className="info--level">
                    <h2>{result.Skill}: Level 5</h2>
                    <p>{result["Level5Desc"]}</p>
                </div>
                }
                {result["Level6Desc"] && <div className="info--level">
                    <h2>{result.Skill}: Level 6</h2>
                    <p>{result["Level6Desc"]}</p>
                </div>
                }
                {result["Level7Desc"] && <div className="info--level">
                    <h2>{result.Skill}: Level 7</h2>
                    <p>{result["Level7Desc"]}</p>
                </div>
                }
            </>
        )
    }
}
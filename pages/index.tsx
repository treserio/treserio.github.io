import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import * as js from '../ts'


export default function Home() {

    useEffect(() => js.setBoxFunctions());

    return (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="css.css" />
            <Script src='./js.js' />
            <title>Tres Serio</title>
        </Head>
        <div className="container">
            <div className="box TL hidden">
                <img className="icons" src="./assets/icons/icon-skills.png" />
                Skills
            </div>
            <div className="box T hidden">
                <img className="icons" src="./assets/icons/icon-resume.png" />
                Resume
            </div>
            <div className="box TR hidden">
                <img className="icons" src="./assets/icons/icon-whoAmI.png" />
                Who am I?
            </div>
            <div className="box L hidden">
                <img className="icons" src="./assets/icons/icon-digitalPresence.png" />
                Digital Presence
            </div>
            <div className="center" onClick={js.moveSliders}>
                Frank&nbsp;"Tres"&nbsp;Serio
                <Image
                    alt="Tres' beautiful face"
                    className="centerImage"
                    src="/./assets/imgs/Profile-sm.png"
                    height='194'
                    width='198'
                />
            </div>
            <div className="box R hidden">
                <img className="icons" src="./assets/icons/icon-contactMe.png" />
                Contact Me
            </div>
            <div className="box BL hidden">
                Unknown-B7
            </div>
            <div className="box B hidden">
                Unknown-B8
            </div>
            <div className="box BR hidden">
                Unknown-B9
            </div>
        </div>
        <div className="expander-TL">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Skills</h2>
                    <i>to pay the bills</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <div className="flexColumn">
                <div className="flexRow">
                    <div data-skill="HTML" className="skillBox" >
                        <img className="skillIcon" src="./assets/skills/skill-html5.png" />
                    </div>
                    <div data-skill="Cascading Style Sheets" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-css.png" />
                    </div>
                    <div data-skill="Javascript" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-jsShield.png" />
                    </div>
                    <div data-skill="Webpack" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-webpack.png" />
                    </div>
                    <div data-skill="React" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-react.png" />
                    </div>
                </div>
                <div className="flexRow">
                    <div data-skill="Bootstrap" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-bootstrap.png" />
                    </div>
                    <div data-skill="TailwindCSS" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-tailwindcss.png" />
                    </div>
                    <div data-skill="TypeScript" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-typescript.png" />
                    </div>
                    <div data-skill="Dart" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-dart.png" />
                    </div>
                    <div data-skill="Flutter" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-flutter.png" />
                    </div>
                </div>
                <div className="flexRow">
                    <div data-skill="Django" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-django.png" />
                    </div>
                    <div data-skill="Python" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-python.png" />
                    </div>
                    <div data-skill="Node" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-node.png" />
                    </div>
                    <div data-skill="Node Package Manager" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-npm.png" />
                    </div>
                    <div data-skill="Git" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-git.png" />
                    </div>
                </div>
                <div className="flexRow">
                    <div data-skill="MySQL" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-mysql.png" />
                    </div>
                    <div data-skill="PostGreSQL" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-postgres.png" />
                    </div>
                    <div data-skill="Google Apps Script" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-GoogleScript.png" />
                    </div>
                    <div data-skill="Syntactically Awesome Stylesheet" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-sass.png" />
                    </div>
                    <div data-skill="Monty" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-monty.png" />
                    </div>
                </div>
                <div className="flexRow">
                    <div data-skill="C" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-C.png" />
                    </div>
                    <div data-skill="C++" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-Cpp.png" />
                    </div>
                    <div data-skill="C Sharp" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-Csharp.png" />
                    </div>
                    <div data-skill="GNU Compiler Collection" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-gcc.png" />
                    </div>
                    <div data-skill="Bash" className="skillBox">
                        <img className="skillIcon" src="./assets/skills/skill-bash.png" />
                    </div>
                </div>
            </div>
        </div>
        <div className="expander-T">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Resume</h2>
                    <i>it's all work and no play</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
                <div className="headerLinks">
                    <a className="button" href="https://docs.google.com/document/d/1RknMzNgHOz5l2a_MJLWJ9Ptj4xI85w_y/export?format=pdf">pdf</a>
                    |
                    <a className="button" href="https://docs.google.com/document/d/10uk51jO4ezA9_5dfj6slN4093LRGiEJG/edit?ouid=116796331630683177798&rtpof=true&sd=true">Google doc</a>
                </div>
            </div>
            <hr />
            <div className="modalBody">
                <img className="resume" src="./assets/imgs/Resume3.png" />
            </div>
        </div>
        <div className="expander-TR">
            <div className="modalHeader">
                <h2>About Me</h2>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <div className="modalBody">
                <img className="thought" src="./assets/imgs/my_thoughts.jpg" />
                <h4>Welcome,</h4>
                <p>I’ve worked in various IT positions over the years, and I’ve found I enjoy the problem-solving and camaraderie that a development environment provides. To that end, I spent a large portion of my free time before Holberton studying programming languages. When my charm and determination weren’t enough to win me the type of positions I had hoped for, I decided I needed to either go back to school and finish my bachelor's or take a chance on Holberton. It’s been a tumultuous two years of practice and study with my cohort at Holberton.
                </p>
                <p>Without instructors, the curriculum fosters a collaborative environment among your cohort as you work through projects. It is much more like a work environment than a university, which fits me well, as I’ve always been a self-starter. There are several instances where I was employed in a non-development role and took it upon myself to automate routine processes in my free time. I used bash scripts, password-protected executables written in C#, and reverse-engineered Adobe’s Outlook extension for mass email conversion.
                </p>
                <img className="clouds" src="./assets/imgs/Reaching.jpeg" />
                <p>During my time at Holberton, I was privileged to have been a student tutor. I was tasked with explaining algorithms, providing live coding examples, and assisting in debugging code for the next cohort.
                </p>
                <p></p>
                <p>As to what comes next? Well, that’s anybody’s guess. All I can do is keep climbing and reach for the sky!
                </p>
                <p>“...and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”<br />--Theodore Roosevelt
                </p>
            </div>
        </div>
        <div className="expander-L">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Digital Presence</h2>
                    <i>is still me, in essence</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <a href="https://github.com/treserio">Github</a>
            <a href="https://www.linkedin.com/in/frank-serio/">Linkedin</a>
        </div>
        <div className="expander-R">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Contact Me</h2>
                    <i>using the form you see</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <a href="https://github.com/treserio">Github</a>
            <a href="https://www.linkedin.com/in/frank-serio/">Linkedin</a>
        </div>
        <div className="expander-BL">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Projects</h2>
                    <i>free of side effects</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <a href="https://github.com/treserio/holbertonschool-web_react">React</a>
        </div>
        <div className="expander-B">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h2>Projects</h2>
                    <i>free of side effects</i>
                </div>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>
            <hr />
            <a href="https://github.com/treserio/holbertonschool-web_react">React</a>
        </div>
        <div className="expander-BR">
            <div className="modalHeader">
                <h2>Resume</h2>
                <img
                    src="./assets/icons/icon-close.png"
                    className="closeBtn"
                />
            </div>text n stuff and things
        </div>
    </>
    )
}

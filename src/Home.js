import discord from "./assets/discord.svg";
import person from "./assets/person.png";
import email from "./assets/email.svg";
import computer from "./assets/computer.png";
import github from "./assets/github.svg";
import { Link } from "react-router-dom";

const fontSize1 = {
    fontSize: "xxLarge",
}

const fontSize2 = {
    fontSize: "larger",
}

export default function Home() {
    return (
        <div className="content">


        <div className="main-image">
            <img src={computer} className="computer" alt="assets/computer.png" />
        </div>

        <div className="heading">
            <div className="heading-1">
                <h1 style={fontSize1}>Cesar Esquivel</h1>
            </div>
            <div className="heading-2">
                <h2 style={fontSize2}>Front End Developer</h2>
            </div>
        </div>

        <div className="footer">
            <div className="grid-container">
                <div className="row1">
                    <Link to="about">
                        <div className="column1">
                            <div className="button-1">
                                <input type="image" src={person} alt="assets/person.png" height="320" width="340" />
                            </div>
                        </div>
                    </Link>
                    <a href="mailto:czr.esquivel@gmail.com">
                        <div className="column2">
                            <div className="button-2">
                                <input type="image" src={email} alt="assets/email.svg" height="300" width="300" />
                            </div>
                        </div>
                    </a>
                </div>


                <div className="row2">
                    <a href="https://discord.com/channels/@me">
                        <div className="column3">
                            <div className="button-3">
                                <input type="image" src={discord} alt="assets/discord.svg" height="320" width="320" />
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/CsrEO">
                        <div className="column4">
                            <div className="button-4">
                                <input type="image" src={github} alt="assets/github.svg" height="325" width="325" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}
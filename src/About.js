

import './aboutApp.css';
import headshot from "./assets/headshot.jpg"

function App() {
    console.log("Hello!")
    return (
        <div className="content2">

            <div class="my-image">
                <img src={headshot} className="headshot" alt="./assets/headshot.jpg"></img>

            </div>
            <div class="description">
                <div class="header1">
                    <h1> About ME</h1>
                </div>
                <div class="header2">
                    <p>Hello! I am Cesar and I work with HTML/CSS and I am familiar with Javscript syntax and REACT.
                        Two things I like are coming up with new app ideas and working with new technologies.
                        I love learning new ways to solve problems.
                    </p>
                </div>
            </div>

        </div>);
}

export default App;
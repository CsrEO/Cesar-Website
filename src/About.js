import './About.css';
import headshot from "./assets/headshot.jpg"

function App() {
    return (
        <div className="content2">

            <div className="my-image" height={900} width={900}> 
                <img src={headshot} className="headshot"
                     alt="./assets/headshot.jpg" height={300} width={300}></img>

            </div>
            <div className="description">
                <div className="header1">
                    <h1> About Me</h1>
                </div>
                <div className="header2">
                    <p>Hello! I am Cesar and I work with HTML/CSS and I am
                        familiar with Javscript syntax and REACT.
                        Two things I like are coming up with new app ideas and
                        working with new technologies.
                        I love learning new ways to solve problems.
                    </p>
                </div>
            </div>

        </div>);
}

export default App;

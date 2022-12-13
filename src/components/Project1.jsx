import './App.css';
import './bootstrap.css';
import './examples.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"

function Project1() {
    return (

        <div className="App">
            <div class="container-fluid mainGrid ">
                <div>
                <img href="https://mysteryman444.github.io/responsiveRedesign/" class="img-fluid projectImages card" src={process.env.PUBLIC_URL + '/images/laddObservatory.png'} />
                <h4 class="text projectText">Wire Framming</h4>
                </div>
                <div class="text projectText">
                    <h2>Ladd Observatory Redesign</h2>
                    <p></p>
                    <h4><b>Objective</b></h4>
                    <h5>&nbsp;&nbsp;Rebuild the outdated Brown University Ladd Observatory's website to reflect modern design strategies and address web accessibility concerns. </h5>
                    <p></p>
                    <h4>Tools Used:</h4>
                    <p></p>
                    <h4>Take Aways</h4>
                    <ul class="text">
                        <li>Learned how to improve responsive websites</li>
                        <li>Experimented with web queries and adjusting content to various screen sizes</li>
                        <li>Developed skills in creating low and high-fidelity protypes using using Balsamiq and Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project1;
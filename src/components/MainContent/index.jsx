import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Contact from "../Contact";
import '../../Styles/MainContent.css';

function MainContent() {
    return (
        <div className='main-wrapper'>
            <div className='main-content'>
                <Projects />
                <AboutMe />
                <Contact />
            </div>
            <div className="hover-instruction">Hover over a card!</div>
        </div>
    )
}

export default MainContent;
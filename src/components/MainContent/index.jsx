import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Contact from "../Contact";
import '../../Styles/MainContent.css';

function MainContent() {
    return (
        <div className='main-content'>
            <Projects/>
            <AboutMe/>
            <Contact/>
        </div>
    )
}

export default MainContent;
import './styles/App.css';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';


function App() {

    const aboutImage = 'flacon.png';

    const toolsImages = ['js.png', 'python.png', 'temp.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png',];
    const toolsText = 'temp_text.png';

    const projectsImages = [['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'],];

    const projectsText = 'temp_text.png';


    return (
        <div className="app">
            <About image={aboutImage} />
            <Tools images={toolsImages} textImage={toolsText} effect={'rotate'} />
            <Projects images={projectsImages} textImage={projectsText} effect={'lens'} defaultImageSize={200} />
        </div>
    );
}


export default App;
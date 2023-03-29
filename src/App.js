import './styles/App.css';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import FindMe from './components/FindMe';


function App() {

    const aboutImages = ['hello.png', 'flacon.png'];

    const toolsImages = ['js.png', 'python.png', 'temp_image.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png', 'js.png', 'python.png',];
    const toolsText = 'stack.png';

    const projectsImages = [['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'], ['js.png', 'https://google.com'],];
    const projectsText = 'projects.png';


    return (
        <div className="app">
            <About images={aboutImages} />
            <Tools images={toolsImages} textImage={toolsText} effect={'rotate'} />
            <Projects images={projectsImages} textImage={projectsText} effect={'lens'} defaultImageSize={200} />
            <FindMe />
        </div>
    );
}


export default App;
import './styles/App.css';
import About from './components/About';
import Tools from './components/Tools';


function App() {

    const aboutImage = 'flacon.png';

    const toolsImages = ['js.png', 'python.png', 'temp.png'];
    const toolsText = 'js.png';



    return (
        <div className="app">
            <About image={aboutImage} />
            <Tools images={toolsImages} textImage={toolsText} />
        </div>
    );
}


export default App;

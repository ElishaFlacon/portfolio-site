import { useState } from 'react';
import './styles/App.css';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import FindMe from './components/FindMe';
import DoNot from './components/DoNot';


function App() {

    const [chaos, setChaos] = useState('');

    const handlerChaos = () => {
        if (chaos) {
            setChaos('');
            return;
        }

        setChaos('chaos');
    }

    const aboutImages = ['hello.png', 'flacon.png'];

    const toolsImages = [
        'js.png',
        'python.png',
        'temp_image.png',
        'js.png',
        'python.png',
        'js.png',
        'python.png',
        'js.png',
        'python.png',
        'js.png',
        'python.png',
        'js.png',
        'python.png',
    ];
    const toolsText = 'stack.png';

    const projectsImages = [
        ['js.png', 'https://google.com'],
        ['js.png', 'https://google.com'],
        ['js.png', 'https://google.com'],
        ['js.png', 'https://google.com'],
        ['js.png', 'https://google.com'],
        ['js.png', 'https://google.com'],
    ];
    const projectsText = 'projects.png';

    const doNotImage = 'do_not.png';

    const findImage = 'js.png';
    const findText = 'find_or_email.png';
    const findButton = 'js.png';
    const findAction = 'https://docs.google.com/forms/d/e/1FAIpQLSejsO1WzhwREt3aiaNL3rh778qcyYrOGdtW-Swh441CmeADpw/formResponse';
    const findInputs = [
        ['entry.964796190', 'Name or Company'],
        ['entry.848323745', 'Email'],
        ['entry.75551303', 'Message'],
    ];


    return (
        <div className={`app ${chaos}`} onAnimationEnd={() => setChaos('')}>
            <About images={aboutImages} />
            <Tools images={toolsImages} textImage={toolsText} effect={'rotate'} />
            <Projects images={projectsImages} textImage={projectsText} effect={'lens'} defaultImageSize={200} />
            <DoNot image={doNotImage} chaos={chaos} onChangeChaos={handlerChaos} />
            <FindMe
                textImage={findText}

                defaultImage={findImage}
                defaultImageSize={256}
                effect={'lens'}
                link={'https://github.com/ElishaFlacon'}

                inputs={findInputs}
                action={findAction}

                buttonImage={findButton}
                buttonImageSize={64}
                buttonEffect={'lens'}
            />
        </div>
    );
}


export default App;
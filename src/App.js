import React, { useState } from 'react';
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

    const aboutImages = ['hello.svg', 'flacon.svg'];

    const toolsImages = [
        'js.svg',
        'python.svg',
        'react.svg',
        'node.svg',
        'express.svg',
        'html.svg',
        'css.svg',
        'sass.svg',
        'postgresql.svg',
        'git.svg',
    ];
    const toolsText = 'stack.svg';

    const projectsImages = [
        ['dosy.svg', 'https://github.com/ElishaFlacon/dosy'],
        ['flappy_bird.svg', 'https://github.com/ElishaFlacon/flappy-bird-but-face-position-control'],
        ['solve_ege.svg', 'https://github.com/ElishaFlacon/solve-ege/'],
        ['calc.svg', 'https://elishaflacon.github.io/calculator-react-js/'],
        ['coffee.svg', 'https://github.com/ElishaFlacon/telegram-bot-coffee-cafe/'],
        ['todo.svg', 'https://elishaflacon.github.io/todo-list-native-js/'],
        ['ai_face.svg', 'https://elishaflacon.github.io/ai-landing/'],
        ['bulls.svg', 'https://elishaflacon.github.io/bulls-on-the-block/'],
        ['wtf.svg', 'https://elishaflacon.github.io/xynex-v2/'],
    ];
    const projectsText = 'projects.svg';

    const doNotImage = 'silly.gif';

    const findImage = 'github.svg';
    const findText = 'find_or_email.svg';
    const findButton = 'send.svg';
    const findAction = 'https://docs.google.com/forms/d/e/1FAIpQLSejsO1WzhwREt3aiaNL3rh778qcyYrOGdtW-Swh441CmeADpw/formResponse';
    const findInputs = [
        ['entry.964796190', 'Name or Company'],
        ['entry.848323745', 'Email'],
        ['entry.75551303', 'Message'],
    ];


    return (
        // old <div className={`app ${chaos}`} onAnimationEnd={() => setChaos('')}>
        <div className='app'>
            <About images={aboutImages} />
            <Tools images={toolsImages} textImage={toolsText} effect={'rotate'} />
            <Projects images={projectsImages} textImage={projectsText} effect={'lens'} defaultImageSize={256} />
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
                buttonImageSize={368}
                buttonEffect={'lens'}
            />
        </div>
    );
}


export default App;
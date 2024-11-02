import React, { useState } from 'react';
import About from './components/About';
// import Resume from './components/Resume';
import Tools from './components/Tools';
import Projects from './components/Projects';
import DoNot from './components/DoNot';
// import FindMe from './components/FindMe';
import './styles/App.css';


function App() {
    const [chaos, setChaos] = useState('');

    const handlerChaos = () => {
        if (chaos) {
            setChaos('');
            return;
        }

        setChaos('chaos');
    }

    // const resumeLink = '';
    // const resumeImage = 'resume.svg';

    const aboutImages = ['hello.svg', 'flacon.svg'];

    const toolsImages = [
        'js.svg',
        'ts.svg',
        'react.svg',
        'node.svg',
        'express.svg',
        'redux.svg',
        'axios.svg',
        'sass.svg',
        'css.svg',
        'html.svg',
        'python.svg',
        'flask.svg',
        'django.svg',
        'postgresql.svg',
        'git.svg',
    ];
    const toolsText = 'stack.svg';

    const projectsImages = [
        ['converter.svg', 'https://github.com/ElishaFlacon/file-converter/'],
        ['flappy_bird.svg', 'https://github.com/ElishaFlacon/flappy-bird-but-face-position-control/'],
        ['dosy.svg', 'https://github.com/ElishaFlacon/dosy/'],

        ['solve_ege.svg', 'https://github.com/ElishaFlacon/solve-ege/'],
        ['cloack.svg', 'https://github.com/ElishaFlacon/cloack-dungeon-roguelike/'],
        ['coffee.svg', 'https://github.com/ElishaFlacon/telegram-bot-coffee-cafe/'],

        ['calc.svg', 'https://elishaflacon.github.io/calculator-react-js/'],
        ['itwas.svg', 'https://github.com/ElishaFlacon/it-was-discord-bot/'],
        ['todo.svg', 'https://elishaflacon.github.io/todo-list-native-js/'],

        ['ai_face.svg', 'https://elishaflacon.github.io/ai-landing/'],
        ['compare.svg', 'https://github.com/ElishaFlacon/dosy/tree/server/'],
        ['bulls.svg', 'https://elishaflacon.github.io/bulls-on-the-block/'],

        // ['wtf.svg', 'https://elishaflacon.github.io/xynex-v2/'],
        // ['wtf.svg', 'https://github.com/ElishaFlacon/password-generator/'],
        // ['wtf.svg', 'https://elishaflacon.github.io/xynex-v1/'],
    ];
    const projectsText = 'projects.svg';

    const doNotImage = 'silly.gif';

    // const findImage = 'github.svg';
    // const findText = 'find_or_email.svg';
    // const findButton = 'send.svg';
    // const findAction = 'https://docs.google.com/forms/d/e/1FAIpQLSejsO1WzhwREt3aiaNL3rh778qcyYrOGdtW-Swh441CmeADpw/formResponse';
    // const findInputs = [
    //     ['entry.964796190', 'Name or Company'],
    //     ['entry.848323745', 'Email'],
    //     ['entry.75551303', 'Message'],
    // ];


    return (
        // old <div className={`app ${chaos}`} onAnimationEnd={() => setChaos('')}>
        <div className='app'>
            <About images={aboutImages} />
            {/* <Resume resumeLink={resumeLink} resumeImage={resumeImage} /> */}
            <Tools images={toolsImages} textImage={toolsText} effect={'rotate'} />
            <Projects images={projectsImages} textImage={projectsText} effect={'lens'} defaultImageSize={256} />
            <DoNot image={doNotImage} chaos={chaos} onChangeChaos={handlerChaos} />
            {/* <FindMe
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
            /> */}
        </div>
    );
}


export default App;
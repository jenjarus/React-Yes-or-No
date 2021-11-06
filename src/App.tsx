import React, {Component} from 'react';
import Controls from './Components/Controls'
import Result from './Components/Result'
import './styles/reset.css'
import './styles/base.scss'

export default class App extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="container">
                        <div className="header">
                            <div className="title"><span className="red">Да</span> Нет</div>
                            <div className="slogan">Узнай <span className="red">свою</span> судьбу</div>
                        </div>
                    </div>
                </header>
                <main>
                    <article className="container">
                        <Controls/>
                        <Result/>
                    </article>
                </main>
                <footer>
                    <div className="container">
                        <div className="footer">
                            <div className="copy">©Jenjarus <span className="year">2077</span></div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

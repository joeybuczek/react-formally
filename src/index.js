import React from 'react';
import ReactDOM from 'react-dom';
import { default as Docs } from "./docs";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();

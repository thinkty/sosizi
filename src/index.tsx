import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { deliveryPoints } from './data';

ReactDOM.render(<App deliveryPoints={deliveryPoints} />, document.getElementById('root'));
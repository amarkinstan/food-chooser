import { h } from 'preact';

import Header from './header';
import Chooser from './chooser';
// Code-splitting is automated for `routes` directory


const App = () => (
	<div id="app">
        <Header />
        <Chooser />
    </div>
);

export default App;

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

// ============================= Notes =============================
// Wrap BrowserRouter around the components that need to use <Router>
// =================================================================

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

import './App.css';
import Header from './components/Header/Header.jsx';
import Filling from './components/Filling/Filling.jsx';

function App(props) {
	return (
		<div className='container-app'>
			<Header/>
				<Filling/>
		</div>
	);
};

export default App;

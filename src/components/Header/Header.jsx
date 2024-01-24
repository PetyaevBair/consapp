import './Header.css';
import logo from '../../img/letter_k_z0xfptbpjlbb.svg';

export default function Header() {
    return (
		<header className='main-header'>
			<div className="logo-div">
				<img id='po' className="logo" src={logo} alt='Делаем что-то'/>
			</div>
		</header>
    );
}
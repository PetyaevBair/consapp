import './Filling.css';
import About from '../About/About.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import ConsultationsContainer from '../Consultations/ConsultationsContainer.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import { Routes, Route } from 'react-router-dom';
import Posts from '../Posts/Posts.jsx';

export default function Filling(props) {

    return <div className='app-wrapper'>
            <Navbar/>
            <div className='main-content-section'>
                <Routes>
                    <Route path='/' element={<About/>}/>
                    <Route path='/consultations' element={<ConsultationsContainer/>}/>
                    <Route path='/todolist' element={<TodoList/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                </Routes>
            </div>
        </div>
    
}
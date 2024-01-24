import Consultation from "./Consultation/Consultation.jsx";
import "./Consultations.css";
import React from 'react';

export default function Consultations (props) {
    let consultationsList = props.consultations.map(consultation => <Consultation key={consultation.id} consId={consultation.id} title={consultation.title} onRemoveClick={props.onConsRemove}/>);

    let newElement = React.createRef();
    
    function onClickAddCond () {
        props.addCons();
    };

    function onTitleConsChange () {
        let text = newElement.current.value;
        props.onConsChange(text);
    };

    return (
        <div>
            <div className="cons-inf-container">
                <div className="cons-input-container">
                    <textarea className="cons-input-text" ref={newElement} value={props.newConsTitle} onChange={onTitleConsChange}/>
                </div>
                <div className="cons-button-container">
                    <button className="cons-button-add" onClick={onClickAddCond}>
                        Отправить
                    </button>
                </div>
            </div>
            <div>
                {consultationsList}
            </div>
        </div>
    );
};
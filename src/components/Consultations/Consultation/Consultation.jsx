import "./Consultation.css";

export default function Consultation ({consId, title, onRemoveClick}) {
    return (
        <div className="cons-item">
            <div className="cons-item-text">
                {title}
            </div>
            <div className="cons-item-delete">
                <button className="cons-item-button-delete" onClick={() => onRemoveClick(consId)}>
                    X
                </button>
            </div>
        </div>
    );
};
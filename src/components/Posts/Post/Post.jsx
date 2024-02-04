
export default function Post ({postId, text, onRemoveClick}) {
    return (
        <div className="cons-item">
            <div className="cons-item-text">
                {text}
            </div>
            <div className="cons-item-delete">
                <button className="cons-item-button-delete" onClick={() => onRemoveClick(postId)}>
                    X
                </button>
            </div>
        </div>
    );
};
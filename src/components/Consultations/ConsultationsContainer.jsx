import { addConsActionCreator, updateConsTitleActionCreator, removeConsActionCreator } from "../../redux/consultationReducer.js";
import Consultations from './Consultations.jsx';
import { connect } from "react-redux";

function mapStateToProps (state) {
    return({
        newConsTitle: state.consultations.newConsTitle,
        consultations: state.consultations.consultations
    });
};

function mapDispatchToProps (dispatch) {
    return ({
        addCons: () => {
            dispatch(addConsActionCreator());
        },
        onConsChange: (text) => {
            dispatch(updateConsTitleActionCreator(text));
        },
        onConsRemove: (consId) => {
            dispatch(removeConsActionCreator(consId));
        }
    });
}

const ConsultationsContainer = connect(mapStateToProps, mapDispatchToProps)(Consultations);

export default ConsultationsContainer;
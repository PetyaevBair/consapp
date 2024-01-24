const ADD_CONS = 'ADD-CONS';

const UPDATE_CONS_TITLE = 'UPDATE-CONS-TITLE';

const REMOVE_CONS = 'REMOVE-CONS';

let initialState = {
    consultations: [
        {id: 1, title: 'Избаление от негативной энергии'},
        {id: 2, title: 'Для оценки стоимости ремонта'},
        {id: 3, title: 'Помогу решить проблемы с кодом'},
        {id: 4, title: 'Проконсультирую с выбором машины!'},
        {id: 5, title: 'Лечу народными средствами'},
    ],
    newConsTitle: 'Консультация'
}

export default function consultationsReducer(state = initialState, action) {
    
    switch (action.type) {
        case ADD_CONS:  {
            if (state.newConsTitle.trim() !== '') {
                let copyState = {...state};
                let newCons = {id: state.consultations.length+1, 
                    title: state.newConsTitle};
                copyState.consultations = [...state.consultations];
                copyState.consultations.push(newCons);
                copyState.newConsTitle = '';
                return copyState;
            } else {
                return state;
            }
        }
        case UPDATE_CONS_TITLE: {
            let copyState = {...state};
            copyState.newConsTitle = action.newTitle;

            return copyState;
        }
        case  REMOVE_CONS: {
            let copyState = {...state};
            copyState.consultations = state.consultations.filter(cons => cons.id !== action.id);

            return copyState;
        }
        default:
            return state;
    }
};


export function addConsActionCreator () {
    return ({
        type: ADD_CONS
    });
};

export function updateConsTitleActionCreator (text) {
    return ({
        type: UPDATE_CONS_TITLE,
        newTitle: text
    });
};

export function removeConsActionCreator (consId) {
    return({
        type: REMOVE_CONS,
        id: consId
    });
};
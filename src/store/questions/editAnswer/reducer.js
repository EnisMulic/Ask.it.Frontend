import updateObject from "../../../utils/updateObject";

export const editAnswerStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const editAnswerSuccess = (state, action) => {
    var answers = state.question.answers.map((answer) => {
        if (answer.id === action.answer.id) {
            answer = action.answer;
        }

        return answer;
    });

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
        }),
        error: null,
        loading: false,
    });
};

export const editAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

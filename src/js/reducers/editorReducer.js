import * as constants from "../constants.js";

/**
 * Reducer
 * В зависимости от выбора тексту придается декоративные теги
 * @param state
 * @param action
 * @returns {string|*}
 */
export function editorReducer(state, action) {

    switch (action.type) {
        case constants.TO_BOLD:
            return action.beforeChosen + `<b>${action.chosen}</b>` + action.afterChosen;
        break;

        case constants.TO_ITALIC:
            return action.beforeChosen + `<i>${action.chosen}</i>` + action.afterChosen;
        break;

        case constants.TO_UNDERLINED:
            return action.beforeChosen + `<u>${action.chosen}</u>` + action.afterChosen;
        break;

        case constants.PARAGRAPH:
            return action.beforeChosen + `<p>${action.chosen}</p>` + action.afterChosen;
        break;

        case constants.TO_RED:
            return action.beforeChosen + `<font color="red">${action.chosen}</font>` + action.afterChosen;
        break;

        case constants.TO_GREEN:
            return action.beforeChosen + `<font color="green">${action.chosen}</font>` + action.afterChosen;
        break;

        case constants.TO_BLUE:
            return action.beforeChosen + `<font color="blue">${action.chosen}</font>` + action.afterChosen;
        break;

        case constants.CLEAR:
            return '';
        break;

        default:
            return action.beforeChosen + action.chosen + action.afterChosen;
        break;
    }
}
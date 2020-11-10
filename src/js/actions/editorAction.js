import * as constants from "../constants.js";
/**
 * Получить объект action
 * beforeChosen - строка до выделенного текста
 * chosen - выделенный текст
 * afterChosen - строка после выделенного текста
 * @param type string
 * @param textareaId string
 * @returns {{afterChosen: string, beforeChosen: string, type: string, chosen: string}}
 */

export function getAction(type, textareaId) {
    const textarea = document.getElementById(textareaId);
    let startLength = textarea.selectionStart;
    let endLength = textarea.selectionEnd;

    /**
     * Если каретка стоит внутри слова, обернуть это слово в тег
     */
    if(startLength === endLength) {
        startLength = textarea.value.lastIndexOf(' ', startLength) + 1;
        endLength = textarea.value.indexOf(' ', endLength);
        if(endLength < 0) endLength = textarea.value.length;
    }

    return {
        type: tags[type],
        beforeChosen: textarea.value.slice(0, startLength),
        chosen: textarea.value.slice(startLength, endLength),
        afterChosen: textarea.value.slice(endLength)
    }
}

/**
 * Объект, поддерживаемых тегов, где ключ = id кнопки
 * @type {{paragraph: *, underlined: *, "red-text": *, bold: *, italic: *}}
 */
const tags = {
    'bold': constants.TO_BOLD,
    'italic': constants.TO_ITALIC,
    'underlined': constants.TO_UNDERLINED,
    'paragraph': constants.PARAGRAPH,
    'red': constants.TO_RED,
    'green': constants.TO_GREEN,
    'blue': constants.TO_BLUE,
    'clear': constants.CLEAR
};
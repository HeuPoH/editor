'use strict';

import {editorStore} from "../stores/editorStore.js";
import {editorReducer} from "../reducers/editorReducer.js";
import {getAction} from "../actions/editorAction.js";

try {
    const store = editorStore(editorReducer);

    if(store.getStatus()) {
        document.getElementById('btn-group').addEventListener('click',(event) => {
            store.dispatch(getAction(event.target.id, 'textarea'));
        });

        store.subscribe(() => {
            document.getElementById('textarea').value = store.getState();
        });
    }

    document.getElementById('toggle-button').addEventListener('click', function() {
        const textarea = document.getElementById('textarea');
        const text = document.getElementById('text');

        if(this.checked) {
            store.setStatus(false);
            textarea.style.display = 'none';
            text.innerHTML = textarea.value;
            text.style.display = 'block';
        } else {
            store.setStatus(true);
            text.style.display = 'none';
            textarea.value = text.innerHTML;
            textarea.style.display = 'block';
        }
    });
} catch (e) {
    console.log(e.message);
}
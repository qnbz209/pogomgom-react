import React from 'react';

function renderErrorMessage(errmsg) {
    if (errmsg === '') {
        return;
    }
    else {
        return <p>{errmsg}</p>
    }
}

export default renderErrorMessage;
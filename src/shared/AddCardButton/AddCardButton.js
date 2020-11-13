import React from 'react'

import './AddCardButton.scss'

export function AddCardButton({addNewCard}) {
    return (
        <button className="button-new-task" onClick={() => addNewCard()}>
+
</button>
    )
}

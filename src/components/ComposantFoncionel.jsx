import React from 'react'

export default function ComposantFoncionel() {
    const [cpt, setCpt] = React.useState(10);

    return (
        <div>
            <div>ComposantFoncionel</div>
            <button onClick={() => setCpt(cpt - 1)}>
                Decrementer
            </button>
            <div>Compteur: {cpt}</div>
        </div>
    )
}

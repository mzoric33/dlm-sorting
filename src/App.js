import { useEffect, useState } from 'react'
import Form from './components/Form'

import './index.css'

const POVRSINA_KAMIONA = 33.32

function App() {
    const [nalozi, setNalozi] = useState([])
    const [brojKamiona, setBrojKamiona] = useState(false)

    useEffect(() => {
        if (nalozi?.length) {
            let povrsina = 0

            for (const n of nalozi) {
                if (n.pripadajuci_nalozi?.length) {
                    for (const pn of n.pripadajuci_nalozi) {
                        povrsina += pn.kolicina * pn.duzina * pn.sirina
                    }
                }
            }

            if (povrsina) {
                setBrojKamiona(Math.ceil(povrsina / POVRSINA_KAMIONA))
            }
        }
    }, [nalozi])

    return (
        <>
            <h1 className="text-6xl font-bold flex justify-center items-center pt-5">
                D.L.M. Sorting
            </h1>
            <Form nalozi={nalozi} setNalozi={setNalozi} />
            {brojKamiona && <div>{brojKamiona}</div>}
        </>
    )
}

export default App

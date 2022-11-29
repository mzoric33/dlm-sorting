import React from 'react'
import { useState } from 'react'
import Palete from './Palete'

const Form = ({nalozi, setNalozi}) => {
    const [isEntered, setIsEntered] = useState(false)

    const dodajPaletuHandler = (e) => {
        e.preventDefault()

        setIsEntered(true)
        setNalozi([
            ...nalozi,
            {
                naziv: e.target.elements.naziv.value,
            },
        ])
    }

    return (
        <div className="flex">
            <form
                className="flex flex-col border rounded border-black p-10 max-w-max ml-80 mt-20 bg-white"
                onSubmit={dodajPaletuHandler}>
                <label htmlFor="naziv" className="p-2">
                    Naziv:
                </label>
                <input
                    type="text"
                    id="naziv"
                    name="naziv"
                    className="border border-black bg-gray-100"></input>
                <button
                    type="submit"
                    value="Submit"
                    className="font-bold border-2 rounded border-black p-1 mt-5 bg-gray-100">
                    Dodaj Nalog
                </button>
            </form>
            {isEntered && nalozi?.length && <Palete nalozi={nalozi} setNalozi={setNalozi} />}
        </div>
    )
}

export default Form

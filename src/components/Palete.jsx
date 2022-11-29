import React, { useState } from 'react'
import { useEffect } from 'react'

const Palete = ({ nalozi, setNalozi }) => {
    const [options, setOptions] = useState({
        naloziPalete: [],
        aktivniNalog: false,
    })

    const dodajPaletuHandler = (e, aktivniNalog) => {
        e.preventDefault()
        setOptions({
            ...options,
            naloziPalete: [
                ...options.naloziPalete,
                {
                    nalog: aktivniNalog,
                    kolicina: e.target.elements.kolicina.value,
                    sirina: e.target.elements.sirina.value,
                    duzina: e.target.elements.duzina.value,
                    oznaka: e.target.elements.oznaka.value,
                },
            ],
            aktivniNalog: false,
        })
    }

    useEffect(() => {
      if (options?.naloziPalete?.length) {
        let rezultat = []

        for (const n of nalozi) {
          const pripadajuciNalozi = options.naloziPalete.filter((o) => o.nalog === n.naziv)

          if (pripadajuciNalozi?.length) {
            rezultat.push({
              naziv: n.naziv,
              pripadajuci_nalozi: pripadajuciNalozi,
            })
          }
        }

        setNalozi(rezultat)
      }
    }, [options.naloziPalete])

    const handleAddPalete = (n) => {
        setOptions({
            ...options,
            aktivniNalog: n,
        })
    }

    return (
        <div>
            {nalozi &&
                nalozi.map((n) => (
                    <>
                        <div className="justify-center border rounded border-black max-w-max p-10 ml-20 mt-20 bg-white">
                            <p className="font-bold underline">{n.naziv}</p>
                            {options?.naloziPalete?.filter(
                                (o) => o.nalog === n.naziv
                            )?.length ? (
                                options?.naloziPalete
                                    ?.filter((o) => o.nalog === n.naziv)
                                    .map((o) => (
                                        <p className="border border-red-500">
                                            <div>{o.kolicina}</div>
                                            <div>{o.sirina}</div>
                                            <div>{o.duzina}</div>
                                            <div>{o.oznaka}</div>
                                        </p>
                                    ))
                            ) : (
                                <></>
                            )}
                            <button onClick={() => handleAddPalete(n.naziv)}>
                                +
                            </button>
                        </div>
                    </>
                ))}
            {options.aktivniNalog && (
                <form
                    className="flex flex-col border rounded border-black p-10 max-w-max ml-80 mt-20 bg-white"
                    onSubmit={(e) =>
                        dodajPaletuHandler(e, options.aktivniNalog)
                    }>
                    <label htmlFor="kolicina" className="p-2">
                        Količina:
                    </label>
                    <input
                        type="text"
                        id="kolicina"
                        name="kolicina"
                        className="border border-black bg-gray-100"></input>
                    <label htmlFor="sirina" className="p-2">
                        Širina:
                    </label>
                    <input
                        type="text"
                        id="sirina"
                        name="sirina"
                        className="border border-black bg-gray-100"></input>
                    <label htmlFor="duzina" className="p-2">
                        Dužina:
                    </label>
                    <input
                        type="text"
                        id="duzina"
                        name="duzina"
                        className="border border-black bg-gray-100"></input>
                    <label htmlFor="oznaka" className="p-2">
                        Oznaka:
                    </label>
                    <input
                        type="text"
                        id="oznaka"
                        name="oznaka"
                        className="border border-black bg-gray-100"></input>
                    <button
                        type="submit"
                        value="Submit"
                        className="font-bold border-2 rounded border-black p-1 mt-5 bg-gray-100">
                        Dodaj Paletu
                    </button>
                </form>
            )}
            <button
                type="button"
                className="font-bold border-2 rounded border-black p-1 mt-5 ml-36 bg-gray-100">
                Sortiraj
            </button>
        </div>
    )
}

export default Palete

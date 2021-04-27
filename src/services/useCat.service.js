import { useState, useEffect } from 'react'
const cats = [
    { id: 'cat1', name: 'adorable 1', image: 'cat1.jpeg' },
    { id: 'cat2', name: 'adorable 2', image: 'cat2.jpeg' },
    { id: 'cat3', name: 'adorable 3', image: 'cat3.jpeg' },
    { id: 'cat4', name: 'adorable 4', image: 'cat4.jpeg' },
    { id: 'cat5', name: 'adorable 5', image: 'cat5.jpeg' },
]

export function useCatsService() {
    const [ selectedCatId, setSelectedCatId ] = useState('')
    const [ catSelected, setCatSelected ] = useState(null)

    const changeSelectedCatId = (newCatId) => {
        setSelectedCatId(newCatId)
    }

    useEffect(() => {
        console.log('effect')
        setCatSelected(cats.find(cat => cat.id === selectedCatId))
    }, [ selectedCatId ])

    return {
        cats,
        changeSelectedCatId,
        catSelected
    }
}


import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    const [categories, setcategories] = useState(['Dragon Ball'])

    // const onAdd = () => {
    //     // setcategories([...categories, 'Jojo']);
    //     setcategories(cats => [...cats, 'Jojo']);
    // }



    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(elements => (
                        <GifGrid
                            key={elements}
                            category={elements} />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
import React from 'react'

const Category = (props) => {
    return (
        <div>
            <select onChange={(event)=> props.changeCategory(event.target.value)}>
                <option>first</option>
                <option>first</option>
                <option>first</option>
            </select>
        </div>

    )
}

export default Category
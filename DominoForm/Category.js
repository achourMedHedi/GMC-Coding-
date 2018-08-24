import React from 'react'
import {SelectField} from 'react-md'
const Category = (props) => {
    const category = ["w" , "E" , "V"]
    return (
        <SelectField 
        onChange={(value , event)=>props.changeCategory(value)}
        id="select-field-5"
        placeholder="Choose Category"
        className="md-cell"
        menuItems={category}
        position={SelectField.Positions.BELOW}
    />

    )
}

export default Category
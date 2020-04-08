import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const Filter = (props) =>  {
    const handleChange = (event) => {
        props.childControlsAlphabetized()
    }

    return (
        <Checkbox 
            label='alphabetize'
            checked={props.alphabetized}
            onChange={handleChange}
        />
    )
}

export default Filter
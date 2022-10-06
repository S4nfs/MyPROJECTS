import React from 'react'
import ContextFunctional from '../Context/ContextFunctional'
import FunctionContextB from './FunctionContextB'
import FunctionContextC from './FunctionContextC'

function FunctionContextA() {
    return (
        <div>
            <ContextFunctional>
                <FunctionContextB />
                <FunctionContextC />
            </ContextFunctional>
        </div>
    )
}

export default FunctionContextA
import React from 'react'
import styled from 'styled-components'
import { FilterWrap } from './Common/components'
import Heading from './Common/heading'

const AttributeType = styled.div`
    width: 100%;
    margin: 5px 0;
`
const AttributeWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`
const AttributeLabel = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const AttributeInput = styled.input`
`
const AttributeText = styled.div`
    width: 100%;
    padding: 0 6px;
    font-size: 14px;
`


const AttributesFilter = (props) => {
    return (
        <FilterWrap>
            <AttributeType>
                <Heading>Processor:</Heading>
                <AttributeWrap>
                    {[1,2,3,4].map(i => (
                        <AttributeLabel>
                            <AttributeInput type='checkbox'/>
                            <AttributeText>Attribute {i}</AttributeText>
                        </AttributeLabel>
                    ))}
                </AttributeWrap>
            </AttributeType>
            <AttributeType>
                <Heading>RAM:</Heading>
                <AttributeWrap>
                    {[1,2,3,4].map(i => (
                        <AttributeLabel>
                            <AttributeInput type='checkbox'/>
                            <AttributeText>Attribute {i}</AttributeText>
                        </AttributeLabel>
                    ))}
                </AttributeWrap>
            </AttributeType>
            <AttributeType>
                <Heading>Storage:</Heading>
                <AttributeWrap>
                    {[1,2,3,4].map(i => (
                        <AttributeLabel>
                            <AttributeInput type='checkbox'/>
                            <AttributeText>Attribute {i}</AttributeText>
                        </AttributeLabel>
                    ))}
                </AttributeWrap>
            </AttributeType>
        </FilterWrap>
    )
}

export default AttributesFilter
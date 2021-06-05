
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import styled from 'styled-components'

interface PropInterface {
    Editable: boolean
}

const Wraper = styled.div`
    padding-bottom: 1em;
    padding-right: 1em;
`
const FlexRow = styled.div`
    display:flex;
    flex-direction:row;
`

const FlexColumn = styled.div`
    display:flex;
    flex-direction:column;
`

const BlueDiv = styled.div`
    background-color: #e6f0f3;
    color:#71abbb;
    padding: 0.2em;
    border-radius: 3px;
`
interface elementProps {
    Label: string,
    Text: string,
    Editable: boolean,
}
const Element = ({ Label, Text, Editable }: elementProps) => {

    const [TextState, setTextState] = useState(Text)
    const handleChangeText = (e: any) => {
        setTextState(e.target.value)
    }
    return (
        <Wraper>
            <FlexRow>
                <FlexColumn>
                    <Typography variant='subtitle1'>{Label}</Typography>
                    <BlueDiv>{
                        !Editable ?
                            (<Typography variant="subtitle1" >
                                {TextState}
                            </Typography>)
                            : (<TextField type='text' value={TextState} onChange={handleChangeText} />)
                    }</BlueDiv>
                </FlexColumn>
            </FlexRow>
        </Wraper>
    )
}

const BlueBoxes = ({ Editable }: PropInterface) => {
    return (
        <FlexColumn>
            <Element Text="Mergers and acquisition" Label="Expertise" Editable={Editable} />
            <FlexRow>
                <Element Text="Cross border operation" Label="Specialities" Editable={Editable} />
                <Element Text="Transaction over 55zł" Label="&nbsp;" Editable={Editable} />
            </FlexRow>
            <FlexRow>
                <Element Text="Paris Bar Association" Label="Admision to practice law" Editable={Editable} />
                <Element Text="Tunisian Bar Association" Label="&nbsp;" Editable={Editable} />
            </FlexRow>
            <Element Text="Tunisia" Label="Countries" Editable={Editable} />
            {/* <BlueDiv>{
                        !Editable ?
                            (<Typography variant="subtitle1" >
                                {'data?.name'}
                            </Typography>)
                            : (<TextField type='text' value={'data?.name'} />)
                    }</BlueDiv> */}
        </FlexColumn>
    )
}

export default BlueBoxes

import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';

interface PanelInfoProps {
    Editable: boolean
}

interface ElementProps {
    Editable: boolean,
    Text: string,
}

const BlueBacked = styled.div`
    display: flex;
    background-color: #e6f0f3;
    padding: 0.2em;
    margin-bottom: 0.2em
`

const Wraper = styled.div`
    padding-top: 1rem;
`
const Spacer = styled.span`
    width:1em;
`

const SmallImg = styled.img`
    height: 2em;
    width: 2em;
    border-radius: 1em;
`

const EditableElement = ({ Editable, Text }: ElementProps) => {

    const [TextState, setTextState] = useState(Text)
    const handleChangeText = (e: any) => {
        setTextState(e.target.value)
    }

    return (
        <div>{
            !Editable ?
                (<Typography variant="body1" >
                    {TextState}
                </Typography>)
                : (<TextField fullWidth type='text' value={TextState} onChange={handleChangeText} />)
        }</div>
    )
}

const PanelInfo = ({ Editable }: PanelInfoProps) => {
    return (
        <Wraper>
            <Typography variant="h6">Panel Information</Typography><br />


            <Typography variant="subtitle2">Hourly fee</Typography>
            <EditableElement Text="2$ an hour please negotiate carefully" Editable={Editable}  />
            <br />
            <Typography variant="subtitle2">Terms and Conditions</Typography>
            <EditableElement Text="Monthly retainer 10gold coins - see Jeanny Smith" Editable={Editable}  />
            <BlueBacked>
                <DescriptionIcon/><Typography variant="subtitle1">Attachment_Lorem-Ipsum.jpg</Typography>
            </BlueBacked>
            <br />
            <Typography variant="subtitle1">Services and Projects</Typography>
            <EditableElement Text="Corporate MA and International acquisitions" Editable={Editable}  />
            <br />
            <Typography variant="subtitle1">Internal Corespondants</Typography>
            <BlueBacked>
                <SmallImg src="https://thispersondoesnotexist.com/image"/>
                <Spacer/><Typography variant="subtitle1">Firstname Lastname</Typography>
                <Spacer/><Spacer/>
                <ChatIcon/><Typography variant="subtitle1">Message</Typography>
                <Spacer/><Spacer/>
                <PersonIcon/><Typography variant="subtitle1">Profile</Typography>
            </BlueBacked>
            <BlueBacked>
                <SmallImg src="https://thispersondoesnotexist.com/image"/>
                <Spacer/><Typography variant="subtitle1">Firstname Lastname</Typography>
                <Spacer/><Spacer/>
                <ChatIcon/><Typography variant="subtitle1">Message</Typography>
                <Spacer/><Spacer/>
                <PersonIcon/><Typography variant="subtitle1">Profile</Typography>
            </BlueBacked>
        </Wraper>
    )
}

export default PanelInfo

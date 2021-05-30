import React, { useState } from 'react'
import Colors from 'src/styledHelpers/Colors';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import BlueBoxes from './BlueBoxes';
import PanelInfo from './PanelInfo';
import Divider from '@material-ui/core/Divider'
import Proposals from './Proposals';
import InternalReviews from './InternalReviews'
import AmountOfFees from './AmountOfFees';

const Wrapper = styled.div`
    width:100%;
    background-color:${Colors.white};
    position:relative;
`;

const EditButton = styled(IconButton)`
    position:absolute;
    left:calc(100% - 45px);
    top:15px;
`;

const LongForm = () => {
    const [Editable, setEditable] = useState(false);
    const handleClickEdit = () => { setEditable(!Editable) }   

    return (
        <Wrapper>
            <br />
            <EditButton onClick={() => handleClickEdit()}><EditIcon/></EditButton>
            <BlueBoxes Editable={Editable}/>
            <Divider/>
            <PanelInfo Editable={Editable}/>
            <Proposals Editable={Editable}/>
            <InternalReviews Editable={Editable}/>
            <br /><br /><Divider/>
            <AmountOfFees Editable={Editable}/>
        </Wrapper>
    )
}

export default LongForm

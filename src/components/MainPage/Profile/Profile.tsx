import Paper from '@material-ui/core/Paper'
import React from 'react'
import ProfileButtons from './Components/ProfileButtons'
import styled from 'styled-components'
import ProfileForm from './Components/ProfileForm'
import Divider from '@material-ui/core/Divider'
import LongForm from './Components/LongForm/LongForm'


const PaperWraper = styled(Paper)`
    min-width: 600px;
    max-width: 1200px;
    padding: 1rem
    
`


const Profile = () => {
    return (
        <>
            <PaperWraper>
                <ProfileButtons/>
                <ProfileForm/>
                <Divider />
                <LongForm/>
            </PaperWraper>
        </>
    )
}

export default Profile

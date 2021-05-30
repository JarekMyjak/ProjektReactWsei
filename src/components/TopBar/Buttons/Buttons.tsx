import IconButton from '@material-ui/core/IconButton'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Badge from '@material-ui/core/Badge';
import styled from 'styled-components'

import React from 'react'

const Buttons = ()  => {

    // const circle = styled.div`
    //   backgroundColor: lightgrey;
    //   width: 40;
    //   height: 40;
    //   border-radius: '50%';
    // `

    return (
        <div>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <Badge badgeContent={0} color="secondary">
                    <HomeRoundedIcon />
                </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <Badge badgeContent={4} color="secondary">
                    <QuestionAnswerRoundedIcon />
                </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsRoundedIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default Buttons



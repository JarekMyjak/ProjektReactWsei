import React from 'react'
import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FlexDiv, InlineFlexDiv } from 'src/styledHelpers/components'
import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {

    },
    media: {
        height: 140,
    },
});

interface BanerProps {
    bgImg: string,
    title: string,
    description: string,
    icon: string,
}


const TitleBox = styled(FlexDiv)`
    justify-content: space-between;
`

const Icon = styled.img`
        height: 100px;
        margin-right: 1rem;
    `

const Baner: FC<BanerProps> = (props) => {
    const classes = useStyles();
    


    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.bgImg}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <InlineFlexDiv>
                        <Icon src={props.icon} />
                        <div>
                            <TitleBox >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.title}
                                </Typography>
                                <SettingsIcon/>
                            </TitleBox>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </div>
                    </InlineFlexDiv>
                </CardContent>
            
        </Card>
    )
}

export default Baner

import React from 'react';
import { FlexDiv } from 'src/styledHelpers/components';
import styled from 'styled-components';
import EntitiesContainer from './EntitiesContainer';

const Content = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`

const EntitiesPage = () => {
    return (
        <Content>
            <EntitiesContainer/>
        </Content>
    )
}

export default EntitiesPage

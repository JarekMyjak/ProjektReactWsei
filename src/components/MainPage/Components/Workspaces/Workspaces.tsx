import {FC} from 'react';
import styled from 'styled-components';

import WorkspaceContainter from './WorkspaceContainer';

import Colors from 'src/styledHelpers/Colors';
import { fontSize } from 'src/styledHelpers/FontSizes';

const Title = styled.h1`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:15px 10px;
`;

export const Workspaces: FC = () =>{
    return(
        <>
            <Title>Workspaces</Title>
            <WorkspaceContainter/>
        </>
    );
}

export default Workspaces;
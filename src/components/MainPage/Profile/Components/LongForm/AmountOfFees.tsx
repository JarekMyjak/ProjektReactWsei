import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

interface EditableProps {
    Editable: boolean
}

interface ElementProps {
    Editable: boolean,
    Text: string,
}

const Wraper = styled.div`
    padding-top: 1rem;
`

function createData(name: string, Entiy: string, Location: string, Expertise: string, Date: string, Firm: string) {
    return { name, Entiy, Location, Expertise, Date, Firm };
}

const rows = [
    createData('2019', 'CS 153', '3500€', 'Cliford Chance', '', ''),
    createData('2018', 'CS 153', '9000€', 'Linklaters', '', ''),
    createData('2017', 'CS 14', '10500€', 'Linklaters', '', ''),
];

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
                : (<TextField size='small' type='text' value={TextState} onChange={handleChangeText} />)
        }</div>
    )
}

const AmountOfFees = ({ Editable }: EditableProps) => {
    return (
        <Wraper>
            <Typography variant="h6">Amount of fees</Typography><br />
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell align="right">Cost center</TableCell>
                            <TableCell align="right">Total amount</TableCell>
                            <TableCell align="right">Law firm</TableCell>
                            <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                            <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, id) => (
                            <TableRow key={row.name + id}>
                                <TableCell component="th" scope="row">
                                    <EditableElement Editable={Editable} Text={row.name} />
                                </TableCell>
                                <TableCell align="right">
                                    <EditableElement Editable={Editable} Text={row.Entiy} />
                                </TableCell>
                                <TableCell align="right">
                                    <EditableElement Editable={Editable} Text={row.Location} />
                                </TableCell>
                                <TableCell align="right">
                                    <EditableElement Editable={Editable} Text={row.Expertise} />
                                </TableCell>
                                <TableCell align="right">
                                    &nbsp;
                                </TableCell>
                                <TableCell align="right">
                                    &nbsp;
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h6" >See more Reviews </Typography>
        </Wraper>
    )
}

export default AmountOfFees
import { styled } from '@mui/material/styles';

export const StyledButton = styled('button')(({ theme }) => `
    background: transparent;
    border: solid 1px;
    border-color: ${theme.palette.text.secondary};
    color: ${theme.palette.text.secondary};
    padding: 16px;
    border-radius:5px;
    width:200px;
    :hover{
        cursor: pointer;
        background:rgba(0,0,0,0.2);
    }


`)
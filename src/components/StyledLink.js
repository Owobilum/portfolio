import { styled } from '@mui/material/styles';

export const StyledLink = styled('a')(({ theme }) => `
    color: ${theme.palette.text.secondary};
    text-decoration: none;
    position: relative;
    ::before{
        content:"";
        height: 1px;
        width: 0;
        background-color:${theme.palette.text.secondary};
        position: absolute;
        bottom:0;
        transition: width 0.2s ease-in-out
    }
    :hover::before{
        width: 100%;
    }
`)


import { styled } from '@mui/material/styles';

import handEmoji from '../images/hand-emoji.png'

export const HandEmoji = styled('img')`
    cursor: pointer;
    width: 20px;
    margin: 0 4px;
    animation: wave 2.5s 1;
    transform-origin: 70% 70%;
    :hover{
        animation: wave 2.5s infinite;
        transform-origin: 70% 70%;
    }
    @keyframes wave{
        0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(14deg);
        }
        20%{
            transform: rotate(-8deg);
        }
        30%{
            transform: rotate(14deg);
        }
        40%{
            transform: rotate(-4deg);
        }
        60%{
            transform: rotate(10deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }

`

export const StyledHandEmoji = () => {

    return (
        <HandEmoji src={handEmoji} alt="" />
    )
}


import styled from "styled-components";

export const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        span{
            font-size: 14px;
            color: ${({ theme }) => theme.colors.text.light};
        }
`
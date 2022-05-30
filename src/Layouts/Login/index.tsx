import { FC, ReactNode } from "react"

import { Wrapper } from "./styles"

interface Props {
    children: ReactNode
}

export const Login:FC<Props> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
import { type ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
    children: ReactNode
    container?: HTMLElement

}

export const Portal: FC<PortalProps> = ({ children, container = document.body }) => {
    return createPortal(children, container)
}

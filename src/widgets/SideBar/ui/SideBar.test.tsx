import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { renderComponent } from 'config/test/renderComponent'

describe('SideBar', () => {
    test('Test render', () => {
        renderComponent(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', () => {
        renderComponent(<SideBar />)
        const toggleButton = screen.getByTestId('toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

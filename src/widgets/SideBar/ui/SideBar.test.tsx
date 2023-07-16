import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation'
import { SideBar } from './SideBar'

describe('SideBar', () => {
    test('Test render', () => {
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', () => {
        renderWithTranslation(<SideBar />)
        const toggleButton = screen.getByTestId('toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
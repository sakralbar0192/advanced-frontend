import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        expect(screen.getByTestId('increment-button')).toBeInTheDocument()
        expect(screen.getByTestId('decrement-button')).toBeInTheDocument()
    })

    test('Decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(screen.getByTestId('decrement-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })

    test('Increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(screen.getByTestId('increment-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
})

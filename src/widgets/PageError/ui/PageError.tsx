import { type FC } from 'react'

export const PageError: FC = () => {
    return (
        <div>
            <h1>Sorry, something went wrong...</h1>
            <button
                type='button'
                onClick={() => { window.location.reload() }}
            >
                Reload page
            </button>
        </div>
    )
}

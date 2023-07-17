import { type StoryFn } from '@storybook/react'
import { useEffect } from 'react'
// @ts-expect-error wtf
import isLokiRunning from '@loki/is-loki-running'
// @ts-expect-error wtf
import createAsyncCallback from '@loki/create-async-callback'

const delay = 1000

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const LokiDecorator = (StoryComponent: StoryFn) => {
    useEffect(() => {
        /* eslint-disable @typescript-eslint/strict-boolean-expressions */
        if (isLokiRunning?.()) {
            const onDone = createAsyncCallback()
            const timer = setTimeout(() => {
                onDone()
            }, delay)

            return () => { clearTimeout(timer) }
        }

        return undefined
    }, [])

    return <StoryComponent />
}

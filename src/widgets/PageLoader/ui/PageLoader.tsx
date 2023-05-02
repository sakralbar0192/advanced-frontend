import { type FC } from 'react'
import { Loader } from 'shared/ui/Loader'
import cls from './PageLoader.module.scss'

export const PageLoader: FC = () => {
    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    )
}

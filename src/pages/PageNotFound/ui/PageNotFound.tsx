import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PageNotFound: FC = () => {
    const { t } = useTranslation('notFound')

    return (
        <div>
            {t('Страница не найдена')}
        </div>
    )
}

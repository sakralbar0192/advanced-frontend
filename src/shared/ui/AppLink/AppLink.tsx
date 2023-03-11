import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link className={ClassNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
            {children}
        </Link>
    )
}
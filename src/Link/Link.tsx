import { memo, ReactNode, useCallback } from 'react';
import { cn } from '@bem-react/classname';

import './Link.css';

export interface LinkProps {
    children?: ReactNode;
    href?: string;
    target?: '_blank' | '_self';
    className?: string;
}

const cnLink = cn('Link');
export const Link = memo<LinkProps>(({ className, ...props }) => (
    <a onClick={useCallback(e => e.stopPropagation(), [])} className={cnLink(null, [className])} {...{ target: '_blank', ...props }} />
));
Link.displayName = 'Link';

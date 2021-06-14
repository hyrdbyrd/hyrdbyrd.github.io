import { memo } from 'react';
import { cn } from '@bem-react/classname';

import './App.css';

import { Card } from '../Card/Card';

const cnApp = cn('App');
export const App = memo(() => (
    <div className={cnApp()}>
        <Card />
    </div>
));
App.displayName = 'App';

import { memo, ReactNode, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';

import YLogoRu from './ylogo_ru.svg';
import YLogoEn from './ylogo_en.svg';
import InstLogo from './instlogo.jpg';
import GhLogo from './ghlogo.png';
import VKLogo from './vklogo.svg';

import { Link } from '../Link/Link';

import './Card.css';

const cnCardContent = cn('CardContent');
interface CardContentProps {
    logo: ReactNode;
    name: string;
    job: string;
    bio: string;
}

const contacts = (
    <>
        <div className={cnCardContent('Contact')}>
            <img className={cnCardContent('Logo')} src={VKLogo} />
            <Link href="https://vk.com/hyrdbyrd">hyrdbyrd</Link>
        </div>
        <div className={cnCardContent('Contact')}>
            <img className={cnCardContent('Logo', { type: 'inst' })} src={InstLogo} />
            <Link href="https://www.instagram.com/hyrdbyrd_/">hyrdbyrd_</Link>
        </div>
        <div className={cnCardContent('Contact')}>
            <img className={cnCardContent('Logo')} src={GhLogo} />
            <Link href="https://github.com/hyrdbyrd/">hyrdbyrd</Link>
        </div>
    </>
);

const email = '79789025278@ya.ru';
const phone = '+79789025278';

const CardContent = memo<CardContentProps>(({ logo, name, job, bio }) => (
    <div className={cnCardContent()}>
        <div className={cnCardContent('LeftSide')}>
            <div className={cnCardContent('logo')}>{logo}</div>
        </div>
        <div className={cnCardContent('RightSide')}>
            <div className={cnCardContent('TopSide')}>
                <div className={cnCardContent('Name')}>{name}</div>
                <div className={cnCardContent('Job')}>{job}</div>
            </div>
            <br />
            <div className={cnCardContent('BotSide')}>
                <div className={cnCardContent('Bio')}>{bio}</div>
                <br />
                <div className={cnCardContent('Contacts')}>{contacts}</div>
                <br />
                <Link href={`mailto:${email}`} className={cnCardContent('Email')}>{email}</Link>
                <br />
                <Link href={`tel:${phone}`} className={cnCardContent('Phone')}>{phone}</Link>
            </div>
        </div>
    </div>
));
CardContent.displayName = 'CardContent';

const getOld = (date: string) =>
    ((new Date().getTime() - new Date(date).getTime()) / (24 * 3600 * 365.25 * 1000)) | 0;

const cnCard = cn('Card');
export const Card = memo(() => {
    const [lang, setLang] = useState('eng');
    const onToggleCallback = useCallback(() => setLang(lang === 'eng' ? 'ru' : 'eng'), [lang]);

    return (
        <div onClick={onToggleCallback} className={cnCard({ side: lang })}>
            <div className={cnCard('Content', { side: 'en', })}>
                <CardContent
                    bio={`My name Ilya. I'm ${getOld('01.23.2002')} old. I have been working at Yandex for more than ${getOld('05.29.2019')} years. For more information, go to the PM.`}
                    name={'Ilya Grinenko'}
                    job={'Interface developer'}
                    logo={<img className={cnCard('Logo')} src={YLogoEn} title="Logo" />}
                />
            </div>
            <div className={cnCard('Content', { side: 'ru' })}>
                <CardContent
                    bio={`Меня зовут Илья. Мне ${getOld('01.23.2002')} лет. Я работаю в Яндексе уже больше ${getOld('05.29.2019')} лет. Для большей информации идите в личку.`}
                    name={'Илья Гриненко'}
                    job={'Разработчик интерфейсов'}
                    logo={<img className={cnCard('Logo')} src={YLogoRu} title="Логотип" />}
                />
            </div>
        </div>
    );
});
Card.displayName = 'Card';

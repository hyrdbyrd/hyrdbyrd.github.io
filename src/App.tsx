import React, { Component } from 'react';

import './App.css';

import logo from './images/logo.png';

import githubIcon from './images/github.png';
import telegramIcon from './images/telegram.png';
import vkIcon from './images/vk.png';
import yaMusicIcon from './images/yamusic.png';

import articles from './Blog.json';

import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';

class App extends Component {
    render() {
        return (
            <main className='Main'>
                <Header
                    logo={logo}
                    links={[
                        {title: 'Github', href: 'https://github.com/hyrdbyrd', icon: githubIcon},
                        {title: 'Telegram', href: 'https://t.me/hyrdbyrd', icon: telegramIcon},
                        {title: 'VK', href: 'vk.com/ilya777grin23', icon: vkIcon},
                        {title: 'Yandex Music', href: 'https://music.yandex.ru/feed', icon: yaMusicIcon},
                    ]}
                />
                <Body slice={2} articles={articles} />
            </main>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {cn} from '@bem-react/classname';

import ReactMarkdown from 'react-markdown';

import './Article.css';

export interface IArticleProps {
    title?: string;
    date?: string;
    article: string;
}

export class Article extends Component<IArticleProps> {
    private cnArticle = cn('Article');

    constructor(props: IArticleProps) {
        super(props);
    }

    render() {
        const {cnArticle, props} = this;
        const {title, date, article} = props;

        return (
            <article className={cnArticle()}>
                {(title || date) &&
                    <header className={cnArticle('Header')}>
                        <h1 className={cnArticle('Title')}>{title}</h1>
                        <span className={cnArticle('Date')}>{date}</span>
                    </header>
                }
                <ReactMarkdown className={cnArticle('Text')} source={article} />
            </article>
        );
    }
}
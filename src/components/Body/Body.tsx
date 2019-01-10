import React, {Component} from 'react';
import {cn} from '@bem-react/classname';

import {Article, IArticleProps} from '../Article/Article';
import {Paginator} from '../Paginator/Paginator';

import './Body.css';

interface IBodyProps {
    articles?: IArticleProps[];
    slice?: number;
}

interface IBodyState {
    activePage: number;
}

export class Body extends Component<IBodyProps, IBodyState> {
    private slice: number;
    private cnBody = cn('Body');
    private articles: JSX.Element[][];

    public state = {activePage: 0};

    constructor(props: IBodyProps) {
        super(props);
        this.slice = props.slice || 3;

        this.articles = this.createPageList(props.articles || []);
        this.handler = this.handler.bind(this);
    }

    private createArticleList(articles: IArticleProps[]) {
        return articles.map((props, key) => <Article {...props} key={key} />);
    }

    private createPageList(articles: IArticleProps[]) {
        const {slice} = this;
        const articleItems = this.createArticleList(articles);

        const res = [];
        for (let i = 0; i < articles.length; i += slice) {
            res.push(articleItems.slice(i, i + slice));
        }

        return res;
    }

    private handler(idx: number) {
        this.setState({activePage: idx});
    }

    render() {
        const {articles} = this;

        return (
            <div className={this.cnBody()}>
                {articles[this.state.activePage]}
                <Paginator length={articles.length} handler={this.handler} />
            </div>
        );
    }
}
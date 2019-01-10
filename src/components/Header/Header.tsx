import React, {Component} from 'react';
import {cn} from '@bem-react/classname';

import './Header.css';

interface ILink {
    title: string;
    href: string;
    icon?: string;
}

interface IHeaderProps {
    logo: string;
    links?: ILink[];
}

export class Header extends Component<IHeaderProps> {
    private links: JSX.Element[];

    private cnHeader = cn('Header');
    private cnNav = cn('Nav');

    constructor(props: IHeaderProps) {
        super(props);
        this.links = this.createNavItems(props.links || []);
    }

    private createNavItems(links: ILink[]) {
        const {cnNav, cnHeader, Logo} = this;
        const center = Math.floor(links.length / 2);

        const res: JSX.Element[] = links.map(({href, title, icon}, key) => (
            <a target='_blank' href={href} className={cnNav('Item')} key={key}>
                {icon
                    ? <img title={title} alt={title} className={cnHeader('Icon')} src={icon} />
                    : <span className={cnHeader('Span')}>{title}</span>
                }
            </a>
        ));

        const rightPart = res.splice(center);
        res.push(Logo);

        return res.concat(rightPart);
    }

    private get Logo(): JSX.Element {
        return <img key={-1} src={this.props.logo} className={this.cnHeader('Logo')} />
    }

    render() {
        return (
            <header className={this.cnHeader()}>
                <nav className={this.cnNav()}>
                    {this.links}
                </nav>
            </header>
        );
    }
}
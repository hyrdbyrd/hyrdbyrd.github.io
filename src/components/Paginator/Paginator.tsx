import React, {Component} from 'react';
import {cn} from '@bem-react/classname';

import './Paginator.css';

type HandlerType = (idx: number) => any;

interface IPaginatorProps {
    length: number;
    handler: HandlerType;
}

interface IPaginatorTabProps {
    idx: number;
    active?: boolean;
    handler: HandlerType;
}

export function PaginatorTab({active, handler, idx}: IPaginatorTabProps) {
    return (
        <div
            className={cn('Paginator')('Tab', {active})}
            onClick={() => handler(idx)}
        />
    );
}

export class Paginator extends Component<IPaginatorProps, {activePage: number}> {
    private cnPaginator = cn('Paginator');
    public state = {
        activePage: 0
    }

    constructor(props: IPaginatorProps) {
        super(props);

        this.handler = this.handler.bind(this);
    }

    handler(idx: number) {
        this.props.handler(idx);
        this.setState({activePage: idx});
    }

    render() {
        const {cnPaginator} = this;
        const {length} = this.props;

        const tabs = (new Array(length))
            .fill(0)
            .map((_, idx) => (
                <PaginatorTab
                    key={idx}
                    idx={idx}
                    handler={this.handler}
                    active={idx === this.state.activePage}
                />
            ));

        return (
            <div className={cnPaginator('Tabs')}>
                {length > 1 && tabs}
            </div>
        );
    }
}

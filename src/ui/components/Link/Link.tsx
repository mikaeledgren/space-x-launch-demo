import React, {
  ReactNode,
  ReactText,
  ReactComponentElement,
  ReactPropTypes,
} from 'react';
import { routerStore } from '../../../stores';
import l from '../../../logic/Logger';
import './Link.css';
import classnames, { ClassArray } from 'classnames';

export interface LinkProps {
  children: ReactNode;
  to: string;
  className: string;
  active?: boolean;
}

class Link extends React.Component<LinkProps> {
  render() {
    const classNames: ClassArray = classnames('link', this.props.className, {
      active: this.props.active,
    });

    return (
      <div className="link-container">
        <a className={classNames} href="" onClick={this.clickHandler}>
          {this.props.children}
        </a>
      </div>
    );
  }

  private clickHandler = (): void => {
    l.debug(`A link to ${this.props.to} was clicked!`);
    routerStore.navigate(this.props.to);
  };
}

export default Link;

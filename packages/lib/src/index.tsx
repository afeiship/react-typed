// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, Fragment } from 'react';
import Typed, { TypedOptions } from 'typed.js';

const CLASS_NAME = 'react-typed';
export type ReactTypedProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The tag or component to render.
   */
  as: string | React.ComponentType<any>;
  /**
   * The options for Typed.js.
   */
  options?: TypedOptions;
};

export default class ReactTyped extends Component<ReactTypedProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    as: 'div',
    options: {
      loopCount: 1,
      typeSpeed: 30,
    },
  };

  private readonly rootRef: React.RefObject<HTMLDivElement>;
  private typed: Typed;

  get asProps() {
    const { as, options, className, ...rest } = this.props;
    if (as === Fragment) return rest;
    return {
      'data-component': CLASS_NAME,
      className: cx(CLASS_NAME, className),
      ...rest,
    };
  }

  constructor(props: ReactTypedProps) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    const { options } = this.props;
    this.typed = new Typed(this.rootRef.current, options!);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { children } = this.props;
    const AsTag = this.props.as;
    return (
      <AsTag {...this.asProps}>
        <span ref={this.rootRef}>{children}</span>
      </AsTag>
    );
  }
}

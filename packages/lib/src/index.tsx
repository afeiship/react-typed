// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes } from 'react';
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
   * The options for Typed.js.
   */
  options?: TypedOptions;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactTyped extends Component<ReactTypedProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    options: {
      loopCount: 1,
      typeSpeed: 30,
    },
  };

  private readonly rootRef: React.RefObject<HTMLDivElement>;
  private typed: Typed;

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
    const { className, children, options, ...rest } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <span ref={this.rootRef}>{children}</span>
      </div>
    );
  }
}

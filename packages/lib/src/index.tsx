// import noop from '@jswork/noop';
// import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import Typed, { TypedOptions } from 'typed.js';

const CLASS_NAME = 'react-typed';
const uniqId = () => `${CLASS_NAME}-${Math.random().toString(36).slice(2, 9)}`;
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
};

export default class ReactTyped extends Component<ReactTypedProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    options: {
      loopCount: 1,
      typeSpeed: 30,
    },
  };

  private readonly typedRef: React.RefObject<HTMLSpanElement>;
  private readonly stringsId: string;
  private typed: Typed | null = null;

  constructor(props: ReactTypedProps) {
    super(props);
    this.typedRef = React.createRef();
    this.stringsId = uniqId();
  }

  componentDidMount() {
    const { options } = this.props;
    this.typed = new Typed(this.typedRef.current, {
      ...options,
      stringsElement: `#${this.stringsId}`,
    });
  }

  componentWillUnmount() {
    this.typed?.destroy();
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div id={this.stringsId}>{children}</div>
        <span ref={this.typedRef} />
      </>
    );
  }
}

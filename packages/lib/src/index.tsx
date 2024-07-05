// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes } from 'react';
import Typed, { TypedOptions } from 'typed.js';

const CLASS_NAME = 'react-typed';
// const uuid = () => Math.random().toString(36).substring(2, 9);
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
  typedOptions?: TypedOptions;
} & HTMLAttributes<HTMLSpanElement>;

export default class ReactTyped extends Component<ReactTypedProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  private readonly rootRef: React.RefObject<HTMLSpanElement>;
  private typed: Typed;

  get rootHTMLString(): string {
    if (!this.rootRef.current) return '';
    return this.rootRef.current?.innerHTML;
  }

  constructor(props: ReactTypedProps) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    console.log('html string: ', this.rootHTMLString);
    this.typed = new Typed(this.rootRef.current, {
      // strings: [this.rootHTMLString],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      // loop: false,
      contentType: 'html',
      onComplete: () => {
        this.typed.reset();
      },
      ...this.props.typedOptions,
    });
  }

  render() {
    const { className, children, typedOptions, ...rest } = this.props;
    return (
      <span ref={this.rootRef} data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        {children}
      </span>
    );
  }
}

# react-typed
> React for Typed.js.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-typed
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-typed/dist/style.css";

  // or use sass
  @import "~@jswork/react-typed/dist/style.scss";
  ```
2. import js
  ```js
  import ReactTyped from '@jswork/react-typed';
  import '@jswork/react-typed/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-typed</h1>
        <ReactTyped>
          <p>Typed.js is a <strong>JavaScript</strong> library.</p>
          <p>It <em>types</em> out sentences.</p>
          <p>You can <strong>customize</strong> the typing speed, backspacing speed, and more.</p>
        </ReactTyped>
        <hr />
        <ReactTyped>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </ReactTyped>
        <hr />
        <ReactTyped
          strings={['Hello world, this is react-typed.']}
          typeSpeed={100}
          stringsElement={undefined} />
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-typed/

## license
Code released under [the MIT license](https://github.com/afeiship/react-typed/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-typed
[version-url]: https://npmjs.org/package/@jswork/react-typed

[license-image]: https://img.shields.io/npm/l/@jswork/react-typed
[license-url]: https://github.com/afeiship/react-typed/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-typed
[size-url]: https://github.com/afeiship/react-typed/blob/master/dist/react-typed.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-typed
[download-url]: https://www.npmjs.com/package/@jswork/react-typed

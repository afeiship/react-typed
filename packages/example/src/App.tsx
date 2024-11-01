import ReactTyped from '@jswork/react-typed/src';
import '@jswork/react-typed/src/style.scss';
import { useEffect, useState } from 'react';

function App() {
  const [str, setStr] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setStr(['Hello world, this is react-typed.']);
    }, 1000);
  }, []);
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
      {
        str.length > 0 && <ReactTyped strings={str} typeSpeed={100} />
      }
    </div>
  );
}

export default App;

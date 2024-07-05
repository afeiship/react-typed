import ReactTyped from '@jswork/react-typed/src';
import '@jswork/react-typed/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-typed</h1>
      <ReactTyped options={{ strings: ['Hello, World! Welcome to React Typed!'] }} />
    </div>
  );
}

export default App;

import useSWRInfinite from 'swr/infinite';
import { createRoot } from 'react-dom/client';

const App = () => {
  const { data } = useSWRInfinite(
    (url) => 1,
    () => fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()),
  );

  return <h1>{JSON.stringify(data, null, 3)}</h1>;
};

createRoot(document.body.appendChild(document.createElement('div'))).render(<App />);

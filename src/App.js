import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

const App = () => {
  return (
    <div className="application">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

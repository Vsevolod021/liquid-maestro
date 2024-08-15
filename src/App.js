import { RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react';
import { router } from 'router';

const App = observer(() => {
  return (
    <div className="application">
      <RouterProvider router={router} />
    </div>
  );
});

export default App;

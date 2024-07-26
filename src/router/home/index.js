import Home from 'Pages/Home/Index';

export default {
  path: '/',
  children: [
    {
      index: true,
      element: <Home />
    }
  ]
};

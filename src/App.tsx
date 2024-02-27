import { RouterProvider } from "react-router-dom";
import router from "./Router";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;

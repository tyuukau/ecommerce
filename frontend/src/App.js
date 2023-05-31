
/* `import { Container } from "react-bootstrap";` is importing the `Container` component from the
`react-bootstrap` library. This component is used to create a responsive container that centers the
content and adds padding on the sides. It is being used in the `App` component to wrap around the
`Routes` component and provide a consistent layout for the web application. */
import { Container } from "react-bootstrap";

/* `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";` is importing the
necessary components from the `react-router-dom` library to set up routing in a React application. */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

/**
 * This is a React function that sets up the routing and structure for a web application with a header,
 * main content area, and footer.
 * @returns The `App` component is being returned, which contains a `Router` component that wraps
 * around the `Header`, `main`, and `Footer` components. The `main` component contains a `Container`
 * component that wraps around the `Routes` component. The `Routes` component contains several `Route`
 * components that define the paths and components to be rendered for each path.
 */
function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path='/order/:id' Component={OrderScreen} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

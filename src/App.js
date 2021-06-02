import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import { Container } from "react-bootstrap";
import store from "./store";
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ShippingScreen from "./screen/ShippingScreen";
import PaymentScreen from "./screen/PaymentScreen";
import PlaceorderScreen from "./screen/PlaceorderScreen";
import OrderScreen from "./screen/OrderScreen";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <main style={{ padding: "2rem", minHeight: "80vh" }}>
            <Container>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/profile" component={ProfileScreen} />
              <Route exact path="/payment" component={PaymentScreen} />
              <Route exact path="/placeorder" component={PlaceorderScreen} />
              <Route exact path="/order/:id" component={OrderScreen} />
              <Route exact path="/shipping" component={ShippingScreen} />
              <Route exact path="/product/:id" component={ProductScreen} />
              <Route exact path="/cart/:id?" component={CartScreen} />
            </Container>
          </main>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

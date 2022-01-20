import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import moment from "moment";
import "moment/locale/de";
import "./style/custom.scss";
import PasswordResetComponent from "./pages/resetpassword/PasswordResetComponent";
import HomeComponent from "./pages/home/HomeComponent";
import { store } from "./config/store";
import history from "./config/history";
import LoginContainer from "./pages/login/LoginContainer";
import Navigation from "./landingpage/navigation";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const defaultLocale = "de";

moment.locale([defaultLocale]);

function App() {
  return (
    <Provider store={store}>
      <IntlProvider
        messages={messagesInFrench}
        locale="fr"
        defaultLocale={defaultLocale}
      >
        <Router history={history}>
          <div>
            <Navigation />
            {/* <p>
              <FormattedMessage
                id="myMessage"
                defaultMessage="Today is {ts, date, ::yyyyMMdd}"
                values={{ ts: Date.now() }}
              />
              <br />
              <FormattedNumber value={19} style="currency" currency="EUR" />
            </p>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/resetpassword">Passwort zurücksetzen</Link>
                </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/login" element={<LoginContainer />} />
              <Route
                path="/resetpassword"
                element={<PasswordResetComponent />}
              />
              <Route path="/" element={<HomeComponent />} />
            </Routes>
          </div>
        </Router>
      </IntlProvider>
    </Provider>
  );
}

export default App;

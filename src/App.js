import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import moment from "moment";
import "./style/custom.scss";
import PasswordResetComponent from "./components/PasswordResetComponent";
import HomeComponent from "./components/HomeComponent";
import { store } from "./config/store";
import history from "./config/history";
import LoginContainer from "./containers/LoginContainer";

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
            <p>
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
            </nav>

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

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style/custom.scss";
import LoginComponent from "./components/LoginComponent";
import PasswordResetComponent from "./components/PasswordResetComponent";
import HomeComponent from "./components/HomeComponent";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function App() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <Router>
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
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/resetpassword" element={<PasswordResetComponent />} />
            <Route path="/" element={<HomeComponent />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;

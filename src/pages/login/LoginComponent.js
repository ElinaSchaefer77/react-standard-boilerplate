import React from "react";
import { FormattedMessage } from "react-intl";

export default function LoginComponent({ onSubmit, isFetching, loginError }) {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {!isFetching ? (
              <div className="card-group">
                <div className="card p-4 shadow login-left">
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      <h1>
                        <FormattedMessage
                          id="login.form.title"
                          defaultMessage="Login"
                        />
                      </h1>
                      <p>
                        <FormattedMessage
                          id="login.form.text"
                          defaultMessage="Enter your login data to log in to your account."
                        />
                      </p>
                      <div className="input-group mb-3">
                        <span className="input-group-text">ICON TODO</span>

                        <input
                          name="userName"
                          type="text"
                          placeholder="Benutzername"
                          noLabel
                          autoComplete="bauhofweb-username"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-text">ICON TODO</span>
                        <input
                          name="password"
                          type="password"
                          noLabel
                          placeholder="Passwort"
                          autoComplete="bauhofweb-password"
                        />
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          {loginError ? (
                            <div className="alert alert-primary" role="alert">
                              A simple primary alert—check it out!
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="button"
                            className="btn btn-primary px-4"
                            type="submit"
                          >
                            <FormattedMessage
                              id="login.form.button.login"
                              defaultMessage="Login"
                            />
                          </button>
                        </div>
                        <div className="col-md-6 text-right">
                          <button
                            type="button"
                            className="btn btn-link px-0"
                            // onClick={() => history.push("/resetP assword")}
                          >
                            <FormattedMessage
                              id="login.form.button.forgotpassword"
                              defaultMessage="Forgot password?"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="text-white bg-primary py-5 d-md-down-none login-right"
                  style={{ width: "44%" }}
                >
                  <div className="card-body text-center">
                    <div>
                      <h2>
                        <FormattedMessage
                          id="login.form.title.register"
                          defaultMessage="Register"
                        />
                      </h2>
                      <p>
                        <FormattedMessage
                          id="login.form.text.register"
                          defaultMessage="TODO"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="p-4">
                  <div className="card-body text-center">
                    <div>
                      {/* <HashLoader clasName="primary" /> */}
                      <p>
                        <FormattedMessage
                          id="loading"
                          defaultMessage="Loading..."
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

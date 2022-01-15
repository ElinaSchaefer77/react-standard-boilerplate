import React from "react";

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
                      <h1>Titel</h1>
                      <p>Text</p>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Benutzername</span>

                        <input
                          name="userName"
                          type="text"
                          placeholder="Benutzername"
                          noLabel
                          autoComplete="bauhofweb-username"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-text">Passwort</span>
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
                            Login
                          </button>
                        </div>
                        <div className="col-md-6 text-right">
                          <button
                            type="button"
                            className="btn btn-link px-0"
                            // onClick={() => history.push("/resetP assword")}
                          >
                            Passwort vergessen?
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
                      <h2>Titel</h2>
                      <p>text</p>
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
                      <p>Loading</p>
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

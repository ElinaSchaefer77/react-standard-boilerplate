import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import { fetchRequestLogin } from "../actions/loginActions";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (userName, password) =>
    dispatch(fetchRequestLogin(userName, password)),
});

const mapStateToProps = (state) => ({
  loginError: state.reducer.loginReducer.error,
  isFetching: state.reducer.loginReducer.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

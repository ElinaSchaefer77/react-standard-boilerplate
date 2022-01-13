import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

test("renders the LoginContainer", () => {
  render(<LoginComponent />);
  const container = screen.getByText(/Login/i);
  expect(container).toBeInTheDocument();
});

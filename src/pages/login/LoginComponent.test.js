import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

test("renders learn react link", () => {
  render(<LoginComponent />);
  const buttonElement = screen.getByText(/Login/i);
  expect(buttonElement).toBeInTheDocument();
});

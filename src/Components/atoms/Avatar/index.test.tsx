import { render, screen } from "@testing-library/react";
import CustomAvatar from ".";

it("renders a avatar", () => {
  render(<CustomAvatar />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
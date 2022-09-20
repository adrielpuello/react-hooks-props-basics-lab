import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import user from "../data/user";
import About from "../components/About";

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  expect(screen.queryByText("I made this")).toBeInTheDocument();
});


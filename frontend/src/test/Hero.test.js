import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Hero from "../landingPage/home/Hero";

//Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders Signup Button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", {
  name: /sign up for free/i,
});

expect(signupButton).toBeInTheDocument();
expect(signupButton).toHaveClass("btn-primary");
  });

});
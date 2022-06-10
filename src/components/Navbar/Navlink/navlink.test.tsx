import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navlink from ".";

describe("Navlink test", () => {
  test("Links should render correctly", () => {
    render(
      <BrowserRouter>
        <Navlink />
      </BrowserRouter>
    );
    expect(screen.getByText("Beranda")).toBeInTheDocument();
    expect(screen.getByText("Kategori")).toBeInTheDocument();
    expect(screen.getByText("Tentang Kami")).toBeInTheDocument();
  });

  test("Links should be clickable", () => {
    render(
      <BrowserRouter>
        <Navlink />
      </BrowserRouter>
    );
    const categoryLink = screen.getByText("Kategori");
    expect(categoryLink.getAttribute("href")).toBe("/category");
    userEvent.click(categoryLink);
    expect(global.window.location.href).toContain("/category");
  });
});

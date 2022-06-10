import { render, screen } from "@testing-library/react";
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
});

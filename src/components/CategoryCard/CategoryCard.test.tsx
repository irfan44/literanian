import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import CategoryCard from ".";

describe("CategoryCard Test", () => {
  test("CategoryCard should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CategoryCard
            title="Category Title"
            slug="category-title"
            image="/images/hero.png"
            subtitle="Hello testing"
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByAltText("Category Title")).toBeInTheDocument();
    expect(screen.getByText("Category Title")).toBeInTheDocument();
    expect(screen.getByText("Hello testing")).toBeInTheDocument();
    expect(screen.getByText("Lihat")).toBeInTheDocument();
  });
});

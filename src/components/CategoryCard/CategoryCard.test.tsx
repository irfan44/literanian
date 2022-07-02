import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("ArticleCard should redirect to login page when clicked without login", () => {
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
    const title = screen.getByText("Category Title");
    expect(title.getAttribute("href")).toBe("/category/category-title");
    userEvent.click(title);
    expect(global.window.location.href).toContain("/category/category-title");
  });
});

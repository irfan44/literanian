import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import ArticleCard from ".";

describe("ArticleCard Test", () => {
  test("ArticleCard should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ArticleCard
            title="Article Title"
            slug="article-title"
            category="pendidikan"
            coverImage={{ url: "/images/hero.png" }}
            excerpt="Hello testing"
            articleType="basic"
            createdAt="2022-06-23T07:24:50.038535+00:00"
            updatedAt="2022-06-23T07:24:50.038535+00:00"
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Article Title")).toBeInTheDocument();
    expect(screen.getByText("Hello testing")).toBeInTheDocument();
    expect(screen.getByText("pendidikan")).toBeInTheDocument();
    expect(screen.getByText("Jun 23, 2022")).toBeInTheDocument();
  });

  test("ArticleCard should render correctly with if articleType = premium", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ArticleCard
            title="Article Title"
            slug="article-title"
            category="pendidikan"
            coverImage={{ url: "/images/hero.png" }}
            excerpt="Hello testing"
            articleType="premium"
            createdAt="2022-06-23T07:24:50.038535+00:00"
            updatedAt="2022-06-23T07:24:50.038535+00:00"
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Article Title")).toBeInTheDocument();
    expect(screen.getByText("Hello testing")).toBeInTheDocument();
    expect(screen.getByText("pendidikan")).toBeInTheDocument();
    expect(screen.getByText("Jun 23, 2022")).toBeInTheDocument();
    expect(screen.getByText("Premium")).toBeInTheDocument();
  });

  test("ArticleCard should redirect to login page when clicked without login", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ArticleCard
            title="Article Title"
            slug="article-title"
            category="pendidikan"
            coverImage={{ url: "/images/hero.png" }}
            excerpt="Hello testing"
            articleType="premium"
            createdAt="2022-06-23T07:24:50.038535+00:00"
            updatedAt="2022-06-23T07:24:50.038535+00:00"
          />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByText("Article Title");
    expect(title.getAttribute("href")).toBe("/login");
    userEvent.click(title);
    expect(global.window.location.href).toContain("/login");
  });
});

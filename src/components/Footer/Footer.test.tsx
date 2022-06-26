import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import Footer from ".";

describe("Footer Test", () => {
  test("Footer should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        "Explorasi berbagai artikel menarik dan kembangkan pengetahuanmu. Kumpulkan poin untuk mendapatkan akses ke artikel premium"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("© 2022 (nama brand). All right reserved")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Dibuat dengan ❤️ oleh tim FE-ED6")
    ).toBeInTheDocument();
  });
});

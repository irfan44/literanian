import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import SocialMedia from ".";

describe("SocialMedia Test", () => {
    test("SocialMedia should render correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <SocialMedia />
                </Provider>
            </BrowserRouter>
        );
        expect(
            screen.getByText(
                "Media sosial :"
            )
        ).toBeInTheDocument();
    });
});
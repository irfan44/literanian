import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import CreditsCard from ".";

describe("CreditsCard Test", () => {
    test("CreditsCard should render correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CreditsCard />
                </Provider>
            </BrowserRouter>
        );
        expect(
            screen.getByText(
                "Kredit"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText("Foto oleh berbagai fotografer di")
        ).toBeInTheDocument();
        expect(
            screen.getByText("unsplash.com")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Ilustrasi di desain oleh")
        ).toBeInTheDocument();
        expect(
            screen.getByText("freepik")
        ).toBeInTheDocument();
    });
});
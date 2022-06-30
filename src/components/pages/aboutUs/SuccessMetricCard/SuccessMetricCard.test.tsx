import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import SuccessMetricCard from ".";

describe("SuccessMetricCard Test", () => {
    test("SuccessMetricCard should render correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <SuccessMetricCard />
                </Provider>
            </BrowserRouter>
        );
        expect(
            screen.getByText(
                "Ukuran Kesuksesan"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText("Kriteria kesuksesan dari produk :")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Mampu mencapai target kami dalam meningkatkan minat baca 10% dari minimal 100 pengguna menggunakan metode yang ditentukan untuk mengukur keberhasilan")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Mampu membuat website literasi digital sesuai spesifikasi yang ditentukan")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Mampu memenuhi tujuan dan target output produk kami")
        ).toBeInTheDocument();
    });
});
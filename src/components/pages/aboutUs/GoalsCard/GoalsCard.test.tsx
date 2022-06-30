import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import GoalsCard from ".";

describe("GoalsCard Test", () => {
    test("GoalsCard should render correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <GoalsCard />
                </Provider>
            </BrowserRouter>
        );
        expect(
            screen.getByText(
                "Tujuan Kami"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText("Tujuan pembuatan produk :")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Meningkatkan minat baca 10% pengguna dari minimal 100 pengguna berdasarkan hasil survei singkat dengan pertanyaan ya/tidak")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Menampilkan berbagai artikel faktual dan menarik serta menambah pengetahuan pengguna.")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Meningkatkan frekuensi membaca pengguna.")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Meningkatkan ragam bacaan literasi digital yang dibaca pengguna.")
        ).toBeInTheDocument();
    });
});
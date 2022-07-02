import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import Quiz from ".";

const quiz = [
  {
    id: "1",
    question: "Dimanakah ibu kota Indonesia?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correctAnswer: "Jakarta",
  },
  {
    id: "2",
    question: "Dimanakah ibu kota Jawa Barat?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correctAnswer: "Bandung",
  },
  {
    id: "3",
    question: "Selain Jakarta, manakah kota yang termasuk daerah istimewa?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correctAnswer: "Yogyakarta",
  },
  {
    id: "4",
    question: "Dimanakah pusat perekonomian Indonesia?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correctAnswer: "Jakarta",
  },
  {
    id: "5",
    question: "Kota apa yang biasa disebut dengan kota kembang?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correctAnswer: "Bandung",
  },
];

describe("Quiz Test", () => {
  test("Quiz should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Quiz quiz={quiz} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Kuis")).toBeInTheDocument();
    expect(
      screen.getByText("Dimanakah ibu kota Indonesia?")
    ).toBeInTheDocument();
    expect(screen.getByText("Jakarta")).toBeInTheDocument();
    expect(screen.getByText("Bandung")).toBeInTheDocument();
    expect(screen.getByText("Surabaya")).toBeInTheDocument();
    expect(screen.getByText("Yogyakarta")).toBeInTheDocument();
  });

  test("Quiz should move to next question after answer click & detect correct answer", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Quiz quiz={quiz} />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByText("Dimanakah ibu kota Indonesia?")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Jakarta"));
    expect(
      screen.getByText("Dimanakah ibu kota Jawa Barat?")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Bandung"));
    expect(
      screen.getByText(
        "Selain Jakarta, manakah kota yang termasuk daerah istimewa?"
      )
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Yogyakarta"));
    expect(
      screen.getByText("Dimanakah pusat perekonomian Indonesia?")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Jakarta"));
    expect(
      screen.getByText("Kota apa yang biasa disebut dengan kota kembang?")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Bandung"));
    expect(screen.getByText("Jumlah jawaban benar: 5")).toBeInTheDocument();
  });
});

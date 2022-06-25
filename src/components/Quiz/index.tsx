import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setNewPoints } from "redux/reducer/userStatusReducer";
import { handleAddPoints } from "utils/handleUser";

const Quiz = () => {
  const { uid } = useAppSelector((state) => state.userProfile);
  const { points } = useAppSelector((state) => state.userStatus);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [claimed, setClaimed] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useAppDispatch();

  const quiz = [
    {
      id: 1,
      question: "What is the capital of Indonesia?",
      answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
      correctAnswer: "Jakarta",
    },
    {
      id: 2,
      question: "What is the capital of Indonesia?",
      answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
      correctAnswer: "Jakarta",
    },
  ];

  const handleAnswerButtonClick = (answer: string) => {
    const nextQuestion = currentQuestion + 1;

    if (answer === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleClaimPointsButtonClick = async () => {
    if (uid !== null && points !== null) {
      const newPoints = await handleAddPoints(uid, points, score);
      dispatch(setNewPoints(newPoints));
      setClaimed(true);
    }
  };

  return (
    <Box bg="#2447F9" color="white" px="5" py="10" borderRadius="2xl">
      <Heading size="xl" mb="4">
        Quiz
      </Heading>
      {showResult ? (
        claimed ? (
          <Box>
            <Text>Selamat, kamu mendapatkan {score} poin 🎉</Text>
          </Box>
        ) : (
          <Stack>
            <Text>Jumlah jawaban benar: {score}</Text>
            <Button onClick={handleClaimPointsButtonClick}>Klaim Poin</Button>
          </Stack>
        )
      ) : (
        <Box>
          <Text mb="2">{quiz[currentQuestion].question}</Text>
          <HStack spacing="4">
            {quiz[currentQuestion].answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {answer}
              </Button>
            ))}
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;

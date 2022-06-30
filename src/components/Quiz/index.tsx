import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setNewPoints } from "redux/reducer/userStatusReducer";
import { Quiz as QuizType } from "types/article";
import { handleAddPoints } from "utils/handleUser";

const Quiz = ({ quiz }: QuizType) => {
  const { uid } = useAppSelector((state) => state.userProfile);
  const { points } = useAppSelector((state) => state.userStatus);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [claimed, setClaimed] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useAppDispatch();
  const toast = useToast();

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
      toast({
        title: `Poin sudah di klaim! Kamu mendapat ${score} poin 🎉`,
        position: "top-right",
        status: "success",
        duration: 2000,
      });
      setClaimed(true);
    }
  };

  return (
    <Box bg="#2447F9" color="white" px="5" py="10" borderRadius="2xl" mt="16">
      <Heading size="xl" mb="6">
        Kuis
      </Heading>
      {showResult ? (
        claimed ? (
          <Box>
            <Text>Selamat, kamu mendapatkan {score} poin 🎉</Text>
          </Box>
        ) : (
          <Stack gap="6">
            <Text>Jumlah jawaban benar: {score}</Text>
            <Button onClick={handleClaimPointsButtonClick}>Klaim Poin</Button>
          </Stack>
        )
      ) : (
        <Box>
          <Text>{quiz[currentQuestion].question}</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing="6" my="6">
            {quiz[currentQuestion].answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {answer}
              </Button>
            ))}
          </SimpleGrid>
          <Text>
            Pertanyaan {currentQuestion + 1}/{quiz.length}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;

import { useGetUserEnergyAnalysisQuestions } from "@/api/hooks/analysis";
import { Button } from "@/components/button/button";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import InputBox from "@/components/input/input";
import RadioButton from "@/components/radio/radio";

const UserEnergyAnalysis = () => {
  const { data } = useGetUserEnergyAnalysisQuestions();
  const questions = data?.data.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0); // 1 for forward, -1 for backward

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setDirection(1);
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction === 1 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction === 1 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <div className="relative w-full min-h-40 h-full overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={questions[currentQuestionIndex]?.question}
            className="absolute w-full h-full"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-medium">
              {currentQuestionIndex + 1}.{" "}
              {questions[currentQuestionIndex]?.question}
            </div>

            <div className="my-4">
              {questions[currentQuestionIndex]?.type === "input" ? (
                <InputBox name="question" register={() => {}} />
              ) : questions[currentQuestionIndex]?.type === "radio" ? (
                <RadioButton
                  className="w-full flex items-center gap-4 flex-wrap"
                  options={questions[currentQuestionIndex]?.options?.map(
                    (op) => ({ label: op, value: op })
                  )}
                  name="o"
                ></RadioButton>
              ) : (
                <></>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex mt-4 space-x-4">
        <Button
          label="Previous"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        />
        <Button
          label="Next"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        />
      </div>
    </div>
  );
};

export default UserEnergyAnalysis;

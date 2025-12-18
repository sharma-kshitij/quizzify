"use client";

import { H2Title, H4Text } from "@/components/Typography/Typography";
import { CirclePlus, Currency, Pencil, Trash, Trash2 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { checkArrayOfEmptyStrings, removeFromArray } from "@/components/utils";

const testQuestions = [
  {
    id: 1,
    question:
      "What is the chemical formula for table salt and which ions make it up?",
    options: [
      "NaCl — sodium (Na+) and chloride (Cl-) ions",
      "KCl — potassium (K+) and chloride (Cl-) ions",
      "Na2SO4 — sodium (Na+) and sulfate (SO4²-) ions",
      "CaCl2 — calcium (Ca²+) and chloride (Cl-) ions",
    ],
    answer: [0],
  },
  {
    id: 2,
    question:
      "Describe how natural selection leads to evolution and give one real-world example.",
    options: [
      "Individuals adapt during their lifetime and pass those changes to offspring",
      "Organisms with beneficial heritable traits survive and reproduce more, changing allele frequencies (e.g., antibiotic-resistant bacteria)",
      "All mutations are beneficial and immediately create new species",
      "Evolution always produces more complex organisms over time",
    ],
    answer: [1],
  },
  {
    id: 3,
    question:
      "Explain the difference between velocity and acceleration, including the units for each.",
    options: [
      "Velocity is speed with direction (m/s); acceleration is change in velocity per time (m/s²)",
      "Velocity is rate of change of acceleration (m/s²); acceleration is change in position (m/s)",
      "Velocity is a scalar measured in m/s; acceleration is a vector measured in m/s²",
      "Velocity is distance/time (m); acceleration is speed/time (m/s³)",
    ],
    answer: [0],
  },
  {
    id: 4,
    question:
      "State Newton's second law of motion and provide a practical example that demonstrates it.",
    options: [
      "F = ma; pushing an empty shopping cart causes a greater acceleration than pushing a full one with the same force",
      "For every action there is an equal and opposite reaction",
      "An object at rest stays at rest unless acted on by a net force",
      "Energy cannot be created or destroyed in a closed system",
    ],
    answer: [0],
  },
  {
    id: 5,
    question:
      "What is photosynthesis? Provide the overall chemical equation and name the organelle where it occurs.",
    options: [
      "6CO2 + 6H2O → C6H12O6 + 6O2; chloroplast",
      "C6H12O6 + 6O2 → 6CO2 + 6H2O; mitochondrion",
      "CO2 + H2O → O2 + C; cytoplasm",
      "6O2 + C6H12O6 → 6CO2 + 6H2O; nucleus",
    ],
    answer: [0],
  },
];

interface questionType {
  id: number;
  question: string;
  options: string[];
  answer: number[];
}

const page = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [currentQues, setCurrentQuestion] = useState<questionType>({
    id: 1,
    question: "",
    options: ["", "", "", ""],
    answer: [],
  });
  const [numberOfOptions, setNumberOfOptions] = useState(4);

  const [showErrors, setShowErrors] = useState({
    noQuestion: false,
    noOptions: false,
    noAnswers: false,
  });

  const deleteQuestion = (question: questionType) => {
    setQuestions(
      questions.filter((ques) => {
        return ques.id != question.id;
      })
    );
  };

  const handleQuestionsave = (question: questionType) => {
    const errors = {
      noQuestion: false,
      noOptions: false,
      noAnswers: false,
    };

    if (question.question.length === 0) {
      errors.noQuestion = true;
    } else {
      errors.noQuestion = false;
    }

    if (question.answer.length === 0) {
      errors.noAnswers = true;
    } else {
      errors.noAnswers = false;
    }

    if (checkArrayOfEmptyStrings(question.options)) {
      errors.noOptions = true;
    } else {
      errors.noOptions = false;
    }

    setShowErrors(errors);
  };

  useEffect(() => {
    console.log(showErrors);
  }, [showErrors]);

  return (
    <div>
      <section>
        <input
          type="text"
          className="text-6xl font-extrabold w-full text-center outline-none border-none "
          value={quizName}
          onChange={(e) => {
            setQuizName(e.target.value);
          }}
          placeholder="Enter Quiz Name"
        />
      </section>
      <section className="flex justify-center m-5 gap-5">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="px-10 py-5 cursor-pointer">
              <H4Text text="Add a question" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="overflow-auto">
              <DrawerTitle>
                {showErrors.noQuestion && (
                  <p className="text-red-500">Please enter a question.</p>
                )}
                <input
                  type="text"
                  className="text-4xl font-bold w-full text-center outline-none border-none "
                  value={currentQues.question}
                  onChange={(e) => {
                    setCurrentQuestion({
                      ...currentQues,
                      question: e.target.value,
                    });
                  }}
                  placeholder="Enter a question"
                />
              </DrawerTitle>
              {showErrors.noOptions && (
                <p className="text-red-500 font-extrabold">
                  Please enter at least one option
                </p>
              )}
              {currentQues.options.map((_, ind) => {
                return (
                  <div key={ind} className="flex items-center align-center">
                    <H4Text text={`${String.fromCharCode(65 + ind)})`} />
                    <input
                      type="text"
                      className="text-2xl w-full text-center border-1 my-1 mx-5 "
                      value={currentQues.options[ind]}
                      onChange={(e) => {
                        setCurrentQuestion({
                          ...currentQues,
                          options: currentQues.options.map((opt, index) => {
                            if (index === ind) {
                              return e.target.value;
                            } else {
                              return opt;
                            }
                          }),
                        });
                      }}
                      placeholder={`Enter option ${String.fromCharCode(
                        65 + ind
                      )}`}
                    />

                    <Trash
                      onClick={() =>
                        setCurrentQuestion({
                          ...currentQues,
                          options: removeFromArray(
                            currentQues.options,
                            currentQues.options[ind]
                          ),
                        })
                      }
                    />
                  </div>
                );
              })}

              <H4Text text="Mark Correct Answers: " />
              {showErrors.noAnswers && (
                <p className="text-red-500 font-extrabold">
                  Please mark atleast one option as correct.
                </p>
              )}
              <div className={`grid grid-cols-4`}>
                {currentQues.options.map((opt, ind) => {
                  return (
                    <Button
                      variant={"outline"}
                      key={ind}
                      className={`m-1 ${
                        currentQues.answer.includes(ind)
                          ? "bg-green-500 text-white"
                          : ""
                      }`}
                      onClick={() => {
                        if (currentQues.answer.includes(ind)) {
                          setCurrentQuestion({
                            ...currentQues,
                            answer: removeFromArray(currentQues.answer, ind),
                          });
                        } else {
                          setCurrentQuestion({
                            ...currentQues,
                            answer: [...currentQues.answer, ind],
                          });
                        }
                      }}
                    >
                      {String.fromCharCode(ind + 65)}
                    </Button>
                  );
                })}
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <Button
                onClick={() =>
                  setCurrentQuestion({
                    ...currentQues,
                    options: [...currentQues.options, ""],
                  })
                }
              >
                Add Option
              </Button>
              <div className="w-full grid grid-cols-2 gap-5">
                <Button
                  onClick={() => {
                    handleQuestionsave(currentQues);
                  }}
                >
                  Save
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Button className="px-10 py-5 cursor-pointer">
          <H4Text text="Save" />
        </Button>
      </section>
      <section>
        <AnimatePresence>
          {questions.map((ques) => {
            return (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: 100,
                  opacity: 0,
                }}
                layout
                key={ques.id}
                className="grid grid-cols-[90%_10%] p-10 "
              >
                <div>
                  <H2Title text={ques.question} />
                  {ques.options.map((opt, index) => {
                    return (
                      <H4Text
                        key={index}
                        text={`${String.fromCharCode(index + 65)}) ${opt}`}
                        className={`my-3 p-2 ${
                          ques.answer.includes(index)
                            ? " border-2 border-green-400 "
                            : ""
                        } `}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Pencil className="m-5 cursor-pointer" />
                  <Trash
                    className="m-5 cursor-pointer"
                    onClick={() => deleteQuestion(ques)}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
      <section></section>
    </div>
  );
};

export default page;

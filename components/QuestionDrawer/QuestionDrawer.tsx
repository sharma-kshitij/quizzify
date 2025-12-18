import React, { ReactNode, useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { H4Text } from "../Typography/Typography";
import { Trash } from "lucide-react";
import { questionType } from "../types";
import {
  checkArrayOfEmptyStrings,
  checkErrorArr,
  removeFromArray,
} from "../utils";

interface propTypes {
  children: ReactNode;
  initialQuestion: questionType;
  submitQuestion: (question: questionType, noToast: boolean) => void;
}

const QuestionDrawer = ({
  children,
  initialQuestion,
  submitQuestion,
}: propTypes) => {
  const [showErrors, setShowErrors] = useState({
    noQuestion: false,
    noOptions: false,
    noAnswers: false,
  });

  const [showDrawer, setShowDrawer] = useState(false);

  const [currentQues, setCurrentQuestion] =
    useState<questionType>(initialQuestion);

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

    if (checkErrorArr(Object.values(errors))) {
      submitQuestion(question, false);
      setShowDrawer(false);
    }
  };

  return (
    <Drawer open={showDrawer} onOpenChange={setShowDrawer}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
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
                  placeholder={`Enter option ${String.fromCharCode(65 + ind)}`}
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
  );
};

export default QuestionDrawer;

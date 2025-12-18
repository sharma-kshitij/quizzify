"use client";

import { H2Title, H4Text } from "@/components/Typography/Typography";
import { Pencil, Trash } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { questionType } from "@/components/types";
import QuestionDrawer from "@/components/QuestionDrawer/QuestionDrawer";
import { testQuestions } from "@/components/utils";

const initialQuestion = {
  id: 1,
  question: "",
  options: ["", "", "", ""],
  answer: [],
};

const page = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState<questionType[]>(testQuestions);

  const deleteQuestion = async (question: questionType) => {
    setQuestions(
      questions.filter((ques) => {
        return ques.id != question.id;
      })
    );
    toast.info("Question Deleted", {
      classNames: {
        title: "text-lg",
        actionButton: "p-5 w-20 flex items-center justify-center !text-lg",
      },
      position: "top-center",
      action: {
        label: "Undo",
        onClick: () =>
          setQuestions((oldvalue) => {
            return [...oldvalue, question].sort((a, b) => {
              return a.id - b.id;
            });
          }),
      },
    });
  };

  const addNewQuestion = (question: questionType, noToast: boolean) => {
    setQuestions((oldvalue) => {
      return [...oldvalue, { ...question, id: Date.now() }].sort((a, b) => {
        return a.id - b.id;
      });
    });
    if (!noToast) {
      toast.success("Question Added", {
        position: "top-center",
        classNames: {
          title: "text-lg",
          actionButton: "p-5 w-20 flex items-center justify-center !text-lg",
        },
      });
    }
  };

  const editQuestion = (question: questionType, noToast: boolean) => {
    setQuestions(
      questions.map((ques) => {
        if (ques.id === question.id) {
          if (ques === question) {
            return ques;
          } else {
            if (!noToast) {
              toast.success("Question Updated", {
                position: "top-center",
                classNames: {
                  title: "text-lg",
                  actionButton:
                    "p-5 w-20 flex items-center justify-center !text-lg",
                },
              });
            }
            return question;
          }
        } else return ques;
      })
    );
  };

  return (
    <div>
      <section>
        <input
          type="text"
          className="text-6xl font-extrabold w-full text-center outline-none border-none mt-5"
          value={quizName}
          onChange={(e) => {
            setQuizName(e.target.value);
          }}
          placeholder="Enter Quiz Name"
        />
      </section>
      <section className="flex justify-center m-5 gap-5">
        <QuestionDrawer
          initialQuestion={initialQuestion}
          submitQuestion={addNewQuestion}
        >
          <Button className="px-10 py-5 cursor-pointer">
            <H4Text text="Add a question" />
          </Button>
        </QuestionDrawer>
        <Button
          className="px-10 py-5 cursor-pointer"
          onClick={() => console.log(questions)}
        >
          <H4Text text="Save" />
        </Button>
      </section>
      <section>
        <AnimatePresence>
          {questions.map((ques, ind) => {
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
                className="grid md:grid-cols-[3%_90%_10%] grid-cols-[8%_90%_10%] p-10 "
              >
                <H2Title text={`${(ind + 1).toString()}.`} />
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
                  <QuestionDrawer
                    initialQuestion={ques}
                    submitQuestion={editQuestion}
                  >
                    <Pencil className="m-5 cursor-pointer" />
                  </QuestionDrawer>
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

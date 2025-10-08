"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { quesNuAtom, topicAtom } from "./utils/state";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function Home() {
  const [topic, setTopic] = useAtom(topicAtom);
  const [quesNu, setQuesNu] = useAtom(quesNuAtom);
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Topic: " + topic);
    console.log("Number of questions: " + quesNu);

    router.push("/pages/quiz");
  };

  return (
    <div className={styles.container}>
      <div className="flex flex-col ">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance m-2">
          Quizzify!
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight m-2">
          Your quiz making companion
        </h3>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Enter the quiz details</CardTitle>
          <CardDescription>
            And let our powerful LLM work its magic!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={() => console.log(quesNu)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  type="text"
                  placeholder="India in Cricket"
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="quesNu">Number of questions</Label>
                </div>
                <Select onValueChange={setQuesNu}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (item) => {
                          return (
                            <SelectItem key={item} value={item.toString()}>
                              {item}
                            </SelectItem>
                          );
                        }
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={() => handleSubmit()}
            type="submit"
            className="w-full"
          >
            GO!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

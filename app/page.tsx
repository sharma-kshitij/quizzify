"use client";

import { H1Title, H2Title, H4Text } from "@/components/Typography/Typography";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8">
      <HeroSection />
      <BannerSection />
      <HowItWorks />
      <CreateQuizSection />
    </div>
  );
}

const AnimatedPhone = () => {
  return (
    <div className="relative w-180 top-0 left-0">
      <Image
        className="absolute"
        width={700}
        height={700}
        src="/images/phone.svg"
        alt="phone"
      />
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: 0.3 },
        }}
        className=" absolute w-45 h-20 top-50 left-65 border-2 border-black rounded-md"
      ></motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: 0.8 },
        }}
        className="absolute w-20 h-10 top-80 left-90 border-2 border-black rounded-md"
      ></motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.8,
          },
        }}
        className="absolute w-20 h-10 top-80 left-65 border-2 border-black rounded-md"
      ></motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 1.2,
          },
        }}
        className="absolute w-20 h-10 top-95 left-90 border-2 border-black rounded-md"
      ></motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1.2,
          transition: {
            duration: 0.3,
            delay: 1.2,
            scale: {
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            },
          },
        }}
        className="absolute w-20 h-10 top-95 left-65 border-2 border-black rounded-lg"
      ></motion.div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="md:flex ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        className="w-full md:m-10 md:p-10 md:border-1"
      >
        <H1Title
          className=""
          text="Create, Assign, and Analyze Quizzes — All in One Place"
        />
        <H4Text
          className="mt-5"
          text="A modern quiz management platform built for teachers and students.
            Create interactive quizzes, track performance, and save hours of
            grading."
        />
        <Button className="mt-5" variant="default">
          <Link href="/createQuiz">
            <H4Text className="p-2" text="Get Started" />
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        className="w-full h-screen hidden md:block"
      >
        <AnimatedPhone />
      </motion.div>
    </section>
  );
};

const BannerSection = () => {
  const steps = [
    {
      title: "Easy Quiz Creation",
      text: "Create quizzes in minutes and get instant insights into student performance.",
    },
    {
      title: "Auto Quiz Grading",
      text: "Create quizzes in minutes and get instant insights into student performance.",
    },
    {
      title: "Real-time Analytics",
      text: "Create quizzes in minutes and get instant insights into student performance.",
    },
  ];

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      className="flex flex-col md:flex-row mt-20 items-center w-full bg-black/5 overflow-hidden"
    >
      <H1Title
        className="m-20"
        text="Everything you need to run better assesments"
      />

      {steps.map((step, ind) => {
        return (
          <motion.div
            key={ind}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: ind * 0.1 },
            }}
          >
            <div className="flex items-center">
              <H2Title className="m-10" text={step.title} />
              <CircleCheck size={64} className="m-10" />
            </div>
            <H4Text className="m-10 mt-0" text={step.text} />
          </motion.div>
        );
      })}
    </motion.section>
  );
};

const HowItWorks = () => {
  return (
    <section className="flex flex-col mt-20 items-center justify-center">
      <H1Title text="How it works" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full m-20">
        <div className="flex flex-col items-center">
          <H2Title text="1." />
          <H4Text className="m-10" text="Create a quiz" />
        </div>
        <div className="flex flex-col items-center">
          <H2Title text="2." />
          <H4Text className="m-10" text="Share with Students" />
        </div>
        <div className="flex flex-col items-center">
          <H2Title text="3." />
          <H4Text className="m-10" text="Analyze Results" />
        </div>
      </div>
    </section>
  );
};

const CreateQuizSection = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: -100, opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col items-center justify-center w-full m-20 bg-black text-white"
    >
      <H1Title className="m-20" text="Ready to make assesments effortless?" />
      <Button className="py-10 px-5 mb-20" variant="secondary">
        <Link href="/createQuiz">
          <H4Text text="Create your first quiz" />
        </Link>
      </Button>
    </motion.section>
  );
};

"use client";

import axios from "axios";
import { useEffect } from "react";

const page = () => {
  const getQuiz = async (topic: string) => {
    const res = await axios.post("/api/getQNA", {
      topic: topic,
    });
    console.log(res.data.res);
  };

  useEffect(() => {
    getQuiz("Indian Medieval Kings");
  }, []);

  return <div>page</div>;
};

export default page;

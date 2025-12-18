export const testQuestions = [
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

export const removeFromArray = (arr: any, value: any) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const checkArrayOfEmptyStrings = (arr: string[]) => {
  let flag = true;

  arr.forEach((i) => {
    if (i !== "") {
      flag = false;
    }
  });
  return flag;
};

export const checkErrorArr = (arr: boolean[]) => {
  let flag = true;

  arr.forEach((val) => {
    if (val) {
      flag = false;
    }
  });

  return flag;
};

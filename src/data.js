export const currentUser = {
  name: "Zhang Tao",
  initials: "ZT",
};

export const tabs = [
  { id: "assignments", label: "Assignments" },
  { id: "submissions", label: "My Submissions" },
  { id: "grades", label: "Grades" },
];

export const assignments = [
  {
    id: 1,
    title: "NLP Homework 2 - Word Embeddings",
    dueDate: "2026-05-10",
    description:
      "Implement and evaluate Word2Vec and GloVe models on a given corpus. Compare results using cosine similarity and analogy tasks.",
    status: "Submitted",
    submittedAt: "2026-05-08",
  },
  {
    id: 2,
    title: "NLP Homework 3 - Sequence Models",
    dueDate: "2026-05-20",
    description:
      "Build an RNN/LSTM-based language model and apply it to a text generation task. Include perplexity evaluation.",
    status: "Pending",
    submittedAt: null,
  },
];

export const footerContacts = {
  tas: [
    { name: "TA Wang", email: "ta1@tsinghua.edu.cn" },
    { name: "TA Li", email: "ta2@tsinghua.edu.cn" },
    { name: "TA Chen", email: "ta3@tsinghua.edu.cn" },
  ],
  professor: {
    name: "Prof. Liu",
    email: "liu@tsinghua.edu.cn",
    office: "FIT Building 3-508",
    hours: "Tue & Thu, 2:00 PM - 4:00 PM",
  },
  community: [
    { label: "Discord", url: "https://discord.gg/nlp-course" },
    { label: "Forum", url: "https://forum.tsinghua.edu.cn/nlp" },
  ],
};

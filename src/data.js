export const currentUser = {
  name: "Zhang Tao",
  initials: "ZT",
};

export const tabs = [
  { id: "active", label: "Active Assignments" },
  { id: "submissions", label: "Past Submissions" },
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
    files: [
      { filename: "word2vec_model.py", size: "12.4 KB" },
      { filename: "glove_implementation.py", size: "9.8 KB" },
      { filename: "evaluation_report.pdf", size: "2.1 MB" },
    ],
  },
  {
    id: 2,
    title: "NLP Homework 3 - Sequence Models",
    dueDate: "2026-05-20",
    description:
      "Build an RNN/LSTM-based language model and apply it to a text generation task. Include perplexity evaluation.",
    status: "Pending",
    submittedAt: null,
    files: [],
  },
];

export const pastSubmissions = [
  {
    id: 101,
    title: "LLM Fundamentals: Transformer Architecture",
    submittedAt: "2026-03-15",
    grade: "A",
    score: "95%",
    feedback:
      "Excellent understanding of multi-head attention mechanisms and positional encoding. The implementation of scaled dot-product attention was particularly well done. Consider exploring more advanced variants like sparse attention in future work.",
  },
  {
    id: 102,
    title: "Prompt Engineering Basics",
    submittedAt: "2026-04-02",
    grade: "A-",
    score: "91%",
    feedback:
      "Good grasp of prompt design principles and chain-of-thought techniques. The comparative analysis of different prompting strategies was thorough. Could include more exploration of advanced techniques like self-consistency and tree-of-thought.",
  },
  {
    id: 103,
    title: "Fine-Tuning Pretrained Models",
    submittedAt: "2026-04-20",
    grade: "B+",
    score: "88%",
    feedback:
      "Solid implementation of LoRA and full fine-tuning approaches. The hyperparameter tuning section needs more documentation on the rationale behind chosen values. Good results on the downstream task overall.",
  },
];

export const gradesData = {
  overallGrade: "A-",
  overallScore: "92%",
  courses: [
    { title: "Attention Mechanisms Quiz", grade: "94/100", pending: false },
    { title: "Build a Simple Transformer", grade: "A (93%)", pending: false },
    { title: "RLHF Implementation", grade: "A- (90%)", pending: false },
    { title: "Final Project Proposal", grade: "- / -", pending: true },
    { title: "Sentiment Analysis Model", grade: "A (95%)", pending: false },
    { title: "Named Entity Recognition", grade: "- / -", pending: true },
  ],
};

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

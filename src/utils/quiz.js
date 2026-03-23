import { QUESTION_BANK, QUESTION_CATEGORIES } from '../data/questions';
import { ROAD_SIGNS } from '../data/signs';

export function normalizeVietnameseText(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export function shuffleArray(items) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = nextItems[index];
    nextItems[index] = nextItems[randomIndex];
    nextItems[randomIndex] = current;
  }

  return nextItems;
}

export function getQuestionsForLicense(licenseId) {
  return QUESTION_BANK.filter((question) => question.licenseIds.includes(licenseId));
}

export function getQuestionById(questionId) {
  return QUESTION_BANK.find((question) => question.id === questionId);
}

export function getCategoryById(categoryId) {
  return QUESTION_CATEGORIES.find((category) => category.id === categoryId);
}

export function getSignById(signId) {
  return ROAD_SIGNS.find((sign) => sign.id === signId);
}

export function buildQuestionSession({ questions, mode, categoryId, questionIds, limit }) {
  let source = [...questions];

  if (questionIds?.length) {
    source = questionIds
      .map((questionId) => questions.find((item) => item.id === questionId))
      .filter(Boolean);
  } else if (categoryId) {
    source = source.filter((item) => item.categoryId === categoryId);
  }

  if (mode === 'mockTest') {
    return shuffleArray(source).slice(0, Math.min(limit ?? source.length, source.length));
  }

  return source;
}

export function getProgressStats(questions, progressMap) {
  const answered = questions.filter((question) => progressMap[question.id]);
  const correct = answered.filter((question) => progressMap[question.id]?.isCorrect);
  const mistakes = answered.filter((question) => progressMap[question.id] && !progressMap[question.id]?.isCorrect);
  const completionRate = questions.length === 0 ? 0 : Math.round((answered.length / questions.length) * 100);
  const accuracy = answered.length === 0 ? 0 : Math.round((correct.length / answered.length) * 100);

  return {
    totalQuestions: questions.length,
    answeredCount: answered.length,
    correctCount: correct.length,
    mistakeCount: mistakes.length,
    completionRate,
    accuracy,
  };
}

export function getCategoryProgress(questions, progressMap) {
  return QUESTION_CATEGORIES.map((category) => {
    const categoryQuestions = questions.filter((question) => question.categoryId === category.id);
    const stats = getProgressStats(categoryQuestions, progressMap);

    return {
      ...category,
      questionCount: categoryQuestions.length,
      ...stats,
      questionIds: categoryQuestions.map((question) => question.id),
    };
  }).filter((category) => category.questionCount > 0);
}

export function getMistakeQuestions(questions, progressMap) {
  return questions.filter((question) => progressMap[question.id] && !progressMap[question.id].isCorrect);
}

export function getBookmarkedQuestions(questions, bookmarkedQuestionIds) {
  return questions.filter((question) => bookmarkedQuestionIds.includes(question.id));
}

export function getWeeklyActivity(progressMap) {
  const now = new Date();
  const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;

  return Object.values(progressMap).filter((entry) => {
    if (!entry?.answeredAt) {
      return false;
    }

    return new Date(entry.answeredAt).getTime() >= sevenDaysAgo;
  }).length;
}

export function calculateSessionResult({ questions, answers, targetScore }) {
  const answeredQuestions = questions.filter((question) => answers[question.id]);
  const correctCount = answeredQuestions.filter((question) => answers[question.id]?.isCorrect).length;
  const totalQuestions = questions.length;
  const scoreRate = totalQuestions === 0 ? 0 : Math.round((correctCount / totalQuestions) * 100);
  const isPassed = correctCount >= targetScore;

  return {
    totalQuestions,
    answeredCount: answeredQuestions.length,
    correctCount,
    incorrectCount: totalQuestions - correctCount,
    scoreRate,
    isPassed,
  };
}
import { createContext, useContext, useEffect, useReducer } from 'react';

import { DEFAULT_LICENSE_ID, getLicenseById } from '../data/licenses';
import { loadAppState, saveAppState } from '../services/storage/appStorage';
import {
  getBookmarkedQuestions,
  getMistakeQuestions,
  getProgressStats,
  getQuestionsForLicense,
  getWeeklyActivity,
} from '../utils/quiz';

const AppContext = createContext(null);

const initialState = {
  hasHydrated: false,
  selectedLicenseId: DEFAULT_LICENSE_ID,
  profile: {
    name: 'Hoc vien moi',
    learnerId: 'GPLX-2026-001',
    memberSince: '03/2026',
  },
  questionProgress: {},
  bookmarkedQuestionIds: [],
  mockTests: [],
};

function mergePersistedState(persistedState) {
  if (!persistedState) {
    return {
      ...initialState,
      hasHydrated: true,
    };
  }

  return {
    ...initialState,
    ...persistedState,
    profile: {
      ...initialState.profile,
      ...persistedState.profile,
    },
    questionProgress: persistedState.questionProgress ?? {},
    bookmarkedQuestionIds: persistedState.bookmarkedQuestionIds ?? [],
    mockTests: persistedState.mockTests ?? [],
    hasHydrated: true,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return mergePersistedState(action.payload);
    case 'SET_LICENSE':
      return {
        ...state,
        selectedLicenseId: action.payload,
      };
    case 'RECORD_ANSWER': {
      const current = state.questionProgress[action.payload.questionId];
      const nextAttempts = current?.attempts ? current.attempts + 1 : 1;

      return {
        ...state,
        questionProgress: {
          ...state.questionProgress,
          [action.payload.questionId]: {
            questionId: action.payload.questionId,
            selectedOptionId: action.payload.selectedOptionId,
            isCorrect: action.payload.isCorrect,
            answeredAt: action.payload.answeredAt,
            mode: action.payload.mode,
            attempts: nextAttempts,
          },
        },
      };
    }
    case 'TOGGLE_BOOKMARK': {
      const exists = state.bookmarkedQuestionIds.includes(action.payload);
      const bookmarkedQuestionIds = exists
        ? state.bookmarkedQuestionIds.filter((item) => item !== action.payload)
        : [...state.bookmarkedQuestionIds, action.payload];

      return {
        ...state,
        bookmarkedQuestionIds,
      };
    }
    case 'SAVE_MOCK_TEST':
      return {
        ...state,
        mockTests: [action.payload, ...state.mockTests].slice(0, 12),
      };
    case 'RESET_PROGRESS':
      return {
        ...state,
        questionProgress: {},
        bookmarkedQuestionIds: [],
        mockTests: [],
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    async function hydrate() {
      const persistedState = await loadAppState();

      if (isMounted) {
        dispatch({ type: 'HYDRATE', payload: persistedState });
      }
    }

    hydrate();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!state.hasHydrated) {
      return;
    }

    const persistableState = {
      selectedLicenseId: state.selectedLicenseId,
      profile: state.profile,
      questionProgress: state.questionProgress,
      bookmarkedQuestionIds: state.bookmarkedQuestionIds,
      mockTests: state.mockTests,
    };

    saveAppState(persistableState);
  }, [state]);

  const selectedLicense = getLicenseById(state.selectedLicenseId);
  const questions = getQuestionsForLicense(state.selectedLicenseId);
  const stats = getProgressStats(questions, state.questionProgress);
  const mistakeQuestions = getMistakeQuestions(questions, state.questionProgress);
  const bookmarkedQuestions = getBookmarkedQuestions(questions, state.bookmarkedQuestionIds);
  const weeklyActivity = getWeeklyActivity(state.questionProgress);

  const value = {
    state,
    selectedLicense,
    questions,
    stats,
    mistakeQuestions,
    bookmarkedQuestions,
    weeklyActivity,
    selectLicense: (licenseId) => dispatch({ type: 'SET_LICENSE', payload: licenseId }),
    recordAnswer: ({ questionId, selectedOptionId, isCorrect, mode }) =>
      dispatch({
        type: 'RECORD_ANSWER',
        payload: {
          questionId,
          selectedOptionId,
          isCorrect,
          mode,
          answeredAt: new Date().toISOString(),
        },
      }),
    toggleBookmark: (questionId) =>
      dispatch({
        type: 'TOGGLE_BOOKMARK',
        payload: questionId,
      }),
    saveMockTest: (result) =>
      dispatch({
        type: 'SAVE_MOCK_TEST',
        payload: result,
      }),
    resetProgress: () => dispatch({ type: 'RESET_PROGRESS' }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext phai duoc dung trong AppProvider');
  }

  return context;
}

export default AppProvider;

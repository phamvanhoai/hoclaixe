export const LICENSE_TYPES = [
  {
    id: 'a1',
    code: 'A1',
    title: 'Xe mo to duoi 175cc',
    description: 'Tap trung cac cau hoi co ban cho nguoi hoc lai xe may.',
    examQuestionCount: 25,
    targetScore: 21,
    questionPool: 250,
    accent: '#0f766e',
  },
  {
    id: 'a',
    code: 'A',
    title: 'Xe mo to tu 175cc tro len',
    description: 'Bo cau hoi mo rong cho xe mo to phan khoi lon.',
    examQuestionCount: 25,
    targetScore: 23,
    questionPool: 250,
    accent: '#7c3aed',
  },
  {
    id: 'b',
    code: 'B',
    title: 'O to con va xe tai nhe',
    description: 'Nhom hoc vien pho bien nhat khi thi GPLX o to.',
    examQuestionCount: 30,
    targetScore: 27,
    questionPool: 600,
    accent: '#136dec',
  },
  {
    id: 'c1',
    code: 'C1',
    title: 'Xe tai trung va xe chuyen dung nho',
    description: 'Cau hoi nang hon ve quy tac, ky thuat va an toan.',
    examQuestionCount: 35,
    targetScore: 32,
    questionPool: 600,
    accent: '#ea580c',
  },
  {
    id: 'c',
    code: 'C',
    title: 'Xe tai lon va dau keo',
    description: 'Mo phong de ly thuyet cho tai xe van tai hang nang.',
    examQuestionCount: 40,
    targetScore: 36,
    questionPool: 600,
    accent: '#059669',
  },
  {
    id: 'd1',
    code: 'D1',
    title: 'Xe cho nguoi 9-16 cho',
    description: 'Tap trung them vao quy tac va trach nhiem van tai hanh khach.',
    examQuestionCount: 45,
    targetScore: 41,
    questionPool: 600,
    accent: '#db2777',
  },
];

export const DEFAULT_LICENSE_ID = 'b';

export function getLicenseById(id) {
  return LICENSE_TYPES.find((item) => item.id === id) ?? LICENSE_TYPES[0];
}

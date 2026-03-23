export const LICENSE_TYPES = [
  {
    id: 'a1',
    code: 'A1',
    title: 'Xe mô tô dưới 125cc',
    description: 'Tập trung các câu hỏi cơ bản cho người học lái xe máy.',
    examQuestionCount: 25,
    targetScore: 21,
    questionPool: 250,
    accent: '#0f766e',
  },
  {
    id: 'a',
    code: 'A',
    title: 'Xe mô tô từ 125cc trở lên',
    description: 'Bộ câu hỏi mở rộng cho xe mô tô phân khối lớn.',
    examQuestionCount: 25,
    targetScore: 23,
    questionPool: 250,
    accent: '#7c3aed',
  },
  {
    id: 'b',
    code: 'B',
    title: 'Ô tô con và xe tải nhẹ',
    description: 'Nhóm học viên phổ biến nhất khi thi GPLX ô tô.',
    examQuestionCount: 30,
    targetScore: 27,
    questionPool: 600,
    accent: '#136dec',
  },
  {
    id: 'c1',
    code: 'C1',
    title: 'Xe tải trung và xe chuyên dùng nhỏ',
    description: 'Câu hỏi nặng hơn về quy tắc, kỹ thuật và an toàn.',
    examQuestionCount: 35,
    targetScore: 32,
    questionPool: 600,
    accent: '#ea580c',
  },
  {
    id: 'c',
    code: 'C',
    title: 'Xe tải lớn và đầu kéo',
    description: 'Mô phỏng đề lý thuyết cho tài xế vận tải hạng nặng.',
    examQuestionCount: 40,
    targetScore: 36,
    questionPool: 600,
    accent: '#059669',
  },
  {
    id: 'd1',
    code: 'D1',
    title: 'Xe chở người 9-16 chỗ',
    description: 'Tập trung thêm vào quy tắc và trách nhiệm vận tải hành khách.',
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
export const QUESTION_CATEGORIES = [
  {
    id: 'rules',
    title: 'Khái niệm và quy tắc',
    description: 'Các quy định nền tảng khi tham gia giao thông.',
    icon: 'scale-balance',
    accent: '#136dec'
  },
  {
    id: 'signs',
    title: 'Hệ thống biển báo',
    description: 'Nhận diện biển cấm, cảnh báo, hiệu lệnh và chỉ dẫn.',
    icon: 'sign-direction',
    accent: '#f59e0b'
  },
  {
    id: 'situations',
    title: 'Sa hình và tình huống',
    description: 'Xử lý giao lộ, vòng xuyến, làn đường và tình huống thực tế.',
    icon: 'road-variant',
    accent: '#0f766e'
  },
  {
    id: 'ethics',
    title: 'Văn hóa và đạo đức',
    description: 'Thái độ, trách nhiệm và ứng xử khi lái xe.',
    icon: 'handshake-outline',
    accent: '#7c3aed'
  },
  {
    id: 'technique',
    title: 'Kỹ thuật lái xe',
    description: 'Sử dụng phanh, số, quan sát và vận hành xe an toàn.',
    icon: 'car-cog',
    accent: '#ea580c'
  },
  {
    id: 'critical',
    title: 'Tình huống nghiêm trọng',
    description: 'Nhóm câu hỏi dễ điểm liệt cần ghi nhớ kỹ.',
    icon: 'alert-decagram',
    accent: '#dc2626'
  }
];

export const QUESTION_BANK = [
  {
    id: 'q001',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người lái xe có được dùng tay sử dụng điện thoại khi đang điều khiển xe đang chạy trên đường không?',
    options: [
      {
        id: 'a',
        label: 'Được nếu xe đang đi chậm dưới 20 km/h.'
      },
      {
        id: 'b',
        label: 'Không được dưới mọi hình thức sử dụng bằng tay.'
      },
      {
        id: 'c',
        label: 'Được nếu đường vắng và không có xe khác.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Người điều khiển phương tiện không được dùng tay sử dụng điện thoại khi xe đang chạy vì làm giảm khả năng quan sát và phản xạ.',
    isCritical: true
  },
  {
    id: 'q002',
    categoryId: 'rules',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi đến giao lộ có đèn tín hiệu vàng, người lái xe phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Tăng tốc để vượt nhanh qua giao lộ.'
      },
      {
        id: 'b',
        label: 'Dừng lại trước vạch dừng, trừ trường hợp đã qua vạch hoặc không thể dừng an toàn.'
      },
      {
        id: 'c',
        label: 'Bật đèn ưu tiên rồi đi tiếp.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Đèn vàng báo hiệu phải dừng lại an toàn. Chỉ được đi tiếp khi đã qua vạch dừng hoặc nếu dừng lại sẽ gây nguy hiểm.'
  },
  {
    id: 'q003',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi muốn chuyển hướng, người lái xe cần thực hiện theo thứ tự nào?',
    options: [
      {
        id: 'a',
        label: 'Chuyển hướng ngay, sau đó bật tín hiệu xin đường.'
      },
      {
        id: 'b',
        label: 'Quan sát, giảm tốc độ, bật tín hiệu rẽ và chỉ chuyển hướng khi bảo đảm an toàn.'
      },
      {
        id: 'c',
        label: 'Bấm còi liên tục để các xe khác tránh.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Chuyển hướng an toàn cần có quan sát, giảm tốc, bật đèn tín hiệu sớm và đảm bảo không gây cản trở cho xe khác.'
  },
  {
    id: 'q004',
    categoryId: 'critical',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi lái xe trên đường cao tốc, hành vi nào dưới đây bị cấm nghiêm trọng?',
    options: [
      {
        id: 'a',
        label: 'Đi vào làn dừng khẩn cấp nếu không có tình huống bất khả kháng.'
      },
      {
        id: 'b',
        label: 'Bật đèn cốt khi trời mưa lớn.'
      },
      {
        id: 'c',
        label: 'Giữ khoảng cách an toàn với xe trước.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Làn dừng khẩn cấp chỉ dùng cho xe gặp sự cố hoặc tình huống khẩn. Đi vào làn này tùy tiện là hành vi rất nguy hiểm.',
    isCritical: true
  },
  {
    id: 'q005',
    categoryId: 'signs',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Biển báo P.102 có ý nghĩa gì?',
    signId: 'sign-no-entry',
    options: [
      {
        id: 'a',
        label: 'Cấm rẽ trái.'
      },
      {
        id: 'b',
        label: 'Cấm đi ngược chiều.'
      },
      {
        id: 'c',
        label: 'Cấm đỗ xe.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Biển tròn viền đỏ có vạch ngang trắng là biển cấm đi ngược chiều, không được đưa xe đi vào từ hướng đặt biển.'
  },
  {
    id: 'q006',
    categoryId: 'signs',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Gặp biển báo W.224, người lái xe cần chú ý điều gì?',
    signId: 'sign-pedestrian',
    options: [
      {
        id: 'a',
        label: 'Khu vực có người đi bộ cắt ngang, cần giảm tốc độ và quan sát.'
      },
      {
        id: 'b',
        label: 'Nơi được phép quay đầu xe.'
      },
      {
        id: 'c',
        label: 'Đường dành cho xe ưu tiên.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Biển cảnh báo W.224 thông báo sắp tới vị trí người đi bộ cắt ngang đường, cần giảm tốc và sẵn sàng nhường đường.'
  },
  {
    id: 'q007',
    categoryId: 'signs',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Biển báo R.303 yêu cầu người lái xe phải thực hiện như thế nào?',
    signId: 'sign-roundabout',
    options: [
      {
        id: 'a',
        label: 'Dừng lại hoàn toàn rồi mới đi tiếp.'
      },
      {
        id: 'b',
        label: 'Đi theo chiều mũi tên quanh đảo giao thông.'
      },
      {
        id: 'c',
        label: 'Được rẽ trái ngay lập tức.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Biển hiệu lệnh R.303 bắt buộc phương tiện đi theo hướng vòng quanh đảo giao thông.'
  },
  {
    id: 'q008',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Tại nơi giao nhau không có vòng xuyến, xe nào được quyền đi trước?',
    options: [
      {
        id: 'a',
        label: 'Xe đến từ bên trái.'
      },
      {
        id: 'b',
        label: 'Xe đến từ bên phải.'
      },
      {
        id: 'c',
        label: 'Xe có kích thước lớn hơn.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Tại nơi giao nhau đồng cấp không có tín hiệu ưu tiên, phải nhường đường cho xe đến từ bên phải.'
  },
  {
    id: 'q009',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi đi đến vòng xuyến, người lái xe cần làm gì?',
    options: [
      {
        id: 'a',
        label: 'Tăng tốc để nhập vòng xuyến trước.'
      },
      {
        id: 'b',
        label: 'Nhường đường cho xe đang đi trong vòng xuyến và bật tín hiệu khi ra khỏi vòng xuyến.'
      },
      {
        id: 'c',
        label: 'Bấm còi liên tục và đi vào bên trái.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường cho xe đi đến từ bên trái. Khi ra khỏi vòng xuyến cần bật tín hiệu rẽ phải.'
  },
  {
    id: 'q010',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi chuyển làn đường, bạn cần ưu tiên thao tác nào?',
    options: [
      {
        id: 'a',
        label: 'Bật đèn tín hiệu, quan sát gương và điểm mù, sau đó chuyển làn từ từ.'
      },
      {
        id: 'b',
        label: 'Đánh lái gấp để tránh mất thời gian.'
      },
      {
        id: 'c',
        label: 'Chỉ cần bấm còi để báo xe khác.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Chuyển làn an toàn đòi hỏi bật tín hiệu sớm, quan sát kỹ và thao tác mềm, không cắt mặt dòng xe khác.'
  },
  {
    id: 'q011',
    categoryId: 'ethics',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Văn hóa giao thông của người lái xe được thể hiện rõ nhất qua hành vi nào?',
    options: [
      {
        id: 'a',
        label: 'Nhường đường, giữ bình tĩnh và hỗ trợ người gặp sự cố khi an toàn.'
      },
      {
        id: 'b',
        label: 'Đi sát đuôi xe trước để tránh bị cắt đầu.'
      },
      {
        id: 'c',
        label: 'Dùng còi lớn để yêu cầu người khác tránh đường.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Văn hóa giao thông đề cao sự tôn trọng, chia sẻ và ứng xử có trách nhiệm với những người cùng tham gia giao thông.'
  },
  {
    id: 'q012',
    categoryId: 'ethics',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người lái xe kinh doanh vận tải cần ưu tiên điều gì trong mỗi chuyến đi?',
    options: [
      {
        id: 'a',
        label: 'Đi đúng giờ bằng mọi giá.'
      },
      {
        id: 'b',
        label: 'Bảo đảm an toàn cho hành khách, hàng hóa và người tham gia giao thông.'
      },
      {
        id: 'c',
        label: 'Tận dụng mọi khoảng trống để vượt xe.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'An toàn luôn là yếu tố ưu tiên cao nhất đối với người lái xe kinh doanh vận tải.'
  },
  {
    id: 'q013',
    categoryId: 'technique',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi đổ dốc dài, người lái xe số sàn cần phối hợp thao tác nào?',
    options: [
      {
        id: 'a',
        label: 'Về mo, tắt máy để tiết kiệm nhiên liệu.'
      },
      {
        id: 'b',
        label: 'Chọn số thấp phù hợp và sử dụng phanh động cơ kết hợp phanh chân.'
      },
      {
        id: 'c',
        label: 'Chỉ đạp phanh liên tục đến hết dốc.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Đổ dốc dài cần dùng số thấp và phanh động cơ để tránh quá nhiệt hệ thống phanh và mất hiệu lực phanh.'
  },
  {
    id: 'q014',
    categoryId: 'technique',
    licenseIds: [
      'a1',
      'a'
    ],
    question: 'Với xe mô tô, khi phanh khẩn cấp trên đường thẳng khô, cần thực hiện như thế nào?',
    options: [
      {
        id: 'a',
        label: 'Chỉ dùng phanh trước.'
      },
      {
        id: 'b',
        label: 'Phối hợp cả phanh trước và phanh sau một cách có kiểm soát.'
      },
      {
        id: 'c',
        label: 'Tắt máy và dùng chân đạp xuống đất.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Phối hợp hai phanh giúp rút ngắn quãng đường dừng và giữ xe ổn định hơn so với chỉ dùng một phanh.'
  },
  {
    id: 'q015',
    categoryId: 'critical',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người lái xe đã uống rượu bia có được điều khiển phương tiện tham gia giao thông không?',
    options: [
      {
        id: 'a',
        label: 'Được nếu cảm thấy vẫn tỉnh táo.'
      },
      {
        id: 'b',
        label: 'Không được.'
      },
      {
        id: 'c',
        label: 'Được nếu đi quãng đường ngắn.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Đã sử dụng rượu bia thì không lái xe. Đây là nội dung cần ghi nhớ và thuộc nhóm hành vi đặc biệt nguy hiểm.',
    isCritical: true
  },
  {
    id: 'q016',
    categoryId: 'critical',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi lái xe trên đường cao tốc, nếu bỏ lỡ điểm ra, bạn nên làm gì?',
    options: [
      {
        id: 'a',
        label: 'Lùi xe về điểm ra vừa qua.'
      },
      {
        id: 'b',
        label: 'Đi tiếp đến lối ra tiếp theo.'
      },
      {
        id: 'c',
        label: 'Dừng lại trên làn khẩn cấp để chờ người hướng dẫn.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Tuyệt đối không lùi xe trên cao tốc. Cần tiếp tục đi đến lối ra tiếp theo để đảm bảo an toàn.',
    isCritical: true
  },
  {
    id: 'q017',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người ngồi trên xe mô tô, xe gắn máy có bắt buộc đội mũ bảo hiểm cài quai đúng quy cách không?',
    options: [
      {
        id: 'a',
        label: 'Chỉ người lái xe mới bắt buộc.'
      },
      {
        id: 'b',
        label: 'Tất cả người ngồi trên xe đều phải đội mũ bảo hiểm cài quai đúng quy cách, trừ trường hợp được miễn theo quy định.'
      },
      {
        id: 'c',
        label: 'Không cần nếu đi trong khu dân cư.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Cả người lái và người ngồi sau trên xe mô tô, xe gắn máy đều phải đội mũ bảo hiểm cài quai đúng quy cách theo quy định.'
  },
  {
    id: 'q018',
    categoryId: 'signs',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Biển P.127 có ý nghĩa gì?',
    signId: 'sign-speed-limit',
    options: [
      {
        id: 'a',
        label: 'Tốc độ tối thiểu là 50 km/h.'
      },
      {
        id: 'b',
        label: 'Tốc độ tối đa cho phép là 50 km/h.'
      },
      {
        id: 'c',
        label: 'Cấm tất cả xe có tốc độ dưới 50 km/h.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Biển tròn viền đỏ ghi số 50 là biển hạn chế tốc độ tối đa, phương tiện không được vượt quá tốc độ này.'
  },
  {
    id: 'q019',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi vượt xe khác, trường hợp nào dưới đây không được phép vượt?',
    options: [
      {
        id: 'a',
        label: 'Xe trước đang bật tín hiệu rẽ trái hoặc đang vượt xe khác.'
      },
      {
        id: 'b',
        label: 'Đường thẳng, tầm nhìn thông thoáng.'
      },
      {
        id: 'c',
        label: 'Đường một chiều có nhiều làn xe.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Không được vượt khi xe trước đang rẽ trái, đang vượt xe khác hoặc trong các tình huống có thể gây nguy hiểm.'
  },
  {
    id: 'q020',
    categoryId: 'technique',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi trời mưa lớn, việc nào giúp tăng an toàn khi lái xe?',
    options: [
      {
        id: 'a',
        label: 'Tăng tốc để vượt nhanh đoạn đường ngập.'
      },
      {
        id: 'b',
        label: 'Bật đèn chiếu gần, giảm tốc độ và tăng khoảng cách.'
      },
      {
        id: 'c',
        label: 'Tắt hết đèn để tránh lóa mắt xe đối diện.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Mưa lớn làm giảm tầm nhìn và độ bám. Giảm tốc, tăng khoảng cách và bật đèn phù hợp giúp an toàn hơn.'
  },
  {
    id: 'q021',
    categoryId: 'ethics',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Gặp người bị tai nạn giao thông, người lái xe nên ứng xử như thế nào?',
    options: [
      {
        id: 'a',
        label: 'Nếu an toàn, dừng xe đúng cách, báo tin và hỗ trợ trong khả năng của mình.'
      },
      {
        id: 'b',
        label: 'Đi nhanh qua để tránh liên lụy.'
      },
      {
        id: 'c',
        label: 'Dừng xe giữa đường để quay phim.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Người lái xe cần có trách nhiệm nhân đạo và hỗ trợ cứu giúp người bị nạn trong điều kiện an toàn.'
  },
  {
    id: 'q022',
    categoryId: 'critical',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Có được giao xe cho người không đủ điều kiện theo quy định để điều khiển tham gia giao thông không?',
    options: [
      {
        id: 'a',
        label: 'Được nếu người đó đã biết lái xe.'
      },
      {
        id: 'b',
        label: 'Không được.'
      },
      {
        id: 'c',
        label: 'Được nếu đi trong nội bộ khu dân cư.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Không giao xe cho người không đủ điều kiện, không có GPLX phù hợp hoặc không đủ sức khỏe. Đây là hành vi nguy hiểm và bị nghiêm cấm.',
    isCritical: true
  },
  {
    id: 'q023',
    categoryId: 'signs',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Biển I.408 cho biết điều gì?',
    signId: 'sign-parking',
    options: [
      {
        id: 'a',
        label: 'Nơi được phép đỗ xe.'
      },
      {
        id: 'b',
        label: 'Nơi cấm đỗ xe.'
      },
      {
        id: 'c',
        label: 'Nơi quay đầu xe.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Biển chỉ dẫn I.408 cho biết vị trí được phép đỗ xe theo quy định tại khu vực đặt biển.'
  },
  {
    id: 'q024',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi sắp vào hầm đường bộ có độ dốc, người lái xe cần làm gì?',
    options: [
      {
        id: 'a',
        label: 'Bật đèn chiếu xa và tăng ga.'
      },
      {
        id: 'b',
        label: 'Bật đèn chiếu gần, đi đúng làn và giữ khoảng cách an toàn.'
      },
      {
        id: 'c',
        label: 'Tắt đèn để nhìn rõ hơn.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Trong hầm đường bộ cần bật đèn chiếu gần, không sử dụng đèn chiếu xa và phải giữ làn đường, khoảng cách an toàn.'
  },
  {
    id: 'q025',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi có tín hiệu của người điều khiển giao thông và đèn tín hiệu khác nhau, người lái xe chấp hành theo tín hiệu nào?',
    options: [
      {
        id: 'a',
        label: 'Theo đèn tín hiệu giao thông.'
      },
      {
        id: 'b',
        label: 'Theo biển báo gần nhất.'
      },
      {
        id: 'c',
        label: 'Theo hướng dẫn của người điều khiển giao thông.'
      }
    ],
    correctOptionId: 'c',
    explanation: 'Thứ tự ưu tiên chấp hành là hiệu lệnh của người điều khiển giao thông, sau đó mới đến đèn tín hiệu, biển báo và vạch kẻ.'
  },
  {
    id: 'q026',
    categoryId: 'technique',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Trước khi khởi hành xe, người lái xe cần kiểm tra nội dung nào?',
    options: [
      {
        id: 'a',
        label: 'Chỉ cần kiểm tra nhiên liệu.'
      },
      {
        id: 'b',
        label: 'Gương, đèn, phanh, lốp, cửa xe và điều kiện an toàn xung quanh.'
      },
      {
        id: 'c',
        label: 'Chỉ cần nhìn gương chiếu hậu.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Kiểm tra tổng quát trước khi khởi hành giúp phát hiện sự cố và giảm nguy cơ mất an toàn.'
  },
  {
    id: 'q027',
    categoryId: 'ethics',
    licenseIds: [
      'd1'
    ],
    question: 'Khi cho hành khách lên xuống xe, lái xe chở người phải ưu tiên điều gì?',
    options: [
      {
        id: 'a',
        label: 'Dừng sát mép đường an toàn, mở cửa đúng thời điểm và quan sát kỹ.'
      },
      {
        id: 'b',
        label: 'Mở cửa xe bất cứ lúc nào cho nhanh.'
      },
      {
        id: 'c',
        label: 'Dừng giữa lòng đường nếu bên trong đã hết chỗ.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Xe chở người cần đảm bảo điểm dừng đỗ an toàn, tránh gây nguy hiểm cho hành khách và xe khác.'
  },
  {
    id: 'q028',
    categoryId: 'signs',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Biển R.122 có ý nghĩa gì?',
    signId: 'sign-stop',
    options: [
      {
        id: 'a',
        label: 'Dừng lại bắt buộc.'
      },
      {
        id: 'b',
        label: 'Cấm quay đầu.'
      },
      {
        id: 'c',
        label: 'Đi chậm.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Biển hiệu lệnh R.122 buộc người điều khiển phương tiện phải dừng hẳn trước vạch dừng hoặc trước vị trí giao nhau để quan sát.'
  },
  {
    id: 'q029',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi đang đi trên đường mà có xe ưu tiên phía sau phát tín hiệu, bạn phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Tăng tốc để tránh cản trở.'
      },
      {
        id: 'b',
        label: 'Nhanh chóng giảm tốc, đi sát về bên phải và dừng lại nếu cần thiết để nhường đường.'
      },
      {
        id: 'c',
        label: 'Giữ nguyên hướng và tốc độ.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khi có xe ưu tiên đang làm nhiệm vụ, các xe khác phải nhanh chóng nhường đường theo quy định.'
  },
  {
    id: 'q030',
    categoryId: 'critical',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Hành vi phóng nhanh, vượt ẩu, tránh vượt trái quy định có thể gây hậu quả gì?',
    options: [
      {
        id: 'a',
        label: 'Chỉ làm hao nhiên liệu hơn.'
      },
      {
        id: 'b',
        label: 'Gây nguy cơ tai nạn nghiêm trọng cho mình và người khác.'
      },
      {
        id: 'c',
        label: 'Không ảnh hưởng nếu tay lái cứng.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Phóng nhanh, vượt ẩu làm giảm khả năng xử lý tình huống, là nguyên nhân phổ biến dẫn tới tai nạn giao thông nghiêm trọng.',
    isCritical: true
  },
  {
    id: 'q031',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Theo Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15, giấy phép lái xe được quản lý bằng bao nhiêu điểm?',
    options: [
      {
        id: 'a',
        label: '10 điểm.'
      },
      {
        id: 'b',
        label: '12 điểm.'
      },
      {
        id: 'c',
        label: '15 điểm.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Theo Điều 58 Luật số 36/2024/QH15, giấy phép lái xe có 12 điểm để quản lý việc chấp hành pháp luật về trật tự, an toàn giao thông đường bộ. Quy định này có hiệu lực từ ngày 01/01/2025.'
  },
  {
    id: 'q032',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Giấy phép lái xe chưa bị trừ hết điểm và không bị trừ điểm trong thời hạn 12 tháng kể từ ngày bị trừ điểm gần nhất thì được xử lý như thế nào?',
    options: [
      {
        id: 'a',
        label: 'Được phục hồi đủ 12 điểm.'
      },
      {
        id: 'b',
        label: 'Phải thi lại lý thuyết để lấy lại điểm.'
      },
      {
        id: 'c',
        label: 'Bị khóa giấy phép lái xe trong 01 tháng.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Theo Điều 58 Luật số 36/2024/QH15, nếu giấy phép lái xe chưa bị trừ hết điểm và không bị trừ điểm trong 12 tháng tính từ lần bị trừ gần nhất thì được phục hồi đủ 12 điểm.'
  },
  {
    id: 'q033',
    categoryId: 'critical',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi giấy phép lái xe bị trừ hết điểm, người có giấy phép lái xe phải thực hiện thế nào để được phục hồi điểm?',
    options: [
      {
        id: 'a',
        label: 'Không được điều khiển phương tiện theo giấy phép đó; sau ít nhất 06 tháng, kiểm tra kiến thức pháp luật đạt yêu cầu thì được phục hồi đủ 12 điểm.'
      },
      {
        id: 'b',
        label: 'Chỉ cần chờ 30 ngày là tự động được cấp lại đủ điểm.'
      },
      {
        id: 'c',
        label: 'Đổi giấy phép lái xe mới là được dùng lại ngay.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Theo Điều 58 và khoản 7 Điều 61 Luật số 36/2024/QH15, khi bị trừ hết điểm thì không được điều khiển phương tiện theo giấy phép đó. Sau ít nhất 06 tháng, nếu kiểm tra kiến thức pháp luật đạt yêu cầu thì được phục hồi đủ 12 điểm.',
    isCritical: true
  },
  {
    id: 'q034',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi tín hiệu đèn giao thông màu xanh nhưng người đi bộ hoặc xe lăn của người khuyết tật đang ở lòng đường, người điều khiển phương tiện phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Được đi ngay vì đèn xanh cho phép lưu thông.'
      },
      {
        id: 'b',
        label: 'Giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn qua đường.'
      },
      {
        id: 'c',
        label: 'Bấm còi để người đi bộ tránh sang bên.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 4 Điều 11 Luật số 36/2024/QH15 quy định đèn xanh là được đi, nhưng nếu người đi bộ hoặc xe lăn của người khuyết tật đang ở lòng đường thì người điều khiển phương tiện phải giảm tốc độ hoặc dừng lại nhường đường.'
  },
  {
    id: 'q035',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi tín hiệu đèn vàng nhấp nháy, người điều khiển phương tiện được đi nhưng phải chấp hành thế nào?',
    options: [
      {
        id: 'a',
        label: 'Tăng tốc để đi nhanh qua nút giao.'
      },
      {
        id: 'b',
        label: 'Quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật hoặc các phương tiện khác.'
      },
      {
        id: 'c',
        label: 'Chỉ cần giữ nguyên tốc độ vì vẫn được đi.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 4 Điều 11 Luật số 36/2024/QH15 quy định đèn vàng nhấp nháy vẫn được đi, nhưng phải quan sát, giảm tốc độ hoặc dừng lại để nhường đường khi cần thiết.'
  },
  {
    id: 'q036',
    categoryId: 'technique',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Theo quy định mới, người lái xe phải bật đèn chiếu sáng phía trước trong thời gian nào?',
    options: [
      {
        id: 'a',
        label: 'Từ 19 giờ ngày hôm trước đến 05 giờ ngày hôm sau.'
      },
      {
        id: 'b',
        label: 'Từ 18 giờ ngày hôm trước đến 06 giờ ngày hôm sau hoặc khi có sương mù, khói, bụi, trời mưa, thời tiết xấu làm hạn chế tầm nhìn.'
      },
      {
        id: 'c',
        label: 'Chỉ khi đi trên đường cao tốc.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 1 Điều 20 Luật số 36/2024/QH15 quy định phải bật đèn chiếu sáng phía trước từ 18:00 ngày hôm trước đến 06:00 ngày hôm sau, hoặc khi thời tiết xấu làm hạn chế tầm nhìn.'
  },
  {
    id: 'q037',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a'
    ],
    question: 'Theo Luật Trật tự, an toàn giao thông đường bộ 2024, xe mô tô hai bánh, xe gắn máy được chở tối đa hai người trong trường hợp nào sau đây?',
    options: [
      {
        id: 'a',
        label: 'Khi đi quãng đường ngắn trong khu dân cư.'
      },
      {
        id: 'b',
        label: 'Khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, chở trẻ em dưới 12 tuổi hoặc chở người già yếu, người khuyết tật.'
      },
      {
        id: 'c',
        label: 'Khi cả ba người đều đội mũ bảo hiểm đúng quy cách.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 1 Điều 33 Luật số 36/2024/QH15 cho phép xe mô tô hai bánh, xe gắn máy được chở tối đa hai người trong các trường hợp đặc biệt nêu trên. Điểm mới là bổ sung trường hợp chở người già yếu hoặc người khuyết tật.'
  },
  {
    id: 'q038',
    categoryId: 'rules',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Từ ngày 01/01/2026, khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, người lái xe phải chấp hành quy định nào?',
    options: [
      {
        id: 'a',
        label: 'Được cho trẻ ngồi cùng hàng ghế với người lái xe nếu đã thắt dây an toàn.'
      },
      {
        id: 'b',
        label: 'Không được cho trẻ ngồi cùng hàng ghế với người lái xe, trừ xe ô tô chỉ có một hàng ghế; đồng thời phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em.'
      },
      {
        id: 'c',
        label: 'Chỉ cần bế trẻ ngồi phía trước nếu đi chậm.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 3 Điều 10 Luật số 36/2024/QH15 quy định nội dung này và khoản 2 Điều 88 quy định riêng điều khoản đó có hiệu lực từ ngày 01/01/2026.'
  },
  {
    id: 'q039',
    categoryId: 'ethics',
    licenseIds: [
      'b',
      'd1'
    ],
    question: 'Xe ô tô kinh doanh vận tải chở trẻ em mầm non, học sinh phải có thêm thiết bị nào theo quy định mới?',
    options: [
      {
        id: 'a',
        label: 'Thiết bị ghi nhận hình ảnh trẻ em mầm non, học sinh và thiết bị có chức năng cảnh báo, chống bỏ quên trẻ em trên xe.'
      },
      {
        id: 'b',
        label: 'Chỉ cần camera hành trình phía trước xe.'
      },
      {
        id: 'c',
        label: 'Chỉ cần còi báo động lắp ngoài xe.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 46 Luật số 36/2024/QH15 quy định xe đưa đón trẻ em mầm non, học sinh phải có thiết bị ghi nhận hình ảnh và thiết bị có chức năng cảnh báo, chống bỏ quên trẻ em trên xe.'
  },
  {
    id: 'q040',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Theo quy định mới, trường hợp nào dưới đây không được vượt xe?',
    options: [
      {
        id: 'a',
        label: 'Trong hầm đường bộ hoặc ở phần đường dành cho người đi bộ qua đường.'
      },
      {
        id: 'b',
        label: 'Trên đường thẳng, khô ráo và tầm nhìn tốt.'
      },
      {
        id: 'c',
        label: 'Khi xe phía trước bật tín hiệu nhường đường.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 6 Điều 14 Luật số 36/2024/QH15 bổ sung thêm các trường hợp không được vượt xe như trong hầm đường bộ, ở phần đường dành cho người đi bộ qua đường, hoặc khi có người đi bộ, xe lăn của người khuyết tật qua đường.'
  },
  {
    id: 'q041',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người điều khiển phương tiện tham gia giao thông đường bộ không được dừng xe, đỗ xe tại vị trí nào sau đây theo quy định mới?',
    options: [
      {
        id: 'a',
        label: 'Trên đường dành riêng cho xe buýt, trên miệng cống thoát nước hoặc chỗ dành riêng cho xe chữa cháy lấy nước.'
      },
      {
        id: 'b',
        label: 'Trong bãi đỗ xe công cộng được phép dừng, đỗ.'
      },
      {
        id: 'c',
        label: 'Bên phải đường một chiều, nơi có biển cho phép đỗ xe.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 6 Điều 18 Luật số 36/2024/QH15 bổ sung thêm nhiều vị trí cấm dừng, đỗ như đường dành riêng cho xe buýt, miệng cống thoát nước, miệng hầm kỹ thuật, chỗ dành riêng cho xe chữa cháy lấy nước.'
  },
  {
    id: 'q042',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ theo thứ tự ưu tiên nào?',
    options: [
      {
        id: 'a',
        label: 'Hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông, biển báo hiệu đường bộ, vạch kẻ đường và các dấu hiệu khác trên mặt đường, cọc tiêu - rào chắn - tiêu phản quang, rồi đến thiết bị âm thanh báo hiệu đường bộ.'
      },
      {
        id: 'b',
        label: 'Đèn tín hiệu giao thông, hiệu lệnh của người điều khiển giao thông, biển báo hiệu đường bộ, vạch kẻ đường.'
      },
      {
        id: 'c',
        label: 'Biển báo hiệu đường bộ, đèn tín hiệu giao thông, hiệu lệnh của người điều khiển giao thông, vạch kẻ đường.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 2 Điều 11 Luật số 36/2024/QH15 quy định phải chấp hành báo hiệu theo đúng thứ tự ưu tiên từ hiệu lệnh của người điều khiển giao thông xuống đến thiết bị âm thanh báo hiệu đường bộ.'
  },
  {
    id: 'q043',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông phải chấp hành thế nào?',
    options: [
      {
        id: 'a',
        label: 'Chấp hành hiệu lệnh của biển báo hiệu tạm thời.'
      },
      {
        id: 'b',
        label: 'Chấp hành hiệu lệnh của biển báo hiệu cố định.'
      },
      {
        id: 'c',
        label: 'Chọn biển nào thuận lợi hơn cho việc di chuyển.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 12 Điều 11 Luật số 36/2024/QH15 quy định nếu biển cố định và biển tạm thời có ý nghĩa khác nhau thì phải chấp hành biển báo hiệu tạm thời.'
  },
  {
    id: 'q044',
    categoryId: 'rules',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người lái xe và người được chở trên xe ô tô phải thực hiện quy định nào về dây đai an toàn?',
    options: [
      {
        id: 'a',
        label: 'Chỉ người lái xe và người ngồi ghế trước mới phải thắt dây đai an toàn.'
      },
      {
        id: 'b',
        label: 'Người lái xe và người được chở trên xe ô tô phải thắt dây đai an toàn tại những chỗ có trang bị dây đai an toàn.'
      },
      {
        id: 'c',
        label: 'Chỉ cần thắt dây đai an toàn khi đi đường dài hoặc đi trên cao tốc.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 2 Điều 10 Luật số 36/2024/QH15 quy định người lái xe và người được chở trên xe ô tô đều phải thắt dây đai an toàn tại các vị trí có trang bị dây đai.'
  },
  {
    id: 'q045',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường cho xe nào?',
    options: [
      {
        id: 'a',
        label: 'Nhường đường cho xe đi đến từ bên trái.'
      },
      {
        id: 'b',
        label: 'Nhường đường cho xe đi đến từ bên phải.'
      },
      {
        id: 'c',
        label: 'Xe nào có kích thước lớn hơn thì được đi trước.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 3 Điều 22 Luật số 36/2024/QH15 quy định tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến phải nhường đường cho xe đi đến từ bên trái.'
  },
  {
    id: 'q046',
    categoryId: 'technique',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người điều khiển phương tiện phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong trường hợp nào dưới đây?',
    options: [
      {
        id: 'a',
        label: 'Chỉ khi trời mưa lớn hoặc mặt đường trơn trượt.'
      },
      {
        id: 'b',
        label: 'Khi đến nơi người đi bộ qua đường, khu vực trường học, bệnh viện, chợ, nơi đường giao nhau, đường đèo dốc hoặc khi tầm nhìn bị hạn chế.'
      },
      {
        id: 'c',
        label: 'Chỉ khi có Cảnh sát giao thông hoặc biển cấm vượt.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Khoản 3 Điều 12 Luật số 36/2024/QH15 liệt kê nhiều trường hợp phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn như nơi người đi bộ qua đường, giao nhau, hầm đường bộ, trường học, bệnh viện, chợ và khi tầm nhìn bị hạn chế.'
  },
  {
    id: 'q047',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi vượt xe trên đường, nguyên tắc vượt đúng quy định là gì?',
    options: [
      {
        id: 'a',
        label: 'Vượt bên trái; chỉ được vượt bên phải khi xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái, hoặc xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.'
      },
      {
        id: 'b',
        label: 'Luôn vượt bên phải để dễ quan sát lề đường.'
      },
      {
        id: 'c',
        label: 'Được chọn vượt bên trái hoặc bên phải tùy mặt đường rộng hay hẹp.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 2 Điều 14 Luật số 36/2024/QH15 quy định phải vượt bên trái, chỉ có một số ngoại lệ được vượt bên phải.'
  },
  {
    id: 'q048',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Xe xin vượt chỉ được vượt khi nào?',
    options: [
      {
        id: 'a',
        label: 'Khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã có tín hiệu rẽ phải, tránh về bên phải.'
      },
      {
        id: 'b',
        label: 'Khi có còi to, đèn sáng và thấy khoảng trống bất kỳ phía trước.'
      },
      {
        id: 'c',
        label: 'Khi xe phía trước đi chậm, không cần quan tâm xe ngược chiều.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 3 Điều 14 Luật số 36/2024/QH15 quy định rõ các điều kiện bắt buộc trước khi vượt xe.'
  },
  {
    id: 'q049',
    categoryId: 'technique',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Trong trường hợp nào người lái xe phải tắt đèn chiếu xa, bật đèn chiếu gần?',
    options: [
      {
        id: 'a',
        label: 'Khi gặp người đi bộ qua đường, đi qua khu đông dân cư có hệ thống chiếu sáng hoạt động, gặp xe đi ngược chiều hoặc khi chuyển hướng tại nơi đường giao nhau.'
      },
      {
        id: 'b',
        label: 'Chỉ khi đi trong hầm đường bộ.'
      },
      {
        id: 'c',
        label: 'Chỉ khi xe phía sau xin vượt.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 2 Điều 20 Luật số 36/2024/QH15 quy định các trường hợp phải tắt đèn chiếu xa và bật đèn chiếu gần.'
  },
  {
    id: 'q050',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Việc sử dụng còi xe đúng quy định là như thế nào?',
    options: [
      {
        id: 'a',
        label: 'Chỉ dùng còi để báo hiệu nguy cơ mất an toàn hoặc chuẩn bị vượt xe; không dùng còi liên tục, không bấm còi từ 22 giờ đến 05 giờ trong khu đông dân cư và khu vực cơ sở khám bệnh, chữa bệnh, trừ xe ưu tiên.'
      },
      {
        id: 'b',
        label: 'Có thể bấm còi liên tục miễn là đang đi đúng tốc độ cho phép.'
      },
      {
        id: 'c',
        label: 'Ban đêm được dùng còi tự do nếu đường vắng và không có nhà dân.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 21 Luật số 36/2024/QH15 chỉ cho phép dùng còi trong hai trường hợp nhất định và cấm sử dụng còi liên tục hoặc dùng còi sai thời gian, địa điểm.'
  },
  {
    id: 'q051',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Trước khi nhập vào làn đường của đường cao tốc, người lái xe phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Bật tín hiệu xin vào, nhường đường cho xe đang chạy trên cao tốc, quan sát xe phía sau và nếu có làn tăng tốc thì phải đi trên làn đó trước khi nhập vào làn đường sát bên phải.'
      },
      {
        id: 'b',
        label: 'Tăng tốc và nhập ngay vào làn giữa để tránh cản trở.'
      },
      {
        id: 'c',
        label: 'Bật đèn khẩn cấp rồi nhập làn ở vị trí thuận tiện nhất.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điểm a khoản 1 Điều 25 Luật số 36/2024/QH15 quy định rõ trình tự nhập làn đường cao tốc để bảo đảm an toàn.'
  },
  {
    id: 'q052',
    categoryId: 'critical',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi xe gặp sự cố trên đường cao tốc và không thể di chuyển vào làn dừng khẩn cấp, người lái xe phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Bật đèn khẩn cấp, đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách tối thiểu 150 mét và nhanh chóng báo cho Cảnh sát giao thông hoặc cơ quan quản lý đường cao tốc.'
      },
      {
        id: 'b',
        label: 'Giữ nguyên xe ở làn chạy, không cần cảnh báo nếu đang ban ngày.'
      },
      {
        id: 'c',
        label: 'Lùi xe từ từ vào làn dừng khẩn cấp để tiết kiệm thời gian.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 2 Điều 25 Luật số 36/2024/QH15 quy định đây là cách xử lý bắt buộc khi xe không thể vào làn dừng khẩn cấp. Đây là tình huống rất nguy hiểm cần ghi nhớ kỹ.',
    isCritical: true
  },
  {
    id: 'q053',
    categoryId: 'situations',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi điều khiển phương tiện trong hầm đường bộ, người lái xe phải tuân thủ quy tắc nào dưới đây?',
    options: [
      {
        id: 'a',
        label: 'Bật đèn chiếu gần; không dừng xe, đỗ xe trong hầm, trừ trường hợp sự cố hoặc bất khả kháng và phải đưa xe vào vị trí khẩn cấp, bật cảnh báo.'
      },
      {
        id: 'b',
        label: 'Bật đèn chiếu xa để nhìn xa hơn và được dừng xe nếu cần nghe điện thoại.'
      },
      {
        id: 'c',
        label: 'Không cần bật đèn nếu hầm có hệ thống chiếu sáng.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 26 Luật số 36/2024/QH15 quy định xe cơ giới trong hầm phải bật đèn chiếu gần và không được dừng, đỗ tùy tiện trong hầm đường bộ.'
  },
  {
    id: 'q054',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Tại nơi đường giao nhau, loại xe ưu tiên nào được quyền đi trước cao nhất khi đang làm nhiệm vụ?',
    options: [
      {
        id: 'a',
        label: 'Xe chữa cháy đi làm nhiệm vụ chữa cháy.'
      },
      {
        id: 'b',
        label: 'Xe cứu thương đi làm nhiệm vụ cấp cứu.'
      },
      {
        id: 'c',
        label: 'Đoàn xe tang.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 2 Điều 27 Luật số 36/2024/QH15 quy định thứ tự ưu tiên cao nhất là xe chữa cháy đi làm nhiệm vụ, sau đó mới đến xe quân sự, công an, kiểm sát làm nhiệm vụ khẩn cấp, xe cứu thương, xe hộ đê - cứu nạn cứu hộ và đoàn xe tang.'
  },
  {
    id: 'q055',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người đủ 18 tuổi trở lên được cấp giấy phép lái xe những hạng nào theo quy định mới?',
    options: [
      {
        id: 'a',
        label: 'Hạng A1, A, B1, B và C1.'
      },
      {
        id: 'b',
        label: 'Chỉ hạng A1 và B.'
      },
      {
        id: 'c',
        label: 'Hạng C, D1 và DE.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 1 Điều 59 Luật số 36/2024/QH15 quy định người đủ 18 tuổi trở lên được cấp giấy phép lái xe hạng A1, A, B1, B và C1.'
  },
  {
    id: 'q056',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Người đủ 21 tuổi trở lên được cấp giấy phép lái xe hạng nào sau đây?',
    options: [
      {
        id: 'a',
        label: 'Hạng C và hạng BE.'
      },
      {
        id: 'b',
        label: 'Hạng D1, D2 và CE.'
      },
      {
        id: 'c',
        label: 'Hạng D, D1E, D2E và DE.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 1 Điều 59 Luật số 36/2024/QH15 quy định người đủ 21 tuổi trở lên được cấp giấy phép lái xe hạng C và BE.'
  },
  {
    id: 'q057',
    categoryId: 'rules',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Giấy phép lái xe hạng B và hạng C1 có thời hạn bao lâu kể từ ngày cấp?',
    options: [
      {
        id: 'a',
        label: '05 năm.'
      },
      {
        id: 'b',
        label: '10 năm.'
      },
      {
        id: 'c',
        label: 'Không thời hạn.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Theo quy định về thời hạn của giấy phép lái xe tại Luật số 36/2024/QH15, hạng B và hạng C1 có thời hạn 10 năm kể từ ngày cấp.'
  },
  {
    id: 'q058',
    categoryId: 'rules',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Giấy phép lái xe các hạng C, D1, D2, D, BE, C1E, CE, D1E, D2E và DE có thời hạn bao lâu kể từ ngày cấp?',
    options: [
      {
        id: 'a',
        label: '03 năm.'
      },
      {
        id: 'b',
        label: '05 năm.'
      },
      {
        id: 'c',
        label: '10 năm.'
      }
    ],
    correctOptionId: 'b',
    explanation: 'Theo quy định về thời hạn của giấy phép lái xe tại Luật số 36/2024/QH15, các hạng C, D1, D2, D, BE, C1E, CE, D1E, D2E và DE có thời hạn 05 năm kể từ ngày cấp.'
  },
  {
    id: 'q059',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Theo phân hạng mới, giấy phép lái xe hạng A1 cấp cho người lái loại xe nào?',
    options: [
      {
        id: 'a',
        label: 'Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.'
      },
      {
        id: 'b',
        label: 'Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.'
      },
      {
        id: 'c',
        label: 'Xe mô tô ba bánh và tất cả các loại ô tô dưới 09 chỗ.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 57 Luật số 36/2024/QH15 quy định hạng A1 cấp cho người lái xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc công suất động cơ điện đến 11 kW.'
  },
  {
    id: 'q060',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Giấy phép lái xe sau khi đổi, cấp lại hoặc nâng hạng được xử lý thế nào về số điểm?',
    options: [
      {
        id: 'a',
        label: 'Được giữ nguyên số điểm của giấy phép lái xe trước khi đổi, cấp lại hoặc nâng hạng.'
      },
      {
        id: 'b',
        label: 'Được phục hồi mặc định về đủ 12 điểm.'
      },
      {
        id: 'c',
        label: 'Bị trừ 02 điểm để theo dõi lại từ đầu.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 58 Luật số 36/2024/QH15 quy định giấy phép lái xe sau khi đổi, cấp lại hoặc nâng hạng vẫn giữ nguyên số điểm của giấy phép lái xe trước đó.'
  },
  {
    id: 'q061',
    categoryId: 'situations',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Khi phương tiện bị hư hỏng, bị tai nạn hoặc hàng hóa rơi đổ trên đường ngang, cầu chung đường sắt mà không thể di chuyển ngay khỏi phạm vi an toàn đường sắt, người điều khiển phải làm gì?',
    options: [
      {
        id: 'a',
        label: 'Ngay lập tức báo hiệu để dừng tàu và thực hiện các biện pháp bảo đảm an toàn.'
      },
      {
        id: 'b',
        label: 'Rời khỏi hiện trường vì tàu hỏa sẽ tự giảm tốc độ.'
      },
      {
        id: 'c',
        label: 'Đứng giữa đường ray ra hiệu bằng tay, không cần biện pháp nào khác.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 3 Điều 24 Luật số 36/2024/QH15 quy định khi có sự cố trong phạm vi an toàn đường sắt phải lập tức báo hiệu dừng tàu và thực hiện các biện pháp bảo đảm an toàn.'
  },
  {
    id: 'q062',
    categoryId: 'technique',
    licenseIds: [
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Trên đường phố, khi dừng xe hoặc đỗ xe sát lề đường, vỉa hè bên phải theo chiều đi của mình, bánh xe gần nhất không được cách lề đường, vỉa hè quá bao nhiêu?',
    options: [
      {
        id: 'a',
        label: '0,25 mét.'
      },
      {
        id: 'b',
        label: '0,50 mét.'
      },
      {
        id: 'c',
        label: '01 mét.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Khoản 6 Điều 18 Luật số 36/2024/QH15 quy định khi dừng, đỗ xe trên đường phố, bánh xe gần nhất không được cách lề đường, vỉa hè quá 0,25 mét.'
  },
  {
    id: 'q063',
    categoryId: 'rules',
    licenseIds: [
      'a1',
      'a',
      'b',
      'c1',
      'c',
      'd1'
    ],
    question: 'Theo quy định mới, việc kiểm định đối với xe mô tô, xe gắn máy được thực hiện như thế nào?',
    options: [
      {
        id: 'a',
        label: 'Chỉ thực hiện kiểm định khí thải theo quy định của pháp luật về bảo vệ môi trường.'
      },
      {
        id: 'b',
        label: 'Phải kiểm định định kỳ đầy đủ cả an toàn kỹ thuật và khí thải như ô tô.'
      },
      {
        id: 'c',
        label: 'Không phải kiểm định dưới bất kỳ hình thức nào.'
      }
    ],
    correctOptionId: 'a',
    explanation: 'Điều 42 Luật số 36/2024/QH15 bổ sung quy định việc kiểm định đối với xe mô tô, xe gắn máy chỉ thực hiện kiểm định khí thải theo pháp luật về bảo vệ môi trường.'
  }
];

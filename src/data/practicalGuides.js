export const PRACTICAL_GUIDE_SECTIONS = [
  {
    id: 'car',
    title: 'Sa hình ô tô',
    subtitle: 'Tập trung cho hạng B và vẫn hữu ích khi ôn thực hành các hạng C1, C, D1, D2, D.',
    icon: 'car',
    accent: '#136dec',
    licenseIds: ['b', 'c1', 'c', 'd1'],
    metrics: [
      { label: 'Hạng B', value: '11 bài liên hoàn' },
      { label: 'C1, C, D1, D2, D', value: '10 bài liên hoàn' },
      { label: 'Nguy hiểm', value: 'Tình huống xuất hiện ngẫu nhiên' },
    ],
    notes: [
      'Hạng B thi 11 bài liên hoàn; các hạng C1, C, D1, D2, D thi 10 bài và khác chủ yếu ở bài ghép xe.',
      'Phần thi hiện chấm điểm tự động nên phải đúng trình tự, đúng làn và đúng thời gian.',
      'Ngoài các bài cố định còn có tình huống nguy hiểm: phải phanh, bật đèn cảnh báo và xử lý đúng nhịp.',
    ],
    lessons: [
      {
        id: 'car-01',
        sequence: '01',
        title: 'Xuất phát',
        goal: 'Khởi động bài thi gọn gàng và đưa xe lăn bánh an toàn.',
        steps: [
          'Chỉnh ghế, gương, thắt dây an toàn, nổ máy ổn định rồi kiểm tra phanh tay.',
          'Bật xi-nhan trái, vào số và cho xe lăn bánh nhẹ nhàng.',
        ],
        tips: [
          'Nhớ chuỗi: ghế, gương, dây an toàn, xi-nhan, vào số, nhả phanh tay.',
          'Xe số sàn nên nhả côn tới điểm bám rồi mới thêm ga nhẹ.',
        ],
        commonMistakes: [
          'Quên dây an toàn hoặc quên xi-nhan trái.',
          'Đề-pa vội làm xe chết máy.',
        ],
      },
      {
        id: 'car-02',
        sequence: '02',
        title: 'Dừng xe nhường đường cho người đi bộ',
        goal: 'Dừng đúng vị trí, không đè vạch và không phanh gấp.',
        steps: [
          'Quan sát biển báo từ sớm và giảm tốc đều.',
          'Canh đầu xe dừng trước vạch đúng khoảng cách rồi đi tiếp êm.',
        ],
        tips: [
          'Nhìn xa để không phải phanh gấp ngay sát vạch.',
          'Giữ chân phanh đều, tránh để xe trôi thêm sau khi dừng.',
        ],
        commonMistakes: [
          'Dừng quá vạch.',
          'Phanh gấp làm xe giật.',
        ],
      },
      {
        id: 'car-03',
        sequence: '03',
        title: 'Dừng và khởi hành ngang dốc',
        goal: 'Giữ xe không tụt dốc và vượt dốc dứt khoát.',
        steps: [
          'Đưa xe lên dốc chậm, dừng đúng vị trí theo tín hiệu.',
          'Lấy điểm bám côn, nhả phanh đúng lúc và cho xe vượt dốc liền mạch.',
        ],
        tips: [
          'Cảm nhận lực kéo của xe thay vì chỉ nhìn mũi xe.',
          'Khi đã lên điểm bám thì thao tác phải liền tay.',
        ],
        commonMistakes: [
          'Để xe tụt dốc.',
          'Xe chết máy trên dốc.',
        ],
      },
      {
        id: 'car-04',
        sequence: '04',
        title: 'Qua vệt bánh xe và đường vuông góc',
        goal: 'Canh bánh chuẩn theo gương và tránh cán vạch.',
        steps: [
          'Giảm tốc trước khi vào hình, giữ ga côn đều và đi thật chậm.',
          'Đánh lái đúng mốc, trả lái sớm để thân xe không cạ vạch.',
        ],
        tips: [
          'Mỗi xe có mốc căn riêng, nên nhớ đúng mốc đã luyện.',
          'Ở góc vuông, chậm nhưng đều sẽ dễ căn hơn.',
        ],
        commonMistakes: [
          'Bánh đè vạch.',
          'Trả lái muộn làm xe cạ mép ngoài.',
        ],
      },
      {
        id: 'car-05',
        sequence: '05',
        title: 'Qua ngã tư có tín hiệu giao thông',
        goal: 'Quan sát đèn tốt, vào ngã tư đúng lúc và giữ đúng làn.',
        steps: [
          'Quan sát đèn từ xa, chuẩn bị dừng nếu vàng bất lợi.',
          'Khi đèn cho phép, cho xe qua nút giao gọn và ổn định lái.',
        ],
        tips: [
          'Ưu tiên nhìn đèn sớm thay vì tới sát vạch mới quyết định.',
          'Không chắc qua kịp thì dừng luôn sẽ an toàn hơn.',
        ],
        commonMistakes: [
          'Vượt đèn đỏ hoặc dừng quá vạch.',
          'Lệch làn khi vừa ra khỏi ngã tư.',
        ],
      },
      {
        id: 'car-06',
        sequence: '06',
        title: 'Qua đường vòng quanh co',
        goal: 'Giữ xe mượt trong đường cong, không lao nhanh và không cán vạch.',
        steps: [
          'Vào bài với tốc độ chậm, mắt nhìn tới điểm ra cua.',
          'Đánh lái mềm, đều tay và trả lái từ tốn khi thoát cua.',
        ],
        tips: [
          'Nhìn xa sẽ giúp tay lái tự nhiên hơn.',
          'Đừng ôm sát vạch trong quá sớm.',
        ],
        commonMistakes: [
          'Cán vạch trong cua.',
          'Vào cua quá nhanh.',
        ],
      },
      {
        id: 'car-07',
        sequence: '07',
        title: 'Ghép xe dọc vào nơi đỗ',
        goal: 'Lùi xe vào chuồng dọc đúng mép, đủ sâu và ra xe gọn.',
        note: 'Bài này là bài riêng của hạng B; các hạng khác có thể đổi sang bài ghép phù hợp với loại xe.',
        steps: [
          'Đặt xe ban đầu song song và đúng cự ly với chuồng.',
          'Lùi chậm theo gương, cho đuôi xe vào trước rồi chỉnh thân xe song song mép chuồng.',
        ],
        tips: [
          'Vị trí đặt xe ban đầu quyết định phần lớn độ dễ của bài.',
          'Không chắc thì đi thật chậm để còn thời gian sửa góc.',
        ],
        commonMistakes: [
          'Đặt xe quá xa hoặc quá gần chuồng.',
          'Lùi quá nhanh làm bánh sau đè vạch.',
        ],
      },
      {
        id: 'car-08',
        sequence: '08',
        title: 'Ghép xe ngang vào nơi đỗ',
        goal: 'Đưa xe vào ô ngang gọn và đúng hình.',
        note: 'Hạng B hiện có thêm bài ghép ngang riêng; hãy ưu tiên nhớ đúng mốc với xe bạn đang tập.',
        steps: [
          'Canh xe ngang qua ô đỗ theo mốc đã tập rồi bắt đầu lùi.',
          'Đánh lái theo điểm căn, trả lái khi xe gần song song với mép ô.',
        ],
        tips: [
          'Kết hợp nhìn cả hai gương để tránh lệch thân xe.',
          'Nếu xe đã nằm gọn trong chuồng thì đừng chỉnh quá nhiều.',
        ],
        commonMistakes: [
          'Đầu hoặc đuôi xe quét vào mép ngoài.',
          'Bánh đè vạch khi trả lái muộn.',
        ],
      },
      {
        id: 'car-09',
        sequence: '09',
        title: 'Tạm dừng ở chỗ có đường sắt chạy qua',
        goal: 'Dừng đúng vị trí, đủ thời gian và khởi hành êm.',
        steps: [
          'Giảm tốc từ xa, dừng đúng trước vạch theo tín hiệu.',
          'Giữ xe đứng yên ổn định rồi mới khởi hành lại.',
        ],
        tips: [
          'Coi đây là một điểm dừng kỹ thuật thật để đỡ vội.',
          'Sau khi dừng đủ, cho xe đi thật êm để giữ nhịp.',
        ],
        commonMistakes: [
          'Dừng quá vạch.',
          'Dừng chưa đủ thời gian hoặc để xe trôi.',
        ],
      },
      {
        id: 'car-10',
        sequence: '10',
        title: 'Thay đổi số trên đường bằng',
        goal: 'Tăng tốc đủ ngưỡng, lên số đúng nhịp và giữ xe thẳng làn.',
        steps: [
          'Giữ xe thẳng làn và tăng tốc đều tới tốc độ yêu cầu.',
          'Thao tác lên số hoặc kiểm tra tốc độ dứt khoát rồi đưa xe về nhịp an toàn.',
        ],
        tips: [
          'Đừng nhìn quá lâu xuống cụm đồng hồ hay cần số.',
          'Bài này cần dứt khoát hơn các bài chậm trước đó.',
        ],
        commonMistakes: [
          'Không đạt tốc độ yêu cầu.',
          'Mất làn vì quá tập trung vào cần số.',
        ],
      },
      {
        id: 'car-11',
        sequence: '11',
        title: 'Kết thúc',
        goal: 'Đưa xe về đích an toàn, không quên tín hiệu và dừng xe gọn.',
        steps: [
          'Quan sát điểm kết thúc, giảm tốc sớm và đưa xe vào đúng vị trí.',
          'Dừng xe êm, thao tác chỉn chu tới khi hệ thống báo hoàn tất.',
        ],
        tips: [
          'Đừng chủ quan ở đoạn cuối vì đây vẫn là bài đang chấm điểm.',
          'Sau khi báo đạt vẫn nên kết thúc thao tác thật gọn.',
        ],
        commonMistakes: [
          'Quên tín hiệu hoặc dừng lệch vị trí.',
          'Mừng sớm nên để xe trôi hoặc dừng quá gấp.',
        ],
      },
    ],
  },
  {
    id: 'motorbike',
    title: 'Sa hình mô tô',
    subtitle: 'Áp dụng cho hạng A1, A với 4 bài cơ bản cần giữ ga đều và không chống chân.',
    icon: 'motorbike',
    accent: '#0f766e',
    licenseIds: ['a1', 'a'],
    metrics: [
      { label: 'Nội dung', value: '4 bài cơ bản' },
      { label: 'Trọng tâm', value: 'Giữ ga đều, không chống chân' },
      { label: 'Tư thế', value: 'Mắt nhìn xa, tay thả lỏng' },
    ],
    notes: [
      'Phần sát hạch mô tô gồm 4 bài: hình số 8, đường thẳng, đường có vạch cản và đường gồ ghề.',
      'Đi đều ga và giữ thân người thả lỏng sẽ quan trọng hơn việc cố chạy thật nhanh.',
      'Khi xe chao đảo, đừng giật tay lái; hãy nhìn xa và giữ ga nhỏ đều.',
    ],
    lessons: [
      {
        id: 'bike-01',
        sequence: '01',
        title: 'Đi theo hình số 8',
        goal: 'Giữ xe theo đúng quỹ đạo, không chống chân và không cán vạch.',
        steps: [
          'Lên ga vừa đủ trước khi vào hình, mắt nhìn nửa vòng tiếp theo.',
          'Giữ tay lái mềm và nghiêng người tự nhiên theo xe.',
        ],
        tips: [
          'Nhìn xa sẽ giúp xe ổn định hơn rất nhiều.',
          'Nếu xe có xu hướng đổ vào trong, nhích ga nhẹ thay vì giật tay lái.',
        ],
        commonMistakes: [
          'Chống chân xuống sân.',
          'Bóp phanh trước gấp làm xe mất thăng bằng.',
        ],
      },
      {
        id: 'bike-02',
        sequence: '02',
        title: 'Qua vạch đường thẳng',
        goal: 'Giữ xe thẳng trong hành lang hẹp và đi hết bài không lệch bánh.',
        steps: [
          'Đưa xe vào giữa làn từ trước, giữ ga nhỏ đều.',
          'Nhìn cuối hành lang và thả lỏng vai, khuỷu tay.',
        ],
        tips: [
          'Tay quá cứng sẽ làm xe lắc nhiều hơn.',
          'Đi chậm nhưng liên tục sẽ dễ giữ thăng bằng hơn.',
        ],
        commonMistakes: [
          'Lắc tay lái làm bánh chạm mép ngoài.',
          'Đi quá chậm đến mức xe chao đảo.',
        ],
      },
      {
        id: 'bike-03',
        sequence: '03',
        title: 'Qua đường có vạch cản',
        goal: 'Giữ hướng ổn định khi đi qua các gờ cản.',
        steps: [
          'Giữ ga đều trước khi vào bài và không tăng tốc đột ngột trên gờ.',
          'Thả lỏng tay để xe qua từng gờ tự nhiên.',
        ],
        tips: [
          'Thân người linh hoạt sẽ giúp xe bớt nảy hơn.',
          'Phanh giữa bài thường dễ làm mất thăng bằng.',
        ],
        commonMistakes: [
          'Bóp phanh giữa bài làm xe giật.',
          'Tăng ga không đều khiến xe nhao sang một bên.',
        ],
      },
      {
        id: 'bike-04',
        sequence: '04',
        title: 'Qua đường gồ ghề',
        goal: 'Giữ cân bằng và hoàn tất bài cuối nhẹ nhàng.',
        steps: [
          'Giảm tốc hợp lý trước khi vào gồ ghề, giữ ga nhỏ vừa đủ.',
          'Ra khỏi bài mới tăng ga nhẹ để kết thúc phần thi.',
        ],
        tips: [
          'Hơi nhấc nhẹ trọng tâm người sẽ giúp xe đỡ dằn hơn.',
          'Luôn nhìn ra điểm cuối bài để xe đi thẳng.',
        ],
        commonMistakes: [
          'Giật mình vì xe rung nên chống chân.',
          'Tăng ga bất ngờ làm xe lệch hướng.',
        ],
      },
    ],
  },
];
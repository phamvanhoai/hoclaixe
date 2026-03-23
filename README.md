# HocLaiXe

App Expo/React Native hoc ly thuyet GPLX Viet Nam voi giao dien dong bo, cau truc thu muc ro rang va luu tien do bang AsyncStorage.

## Cau truc chinh

- `App.js`: diem vao gon, chi boot app.
- `src/bootstrap`: khoi dong app va providers.
- `src/navigation`: React Navigation tabs + stack.
- `src/screens`: cac man hinh chinh cua app.
- `src/components`: component UI dung chung va theo nhom man hinh.
- `src/context`: state toan app va luu AsyncStorage.
- `src/data`: du lieu cau hoi, hang bang va bien bao de app chay ngay.
- `src/utils`: helper cho session hoc, thong ke va de thi thu.
- `src/services/storage`: lop doc/ghi AsyncStorage.
- `html-template`: cac file giao dien mau de doi chieu thiet ke.

## Tinh nang da co

- Chon hang bang va luu lai tren thiet bi.
- Trang chu thong ke tien do hoc va lich su thi thu.
- Hoc theo chu de.
- Thi thu mo phong theo hang bang da chon.
- Thu vien bien bao.
- Danh dau cau hoi va on lai cau sai.
- Luu tien do, lich su thi, bookmark bang AsyncStorage.

## Kiem tra build

Da xac nhan bundle thanh cong bang lenh:

```bash
npx expo export --platform android --no-bytecode --output-dir dist-check
```

Neu ban muon mo rong bo cau hoi, cap nhat truc tiep trong `src/data/questions.js`.

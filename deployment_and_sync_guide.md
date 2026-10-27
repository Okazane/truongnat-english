# Hướng Dẫn Tự Động Đồng Bộ Tiến Độ Học Sinh Khi Tắt App & Triển Khai App 🚀

Tài liệu này hướng dẫn chi tiết cơ chế **Tự Động Đồng Bộ (Auto-Sync)** dữ liệu bài học mỗi khi học sinh tắt/thoát ứng dụng, cùng với cách kết nối với Google Sheets của Giáo viên.

---

## ⚡ CƠ CHẾ TỰ ĐỘNG ĐỒNG BỘ KHI TẮT APP (AUTO-SYNC ENGINE)

Ứng dụng được trang bị cơ chế tự động ghi nhận dữ liệu trong nền ngay cả khi học sinh:
- **Tắt trình duyệt / Đóng tab**
- **Thoát App trên Android (Nhấn nút Home / Chuyển sang App khác)**
- **Tắt màn hình điện thoại**

Cơ chế này sử dụng API chuẩn trình duyệt: `visibilitychange`, `pagehide`, `navigator.sendBeacon` và `fetch keepalive` để **đảm bảo dữ liệu gửi thành công 100% về máy chủ ngay cả sau khi App đã đóng!**

---

## 📊 HƯỚNG DẪN KẾT NỐI TỰ ĐỘNG ĐỒNG BỘ VỀ GOOGLE SHEETS (1 PHÚT)

Giáo viên có thể nhận toàn bộ báo cáo tiến độ của tất cả học sinh trong lớp về một file Google Sheets tự động theo thời gian thực mà không cần học sinh phải gửi tin nhắn thủ công.

### Bước 1: Tạo Google Sheet & Nhập Mã Tự Đồng Bộ
1. Tạo một trang tính **Google Sheets** mới trên Google Drive của Giáo viên.
2. Đặt tên các cột ở Hàng 1 (Header):
   - `A1`: `Họ và tên`
   - `B1`: `Lớp`
   - `C1`: `Số bài hoàn thành`
   - `D1`: `Danh sách bài đã pass`
   - `E1`: `Chuỗi Streak`
   - `F1`: `Thời gian tắt App`

### Bước 2: Dán Mã Apps Script
1. Trên Google Sheets, chọn menu **Mở rộng (Extensions)** ➔ **Apps Script**.
2. Xóa hết code cũ và dán đoạn mã ngắn sau:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.class,
    data.completedCount + "/5 bài",
    data.completedDays.join(", "),
    data.streak + " ngày 🔥",
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({status: "success"})).setMimeType(ContentService.MimeType.JSON);
}
```

3. Bấm **Triển khai (Deploy)** ➔ **Phát hành dưới dạng ứng dụng web (New Deployment)**.
4. Ở mục **Ai có quyền truy cập (Who has access)** ➔ Chọn **Bất kỳ ai (Anyone)**.
5. Bấm **Deploy** và **Sao chép đường dẫn Web app URL** (có dạng `https://script.google.com/macros/s/.../exec`).

### Bước 3: Dán Link Vào App
1. Giáo viên mở Tab **"👩‍🏫 Tiến Độ Học Sinh & Server Tự Đồng Bộ"** trên trang chủ App.
2. Dán đường link Web app URL vừa chép vào mục **"🌐 Đường Dẫn Server Tự Đồng Bộ"** ➔ Bấm **💾 Lưu Đường Dẫn**.
3. **Từ thời điểm này, mỗi khi BẤT KỲ học sinh nào học xong và tắt App, kết quả sẽ tự động nhảy vào Google Sheets của Giáo viên theo thời gian thực!**

---

## 🌐 HƯỚNG DẪN ĐÓNG GÓI BẢN WEB & APP ANDROID

- **Bản Web**: Tải thư mục chứa `index.html` và các file `english-g8-s1.html` -> `english-g8-s5.html`, `sw.js` lên **GitHub Pages** hoặc **Vercel** miễn phí.
- **Bản App Android**: Mở link Web trên Chrome Android ➔ Chọn **"Thêm vào màn hình chính"** (App tự tạo Icon trên thiết bị và chạy offline hoàn toàn).

# 🚀 Hướng Dẫn Sử Dụng LocketGold Bằng Shadowrocket (iOS)

Tác giả: **Dinh Tuan Hakaiz**  
Dự án: **LocketGoldDinhTuan**

---

## 🎯 2 Tính Năng Chính Khi Dùng Với Shadowrocket

1. **Mở khóa Locket Gold (VIP/Vàng):** Mở khóa vĩnh viễn huy hiệu Locket Gold, gỡ giới hạn thời lượng video và mở khóa toàn bộ bảng màu/icon cao cấp trong app Locket chính thức trên iPhone.
2. **Bắt Token Tự Động (Sniff JWT Token):** Tự động bắt Bearer token của tài khoản để đưa vào script Python `locketgolddinhtuan` mà không cần nhập mật khẩu.

---

## 📋 Bước 1: Bật HTTPS Decryption & Cài Chứng Chỉ CA (BẮT BUỘC)

Vì các máy chủ `api.revenuecat.com` và `api.locketcamera.com` sử dụng giao thức HTTPS mã hóa, bạn **bắt buộc** phải cài chứng chỉ CA của Shadowrocket để app có thể can thiệp gói tin:

1. Mở app **Shadowrocket** trên iPhone.
2. Vào mục **Cấu hình (Configuration)** -> Nhấn vào file cấu hình đang dùng (thường là `default.conf`).
3. Chọn **Giải mã HTTPS (HTTPS Decryption)**:
   * Bật công tắc **Giải mã HTTPS (HTTPS Decryption)** thành **Bật (ON)**.
   * Nhấn **Tạo chứng chỉ CA mới (Generate a New CA Certificate)**.
   * Nhấn **Cài đặt chứng chỉ vào hệ thống (Install CA to System)** -> Chọn **Cho phép (Allow)** để tải hồ sơ cấu hình.
4. Mở ứng dụng **Cài đặt (Settings)** của iPhone:
   * Vào **Đã tải về hồ sơ (Profile Downloaded)** (ở ngay đầu trang Cài đặt) -> Nhấn **Cài đặt (Install)** ở góc trên bên phải.
   * Sau khi cài xong, quay lại Cài đặt: Vào **Cài đặt chung (General)** -> **Giới thiệu (About)** -> Kéo xuống dưới cùng chọn **Cài đặt tin cậy chứng nhận (Certificate Trust Settings)**.
   * Bật công tắc **Tin cậy đầy đủ (Full Trust)** cho chứng chỉ của **Shadowrocket**.

---

## 📋 Bước 2: Thêm Module / Script Vào Shadowrocket

### Cách 1: Thêm trực tiếp bằng Module (Nhanh nhất)
1. Trong app **Shadowrocket**, chọn tab **Cấu hình (Config)** -> Kéo xuống mục **Mô-đun (Modules)**.
2. Nhấn dấu **+** ở góc trên cùng bên phải.
3. Dán đường dẫn file `.module` hoặc chọn nhập trực tiếp:
   ```ini
   #!name=Locket Gold by Dinh Tuan Hakaiz
   #!desc=Mở khóa Locket Gold vĩnh viễn
   #!author=Dinh Tuan Hakaiz

   [Script]
   LocketGold = type=http-response,pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/dinhtuanhakaiz/locketgolddinhtuan/main/shadowrocket/locket_gold.js

   [MITM]
   hostname = %APPEND% api.revenuecat.com, api.locketcamera.com
   ```

---

### Cách 2: Thêm Thủ Công Vào File Cấu Hình (Nếu không dùng Module)
1. Mở **Shadowrocket** -> Nhấn vào file `.conf` đang dùng -> Chọn **Chỉnh sửa cấu hình (Edit Config)**.
2. Tìm đến mục `[Script]` và thêm dòng:
   ```ini
   LocketGold = type=http-response,pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/dinhtuanhakaiz/locketgolddinhtuan/main/shadowrocket/locket_gold.js
   ```
3. Tìm đến mục `[MITM]` và thêm hostname:
   ```ini
   hostname = %APPEND% api.revenuecat.com, api.locketcamera.com
   ```

---

## 📋 Bước 3: Kích Hoạt & Tận Hưởng

1. Bật công tắc kết nối VPN của **Shadowrocket** ở màn hình chính.
2. **Khởi động lại app Locket:** Vuốt tắt hẳn app Locket trong đa nhiệm (App Switcher) rồi mở lại.
3. Vào trang cá nhân của Locket: Bạn sẽ thấy tài khoản đã được kích hoạt gói **Locket Gold** thành công! 🎉

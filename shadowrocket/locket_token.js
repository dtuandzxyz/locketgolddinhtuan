// ====================================================================
// 🔑 LOCKET TOKEN CAPTURE SCRIPT CHO SHADOWROCKET
// Tác giả: Dinh Tuan Hakaiz (LocketGoldDinhTuan)
// Mục đích: Tự động bắt Bearer JWT Token từ app Locket Camera trên iPhone
//           và gửi thông báo đẩy để dùng cho tool Python
// ====================================================================

const url = $request.url;
const headers = $request.headers;

if (headers) {
    const authHeader = headers["Authorization"] || headers["authorization"];
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.replace("Bearer ", "");
        const prevToken = $persistentStore.read("locket_jwt_token");

        if (token !== prevToken) {
            $persistentStore.write(token, "locket_jwt_token");
            if (typeof $notification !== "undefined") {
                $notification.post(
                    "🔑 Locket Token Captured!",
                    "Dinh Tuan Hakaiz - LocketGold",
                    "Đã bắt thành công JWT Token từ app Locket! Token đã được lưu trữ."
                );
            }
        }
    }
}

$done({});

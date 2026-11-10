// ====================================================================
// 🚀 LOCKET GOLD SCRIPT CHO SHADOWROCKET / QUANTUMULT X / LOON
// Tác giả: Dinh Tuan Hakaiz (LocketGoldDinhTuan)
// Mục đích: Mở khóa vĩnh viễn tính năng Locket Gold (Badge vàng, 
//           không giới hạn thời lượng video, mở khóa toàn bộ preset màu)
// ====================================================================

const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
    const goldProduct = "com.locket.Locket.gold.yearly";
    const expireDate = "2099-12-31T23:59:59Z";
    const purchaseDate = "2024-01-01T00:00:00Z";

    // Cấu hình thông tin gói đăng ký Gold
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};

    obj.subscriber.subscriptions[goldProduct] = {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "normal",
        "expires_date": expireDate,
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": purchaseDate,
        "purchase_date": purchaseDate,
        "store": "app_store"
    };

    // Mở khóa các Entitlements kiểm tra Locket Gold
    const entitlementsList = ["Gold", "gold", "Pro", "pro", "Premium", "premium"];
    for (const ent of entitlementsList) {
        obj.subscriber.entitlements[ent] = {
            "grace_period_expires_date": null,
            "purchase_date": purchaseDate,
            "product_identifier": goldProduct,
            "expires_date": expireDate
        };
    }

    resp.body = JSON.stringify(obj);
}

$done(resp);

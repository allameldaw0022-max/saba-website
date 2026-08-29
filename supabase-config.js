/**
 * إعدادات الاتصال بـ Supabase — سبأ للأنشطة المتعددة
 * -----------------------------------------------------------------
 * هذا المفتاح هو "anon key" العام، وهو آمن للاستخدام داخل كود الواجهة
 * الأمامية (المتصفح) لأنه مصمم لذلك. الحماية الفعلية للبيانات تتم عبر
 * سياسات Row Level Security (RLS) داخل مشروع Supabase نفسه، وليس عبر
 * إخفاء هذا المفتاح.
 *
 * لا تستخدم مفتاح "service_role" (السري) هنا أو في أي كود يعمل في
 * المتصفح إطلاقًا — ذلك المفتاح يتجاوز كل صلاحيات RLS ويجب أن يبقى
 * فقط على السيرفر.
 * -----------------------------------------------------------------
 */
window.SUPABASE_CONFIG = {
  projectRef: "lxndqzqsviijdgbisgge",
  url: "https://lxndqzqsviijdgbisgge.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bmRxenFzdmlpamRnYmlzZ2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5NzMyMDMsImV4cCI6MjEwMzU0OTIwM30.gaCmA5W4crOPJ4qYdSkmWb3fOzywpYtaTtqZRURXpcM"
};

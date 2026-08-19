import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "الموقع لا يحوّل الزيارة طلباً",
    department: "marketing",
    description: "viparmouring.com — الموقع إنجليزي وفيه نموذج عرض سعر. لا مسار عربي سري لتأهيل الطلب قبل كشف المواصفة.",
    signalToInvestigate: "من يرد على النموذج/الهاتف خلال ساعة؟",
  },
  {
    id: "b2",
    title: "مدير المبيعات هو النظام",
    department: "sales",
    description: "الطلب يصل واتساباً أو مكالمة. لا طابور ظاهر ولا بطاقة متابعة. أي غياب شخصي يوقف الصفقة.",
    signalToInvestigate: "كم رسالة يومياً تُنسى بعد الدوام؟",
  },
  {
    id: "b3",
    title: "الكتالوج غير مربوط بمسار تسعير",
    department: "marketing",
    description: "مجال معلن: تصفيح مركبات مدنية وعسكرية. التفاصيل الرقيقة لا تُختلق — المصدر أو الاعتذار.",
    signalToInvestigate: "هل توجد نشرة داخلية لكل خط؟",
  },
  {
    id: "b4",
    title: "السعر والعرض يبقيان بشريين — وهذا صحيح — لكن بلا مسار",
    department: "quality",
    description: "طلب مستوى حماية لا يُسعَّر علناً — الاعتماد أمني ومبيعات معاً",
    signalToInvestigate: "من يعتمد العرض النهائي اليوم؟ كم يستغرق؟",
  },
  {
    id: "b5",
    title: "لا مسار ظاهر لـ «تأهيل حماية»",
    department: "schools",
    description: "العميل لا يشتري سيارة. يشتري مستوى حماية. الاقتراح يظهر هنا والإفصاح يبقى بشرياً الموقع الحالي لا يُظهر هذا المسار كطابور.",
    signalToInvestigate: "أين تُحفظ طلبات هذا الأسبوع؟",
  },
];

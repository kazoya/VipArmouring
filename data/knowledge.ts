import type { KnowledgeAnswer } from "@/types";

export const sampleQuestions = [
  "من كبار الشخصيات للتصفيح؟",
  "ما مجال VIP Armouring Industry Company؟",
  "كيف يعمل محرّك تأهيل حماية؟",
  "ماذا نعرف من الموقع فقط؟",
];

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "من كبار الشخصيات للتصفيح؟",
    answer: "كبار الشخصيات للتصفيح — VIP Armouring Industry Company. المجال المعلن: تصفيح مركبات مدنية وعسكرية. المصدر: https://viparmouring.com/",
    citations: [{ title: "viparmouring.com", note: "صفحة عامة / من نحن كما فُحصت" }],
  },
  {
    id: "k2",
    question: "ما مجال VIP Armouring Industry Company؟",
    answer: "تصفيح مركبات مدنية وعسكرية — طلب مستوى حماية لا يُسعَّر علناً — الاعتماد أمني ومبيعات معاً",
    citations: [{ title: "viparmouring.com", note: "مجال معلن كما فُحص" }],
  },
  {
    id: "k3",
    question: "كيف يعمل محرّك تأهيل حماية؟",
    answer: "الاقتراح يظهر في اللوح. التنفيذ (سعر، عرض، زيارة) لا يتم إلا باعتماد مدير المبيعات. طلب مستوى حماية لا يُسعَّر علناً — الاعتماد أمني ومبيعات معاً",
    citations: [{ title: "هذا التصور", note: "صفحة المحرّك — بيانات تجريبية" }],
  },
  {
    id: "k4",
    question: "ماذا نعرف من الموقع فقط؟",
    answer: "الموقع إنجليزي وفيه نموذج عرض سعر. لا مسار عربي سري لتأهيل الطلب قبل كشف المواصفة. أرقام اللوح تجريبية.",
    citations: [{ title: "viparmouring.com", note: "ما هو منشور فقط" }],
  },
];

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer: "لا إجابة من مصدر معتمد داخل هذا التصور. نعتذر بدل الاختراع. اسأل المبيعات أو راجع الموقع.",
  citations: [{ title: "قاعدة الصدق", note: "المصدر أو الاعتذار" }],
};

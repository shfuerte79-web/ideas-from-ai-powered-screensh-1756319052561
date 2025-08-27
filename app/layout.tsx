import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '```json
[
  {
    "title": "Smart Document Extractor",
    "description": "أداة لتحويل لقطات الشاشة إلى نصوص قابلة للتحرير، مع إمكانية تصنيف المحتوى حسب الفئات (مثل النصوص، الرسوم البيانية، الجداول).",
    "mvp_plan": "استخدام مكتبة OCR لتحويل الصور إلى نصوص، ثم تطوير واجهة بسيطة تسمح للمستخدمين بتحميل لقطات الشاشة وتصنيف النصوص المستخرجة. يمكن استخدام أدوات مثل Flask أو Express لإنشاء واجهة المستخدم."
  },
  {
    "title": "Visual Note Taker",
    "description": "تطبيق يساعد المستخدمين على أخذ ملاحظات مرئية من خلال تحويل لقطات الشاشة إلى نصوص، مع إمكانية إضافة ملاحظات صوتية أو نصية.",
    "mvp_plan": "إنشاء واجهة مستخدم بسيطة تسمح بتحميل لقطات الشاشة، استخدام OCR لاستخراج النصوص، ثم إضافة ميزة لتسجيل الملاحظات الصوتية. يمكن استخدام أدوات مثل React وNode.js لبناء التطبيق."
  },
  {
    "title": "Collaborative Screenshot Annotation Tool",
    "description": "أداة تتيح للمستخدمين تحميل لقطات الشاشة، استخراج النصوص، ثم التعاون في إضافة تعليقات وتعديلات على النصوص المستخرجة.",
    "mvp_plan": "تطوير واجهة تفاعلية تسمح بتحميل الصور، استخدام OCR لاستخراج النصوص، ثم إضافة ميزة التعليقات والتعاون بين المستخدمين باستخدام Firebase أو Socket.io."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
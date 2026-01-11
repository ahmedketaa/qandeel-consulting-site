import FaqPageSection from "@/components/faq/faq";

export const metadata = {
  title: "الأسئلة الشائعة في أبوظبي | قضايا ومعاملات حكومية",
  description:
    "أسئلة تريندي يبحث عنها الناس في أبوظبي حول القضايا، التنفيذ، منع السفر، والمعاملات الحكومية—بإجابات مختصرة وواضحة.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <>
  <FaqPageSection />;
  </>
}

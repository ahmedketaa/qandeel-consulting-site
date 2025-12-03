"use client";

export default function AboutQandilSection() {
  return (
    <section className="bg-background py-16 md:py-24" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
         
          <div className="w-full lg:max-w-sm">
            <div className="h-full bg-dark text-light rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center gap-3 justify-center lg:justify-start text-sm md:text-base text-secondary font-medium">
                  <span className="block w-10 h-[2px] bg-secondary rounded-full" />
                  <span>ما نطمح إليه</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-light text-center lg:text-right">
                  وعدنا
                </h3>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-light/90 text-center lg:text-right">
                في مركز قنديل لخدمات رجال الأعمال، نعدك بأن نكون شريكاً
                استراتيجياً موثوقاً، نساندك في تحقيق أهدافك من خلال
                الابتكار، الشفافية، والتميز في تقديم الخدمات، مع فهم عميق
                لاحتياجاتك وتطلعاتك في سوق الأعمال بالإمارات.
              </p>
            </div>
          </div>
          {/* النص الأساسي */}
          <div className="flex-1 space-y-6 text-center lg:text-right">
           <p
            className={`
              text-sm md:text-base text-dark/70 font-medium
              relative inline-block
              after:content-[''] after:absolute after:right-0
              after:-bottom-1 after:w-8 after:h-[2px]
              after:bg-primary after:rounded-full
            `}
          >
            مرحباً بكم
          </p>


            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-foreground">
              في مركز قنديل لخدمات رجال الأعمال
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              مركز قنديل لخدمات رجال الأعمال هو مؤسسة متخصصة لدعم الشركات
              والأفراد في تأسيس وتطوير أعمالهم، من خلال تقديم الحلول
              الاستشارية والخدمات الحكومية والتجارية باحترافية عالية.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-foreground/70">
              نلتزم في مركز قنديل بتسهيل الإجراءات، وتقديم حلول مبتكرة
              ومرنة، مع التركيز على الدقة، الموثوقية، وتحقيق أفضل تجربة
              لعملائنا في كل خطوة.
            </p>
          </div>

          {/* بوكس "وعدنا" */}
         
        </div>
      </div>
    </section>
  );
}

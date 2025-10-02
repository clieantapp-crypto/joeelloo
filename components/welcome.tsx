export function Welcome() {
  return (
    <section id="welcome" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-balance">
            Welcome to Maison de Joëlle
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            <p>
              Maison de Joëlle is a luxury jewelry brand that offers exquisite pieces crafted with precision and
              passion. Our collections feature timeless designs that celebrate elegance and sophistication, perfect for
              those who appreciate the finer things in life.
            </p>

            <p>
              Each piece in our collection tells a story of craftsmanship and artistry. From stunning diamond necklaces
              to elegant gold bracelets, our jewelry is designed to be treasured for generations. Visit one of our
              boutiques to experience the luxury and discover pieces that speak to your unique style.
            </p>

            <div className="pt-8 border-t border-border/40 mt-8" dir="rtl">
              <p className="text-right leading-loose">
                ميزون دو جويل هي علامة تجارية فاخرة للمجوهرات تقدم قطعًا رائعة مصنوعة بدقة وشغف. تتميز مجموعاتنا بتصاميم
                خالدة تحتفي بالأناقة والرقي، مثالية لأولئك الذين يقدرون الأشياء الجميلة في الحياة.
              </p>
              <p className="text-right leading-loose mt-4">
                كل قطعة في مجموعتنا تحكي قصة من الحرفية والفن. من القلائد الماسية المذهلة إلى الأساور الذهبية الأنيقة،
                صُممت مجوهراتنا لتكون كنزًا للأجيال القادمة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

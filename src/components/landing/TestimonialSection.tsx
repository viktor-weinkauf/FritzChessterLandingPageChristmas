import { Star } from "lucide-react";

export const TestimonialSection = () => (
  <section className="sky-texture py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="parchment rounded-2xl p-10 md:p-14 max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-christmas-gold text-christmas-gold" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="font-fredoka-original text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
          "My 7-year-old received this last Christmas. By New Year's Eve, he was challenging his grandfather to games—and winning. It was the highlight of our holiday."
        </blockquote>
        <cite className="font-fredoka-original text-muted-foreground">— David K., London</cite>
      </div>
    </div>
  </section>
);

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp',
      avatar: 'SC',
      rating: 5,
      text: "VisualDebug has transformed how our team debugs complex applications. The visual flow mapping alone saves us hours every week. The AI insights are incredibly accurate and have caught bugs we would have never found manually."
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      avatar: 'MR',
      rating: 5,
      text: "As a startup, speed is everything. VisualDebug helped us ship 2x faster by catching bugs early and optimizing our code automatically. The ROI was immediate - we paid for itself in the first week."
    },
    {
      name: 'Emily Watson',
      role: 'Full-Stack Engineer',
      company: 'FinTech Inc',
      avatar: 'EW',
      rating: 5,
      text: "The time-travel debugging feature is a game-changer. Being able to step backward through execution and see exactly what went wrong has reduced our debugging time by 70%. I can't imagine working without it now."
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      company: 'CloudScale',
      avatar: 'DK',
      rating: 5,
      text: "Real-time collaboration features make pair debugging so much easier. My team can now debug together remotely as if we're sitting next to each other. The shared sessions are invaluable."
    },
    {
      name: 'Lisa Thompson',
      role: 'Software Architect',
      company: 'Enterprise Co',
      avatar: 'LT',
      rating: 5,
      text: "We evaluated 5 different debugging tools and VisualDebug was the clear winner. The depth of features combined with the intuitive UI makes it perfect for both junior and senior developers on our team."
    },
    {
      name: 'Alex Patel',
      role: 'Indie Developer',
      company: 'Independent',
      avatar: 'AP',
      rating: 5,
      text: "As a solo developer, VisualDebug is like having a senior engineer reviewing my code 24/7. The AI suggestions have taught me better patterns and helped me write cleaner code. Worth every penny!"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-warning/10 text-warning border-warning/20 text-base px-4 py-2">
            <Star className="w-4 h-4 mr-2 fill-warning" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient-primary">Thousands of Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what developers around the world are saying about VisualDebug.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <CardContent className="p-6 relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-relaxed mb-6 text-foreground">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-accent">
                      <AvatarFallback className="text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Code2, Zap, Package, Sparkles } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const comingSoon = [
    { name: 'JavaScript', icon: '🟨', desc: 'Node.js & Browser' },
    { name: 'TypeScript', icon: '🔷', desc: 'Full type support' },
    { name: 'Java', icon: '☕', desc: 'Spring & JVM' },
    { name: 'Go', icon: '🐹', desc: 'Goroutines & more' }
  ];

  return (
    <section className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 text-base px-4 py-2">
            <Code2 className="w-4 h-4 mr-2" />
            Compatibility
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for the <span className="text-gradient-primary">Python Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Debug any Python project. From web apps to data science, we support the entire ecosystem.
          </p>
        </motion.div>

        {/* Main Python Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <Card className="max-w-4xl mx-auto border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-16 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-9xl mb-8"
              >
                🐍
              </motion.div>
              <h3 className="text-4xl font-bold mb-4">Python</h3>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-success/10 text-success border-success/20 text-lg px-6 py-3">
                  <Zap className="w-5 h-5 mr-2" />
                  Full Support
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-lg px-6 py-3">
                  All Versions
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Complete debugging support for Python 3.x. Works seamlessly with any Python version, framework, and library in the entire ecosystem.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-warning/10 text-warning border-warning/20 text-base px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <h3 className="text-2xl font-bold mb-3">More Languages on the Way</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're expanding to support more programming languages. Stay tuned!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {comingSoon.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-dashed border-2 border-border hover:border-warning/50 transition-all cursor-pointer bg-card/50">
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-3 opacity-50">{lang.icon}</div>
                    <div className="font-semibold mb-1 text-muted-foreground">{lang.name}</div>
                    <div className="text-xs text-muted-foreground">{lang.desc}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-10 border border-primary/30 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code2 className="w-8 h-8 text-primary" />
                  <div className="text-5xl font-bold text-primary">Python</div>
                </div>
                <div className="text-base text-muted-foreground">Fully Supported</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-8 h-8 text-warning" />
                  <div className="text-5xl font-bold text-warning">4+</div>
                </div>
                <div className="text-base text-muted-foreground">Languages Coming</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

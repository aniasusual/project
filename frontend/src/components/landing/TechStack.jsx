import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Code2, Zap, Package, Sparkles } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      title: 'Web Frameworks',
      icon: '🌐',
      items: ['Django', 'Flask', 'FastAPI', 'Pyramid', 'Tornado', 'Bottle', 'Sanic', 'Starlette', 'Quart']
    },
    {
      title: 'Data Science & ML',
      icon: '📊',
      items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Testing & QA',
      icon: '🧪',
      items: ['pytest', 'unittest', 'nose2', 'tox', 'coverage.py', 'hypothesis', 'mock']
    },
    {
      title: 'Async & Concurrency',
      icon: '⚡',
      items: ['asyncio', 'aiohttp', 'Celery', 'multiprocessing', 'threading', 'concurrent.futures']
    },
    {
      title: 'Data & APIs',
      icon: '🔌',
      items: ['Scrapy', 'Beautiful Soup', 'Requests', 'SQLAlchemy', 'Pydantic', 'marshmallow']
    },
    {
      title: 'Dev Tools',
      icon: '🛠️',
      items: ['Jupyter', 'IPython', 'Streamlit', 'Dash', 'Gradio', 'Black', 'mypy']
    }
  ];

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
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🐍
              </motion.div>
              <h3 className="text-3xl font-bold mb-3">Python</h3>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-success/10 text-success border-success/20 text-base px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Full Support
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
                  All Versions
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete debugging support for Python 3.x. Works seamlessly with any Python version and framework.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Framework Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Supported Frameworks & Libraries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{category.icon}</div>
                      <h4 className="text-lg font-bold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 + 0.4 }}
                        >
                          <Badge
                            variant="outline"
                            className="px-3 py-1 border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                          >
                            {item}
                          </Badge>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

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
          <div className="glass rounded-2xl p-8 border border-primary/30 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Package className="w-6 h-6 text-primary" />
                  <div className="text-4xl font-bold text-primary">50+</div>
                </div>
                <div className="text-sm text-muted-foreground">Frameworks Supported</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code2 className="w-6 h-6 text-accent" />
                  <div className="text-4xl font-bold text-accent">Python</div>
                </div>
                <div className="text-sm text-muted-foreground">All Versions</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-warning" />
                  <div className="text-4xl font-bold text-warning">More</div>
                </div>
                <div className="text-sm text-muted-foreground">Languages Coming</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

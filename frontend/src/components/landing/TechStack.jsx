import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '../ui/badge';
import { Code2 } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const pythonVersions = [
    { name: 'Python 3.12', logo: '🐍', support: 'Full', badge: 'Latest' },
    { name: 'Python 3.11', logo: '🐍', support: 'Full', badge: 'Stable' },
    { name: 'Python 3.10', logo: '🐍', support: 'Full', badge: 'LTS' },
    { name: 'Python 3.9', logo: '🐍', support: 'Full', badge: 'Supported' },
    { name: 'Python 3.8', logo: '🐍', support: 'Full', badge: 'Legacy' },
    { name: 'Python 3.7', logo: '🐍', support: 'Limited', badge: 'Legacy' }
  ];

  const frameworks = [
    'Django', 'Flask', 'FastAPI', 'Pyramid', 'Tornado',
    'Bottle', 'CherryPy', 'Sanic', 'Quart', 'Starlette',
    'Streamlit', 'Dash', 'Gradio', 'Scrapy', 'Celery',
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch',
    'Jupyter', 'pytest', 'unittest', 'asyncio'
  ];

  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
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
            Works With <span className="text-gradient-primary">Your Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Support for 50+ programming languages and all major frameworks. Debug any codebase, anywhere.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3 text-center">{lang.logo}</div>
                <div className="text-center">
                  <div className="font-semibold mb-1">{lang.name}</div>
                  <Badge className="bg-success/10 text-success border-success/20 text-xs">
                    {lang.support}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Frameworks & Libraries</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 + 0.6 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-base border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-pointer"
                >
                  {framework}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Check, X, Zap, AlertCircle } from 'lucide-react';

const Comparison = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const painPoints = [
    {
      problem: 'Tracing bugs across multiple files',
      traditional: 'Manually search through 10+ files, losing context and wasting hours',
      visualDebug: 'Automatic visual flow shows exact path through all files in seconds',
      icon: '🔍'
    },
    {
      problem: 'Understanding complex code flow',
      traditional: 'Read hundreds of lines, draw diagrams on paper, still confused',
      visualDebug: 'Interactive canvas visualizes entire execution flow automatically',
      icon: '🗺️'
    },
    {
      problem: 'Finding root cause of errors',
      traditional: 'Set breakpoints everywhere, restart 20+ times, guess and check',
      visualDebug: 'AI analyzes entire codebase and pinpoints exact root cause instantly',
      icon: '🎯'
    },
    {
      problem: 'Debugging legacy code',
      traditional: 'No documentation, no context, no idea what code does',
      visualDebug: 'AI explains every function, shows dependencies, generates docs',
      icon: '📚'
    },
    {
      problem: 'Performance bottlenecks',
      traditional: 'Add timing statements everywhere, analyze logs manually',
      visualDebug: 'Real-time profiling shows exact slow functions across all files',
      icon: '⚡'
    },
    {
      problem: 'Team collaboration on bugs',
      traditional: 'Screenshot sharing, video calls, trying to explain over Slack',
      visualDebug: 'Share live debug sessions, see teammates navigate code in real-time',
      icon: '👥'
    },
    {
      problem: 'Async & race conditions',
      traditional: 'Nearly impossible to reproduce, hours of guesswork',
      visualDebug: 'Visualize async flow, record and replay exact conditions',
      icon: '⏱️'
    },
    {
      problem: 'Understanding third-party code',
      traditional: 'Read library source code, Stack Overflow, trial and error',
      visualDebug: 'Step into any library, AI explains behavior and suggests usage',
      icon: '📦'
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            The Difference
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stop Wasting Time on <span className="text-gradient-primary">Manual Debugging</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how VisualDebug transforms painful debugging tasks into smooth, automated workflows.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                <div className="p-6">
                  {/* Problem Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-4xl">{point.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{point.problem}</h3>
                    </div>
                  </div>

                  {/* Traditional Way - Red */}
                  <div className="mb-4 p-4 rounded-lg bg-destructive/5 border-l-4 border-destructive">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-destructive mb-1">Traditional Debugging</div>
                        <p className="text-sm text-foreground leading-relaxed">{point.traditional}</p>
                      </div>
                    </div>
                  </div>

                  {/* VisualDebug Way - Green */}
                  <div className="p-4 rounded-lg bg-success/5 border-l-4 border-success">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-success mb-1">With VisualDebug</div>
                        <p className="text-sm text-foreground leading-relaxed font-medium">{point.visualDebug}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Time Savings Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card className="border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-12 text-center">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-bold mb-4">The Real Cost of Traditional Debugging</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">of dev time spent debugging</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">6 hours</div>
                  <div className="text-sm text-muted-foreground">average to fix one complex bug</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">$50K+</div>
                  <div className="text-sm text-muted-foreground">yearly cost per developer</div>
                </div>
              </div>
              <div className="h-px bg-border my-8" />
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-success mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">time saved with VisualDebug</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-success mb-2">45 min</div>
                  <div className="text-sm text-muted-foreground">average bug fix time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-success mb-2">ROI: 12x</div>
                  <div className="text-sm text-muted-foreground">return on investment</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;

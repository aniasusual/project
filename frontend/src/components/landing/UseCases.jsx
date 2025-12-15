import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Code2, Users, Rocket, GraduationCap, Building2, Microscope,
  TrendingUp, CheckCircle2, Zap, Clock, FileCode, Terminal
} from 'lucide-react';

const UseCases = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCase, setActiveCase] = useState('fullstack');

  const useCases = [
    {
      id: 'fullstack',
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Debug across frontend, backend, and database',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
      accentColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      features: [
        { text: 'Debug React/Flask/Django components', icon: <FileCode className="w-4 h-4" /> },
        { text: 'Trace API calls across multiple services', icon: <Terminal className="w-4 h-4" /> },
        { text: 'Monitor database queries in real-time', icon: <Clock className="w-4 h-4" /> },
        { text: 'Visualize microservice interactions', icon: <Code2 className="w-4 h-4" /> },
        { text: 'Track async operations across the stack', icon: <Zap className="w-4 h-4" /> }
      ],
      codeExample: `# Full-Stack Bug Trace
routes.py:45  → POST /api/checkout
services.py:23 → process_payment()
db.py:156     → query timeout!
✓ Fixed in 3 files simultaneously`,
      stats: { 
        users: '45K+', 
        satisfaction: '4.9/5', 
        timesSaved: '70%',
        filesDebuggedAvg: '12 files/session'
      }
    },
    {
      id: 'team',
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Debug together in real-time',
      gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
      accentColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      features: [
        { text: 'Share debugging sessions live', icon: <Users className="w-4 h-4" /> },
        { text: 'Collaborative breakpoint management', icon: <CheckCircle2 className="w-4 h-4" /> },
        { text: 'Real-time code annotations', icon: <Terminal className="w-4 h-4" /> },
        { text: 'Export debug reports for reviews', icon: <FileCode className="w-4 h-4" /> },
        { text: 'Team performance dashboard', icon: <TrendingUp className="w-4 h-4" /> }
      ],
      codeExample: `# Team Debug Session
👤 Alice: Set breakpoint line 45
👤 Bob:   Found race condition!
👤 Carol: Testing fix now...
✓ 3 developers, 1 bug, 15min`,
      stats: { 
        users: '2K+ Teams', 
        satisfaction: '4.8/5', 
        timesSaved: '60%',
        filesDebuggedAvg: '8 files/session'
      }
    },
    {
      id: 'startup',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Startup MVP',
      description: 'Ship faster, debug smarter',
      gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
      accentColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      features: [
        { text: 'Rapid prototyping with instant feedback', icon: <Zap className="w-4 h-4" /> },
        { text: 'Catch bugs before production', icon: <CheckCircle2 className="w-4 h-4" /> },
        { text: 'Optimize performance for scale', icon: <TrendingUp className="w-4 h-4" /> },
        { text: 'Security vulnerability scanning', icon: <CheckCircle2 className="w-4 h-4" /> },
        { text: 'Technical debt tracking', icon: <Clock className="w-4 h-4" /> }
      ],
      codeExample: `# MVP Sprint Results
Week 1: 47 bugs caught
Week 2: 89% test coverage
Week 3: Ready for launch! 🚀
Time saved: 3 weeks`,
      stats: { 
        users: '5K+ Startups', 
        satisfaction: '5.0/5', 
        timesSaved: '80%',
        filesDebuggedAvg: '15 files/session'
      }
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Education',
      description: 'Learn by visualizing execution',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      accentColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      features: [
        { text: 'Visualize code execution step-by-step', icon: <Code2 className="w-4 h-4" /> },
        { text: 'AI tutor explains debugging concepts', icon: <GraduationCap className="w-4 h-4" /> },
        { text: 'Track learning progress with metrics', icon: <TrendingUp className="w-4 h-4" /> },
        { text: 'Interactive debugging challenges', icon: <Zap className="w-4 h-4" /> },
        { text: 'Free tier for students & educators', icon: <CheckCircle2 className="w-4 h-4" /> }
      ],
      codeExample: `# Learning Progress
Concepts Mastered: 23/30
Bugs Fixed: 156
Skill Level: Intermediate → Advanced
Next: Async debugging`,
      stats: { 
        users: '20K+ Students', 
        satisfaction: '4.9/5', 
        timesSaved: 'Learning accelerated',
        filesDebuggedAvg: '5 files/session'
      }
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Enterprise',
      description: 'Scale across large organizations',
      gradient: 'from-indigo-500/20 via-blue-500/20 to-cyan-500/20',
      accentColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      features: [
        { text: 'SSO and advanced access controls', icon: <CheckCircle2 className="w-4 h-4" /> },
        { text: 'GDPR, SOC2, HIPAA compliance', icon: <CheckCircle2 className="w-4 h-4" /> },
        { text: 'On-premise deployment options', icon: <Building2 className="w-4 h-4" /> },
        { text: 'Custom integrations & workflows', icon: <Code2 className="w-4 h-4" /> },
        { text: 'Dedicated support and training', icon: <Users className="w-4 h-4" /> }
      ],
      codeExample: `# Enterprise Scale
500+ developers
10K+ repos monitored
99.9% uptime SLA
✓ Compliant & secure`,
      stats: { 
        users: '500+ Companies', 
        satisfaction: '4.9/5', 
        timesSaved: '65%',
        filesDebuggedAvg: '20 files/session'
      }
    },
    {
      id: 'research',
      icon: <Microscope className="w-6 h-6" />,
      title: 'Research & Algorithms',
      description: 'Optimize complex algorithms',
      gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
      accentColor: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      features: [
        { text: 'Deep algorithm performance analysis', icon: <TrendingUp className="w-4 h-4" /> },
        { text: 'Memory allocation tracking', icon: <Clock className="w-4 h-4" /> },
        { text: 'Big O complexity visualization', icon: <Code2 className="w-4 h-4" /> },
        { text: 'Data structure state inspection', icon: <Terminal className="w-4 h-4" /> },
        { text: 'Benchmark implementations', icon: <Zap className="w-4 h-4" /> }
      ],
      codeExample: `# Algorithm Optimization
Before: O(n²) - 2.4s
After:  O(n log n) - 0.03s
Improvement: 98.75% faster
✓ Paper published!`,
      stats: { 
        users: '3K+ Researchers', 
        satisfaction: '4.8/5', 
        timesSaved: '75%',
        filesDebuggedAvg: '6 files/session'
      }
    }
  ];

  const activeUseCase = useCases.find(uc => uc.id === activeCase);

  return (
    <section id="usecases" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
            Use Cases
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for <span className="text-gradient-primary">Every Developer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From solo developers to enterprise teams, see how VisualDebug fits your workflow.
          </p>
        </motion.div>

        {/* Use Case Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <motion.button
              key={useCase.id}
              onClick={() => setActiveCase(useCase.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCase === useCase.id
                  ? `${useCase.bgColor} ${useCase.accentColor} border-2 border-current scale-105`
                  : 'bg-card text-muted-foreground border-2 border-transparent hover:border-border'
              }`}
            >
              {useCase.icon}
              <span className="hidden sm:inline">{useCase.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Use Case Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Visual/Code Example */}
                <div className={`relative bg-gradient-to-br ${activeUseCase.gradient} p-12 flex items-center justify-center overflow-hidden`}>
                  {/* Animated Background Elements */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                  />

                  {/* Code Example Display */}
                  <div className="relative z-10 w-full max-w-md">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-2xl"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-destructive" />
                        <div className="w-3 h-3 rounded-full bg-warning" />
                        <div className="w-3 h-3 rounded-full bg-success" />
                        <span className="ml-auto text-xs text-muted-foreground font-mono">
                          {activeUseCase.id}.py
                        </span>
                      </div>
                      <pre className={`text-sm font-mono leading-relaxed ${activeUseCase.accentColor}`}>
                        {activeUseCase.codeExample}
                      </pre>
                    </motion.div>

                    {/* Floating Stats */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <TrendingUp className={`w-5 h-5 ${activeUseCase.accentColor}`} />
                        <div>
                          <div className={`text-xl font-bold ${activeUseCase.accentColor}`}>
                            {activeUseCase.stats.timesSaved}
                          </div>
                          <div className="text-xs text-muted-foreground">Time Saved</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Users className={`w-5 h-5 ${activeUseCase.accentColor}`} />
                        <div>
                          <div className={`text-xl font-bold ${activeUseCase.accentColor}`}>
                            {activeUseCase.stats.users}
                          </div>
                          <div className="text-xs text-muted-foreground">Active Users</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right: Content */}
                <CardContent className="p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${activeUseCase.bgColor} flex items-center justify-center`}>
                      <div className={activeUseCase.accentColor}>
                        {activeUseCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{activeUseCase.title}</h3>
                      <p className="text-muted-foreground">{activeUseCase.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {activeUseCase.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="flex items-center gap-3 group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${activeUseCase.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <div className={activeUseCase.accentColor}>{feature.icon}</div>
                        </div>
                        <span className="text-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className={`text-2xl font-bold ${activeUseCase.accentColor}`}>
                        {activeUseCase.stats.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${activeUseCase.accentColor}`}>
                        {activeUseCase.stats.satisfaction}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${activeUseCase.accentColor}`}>
                        {activeUseCase.stats.filesDebuggedAvg}
                      </div>
                      <div className="text-xs text-muted-foreground">Avg Files</div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, Clock, Zap, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

const Comparison = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeScenario, setActiveScenario] = useState('multifile');

  const scenarios = {
    multifile: {
      title: 'Debugging a Multi-File Bug',
      problem: 'Payment fails because of type mismatch across 4 files',
      traditional: {
        steps: [
          { text: 'Read error message', time: '2 min', icon: '📄' },
          { text: 'Search through routes.py', time: '10 min', icon: '🔍' },
          { text: 'Check services.py', time: '8 min', icon: '🔍' },
          { text: 'Look at validators.py', time: '12 min', icon: '🔍' },
          { text: 'Find the issue', time: '15 min', icon: '💡' },
          { text: 'Test the fix', time: '8 min', icon: '🧪' }
        ],
        total: '55 minutes',
        frustration: 'High',
        color: 'destructive'
      },
      visualDebug: {
        steps: [
          { text: 'Click "Analyze Code"', time: '5 sec', icon: '▶️' },
          { text: 'View canvas flow visualization', time: '10 sec', icon: '🗺️' },
          { text: 'AI shows root cause in routes.py', time: '2 sec', icon: '🤖' },
          { text: 'Apply AI-suggested fix', time: '1 min', icon: '✨' },
          { text: 'Test automatically', time: '30 sec', icon: '✓' }
        ],
        total: '2 minutes',
        frustration: 'None',
        color: 'success'
      }
    },
    legacy: {
      title: 'Understanding Legacy Code',
      problem: 'Need to fix a bug in undocumented 2-year-old code',
      traditional: {
        steps: [
          { text: 'Read through main file', time: '20 min', icon: '📖' },
          { text: 'Trace imports manually', time: '25 min', icon: '🔗' },
          { text: 'Search for examples online', time: '30 min', icon: '🌐' },
          { text: 'Ask team (if available)', time: '15 min', icon: '💬' },
          { text: 'Trial and error fixes', time: '45 min', icon: '🎲' }
        ],
        total: '2+ hours',
        frustration: 'Very High',
        color: 'destructive'
      },
      visualDebug: {
        steps: [
          { text: 'Open file in VisualDebug', time: '5 sec', icon: '📂' },
          { text: 'AI generates full documentation', time: '15 sec', icon: '📝' },
          { text: 'View dependency graph', time: '5 sec', icon: '🕸️' },
          { text: 'AI explains each function', time: '2 min', icon: '🧠' },
          { text: 'Make informed fix', time: '5 min', icon: '🔧' }
        ],
        total: '8 minutes',
        frustration: 'Low',
        color: 'success'
      }
    },
    performance: {
      title: 'Finding Performance Issues',
      problem: 'API endpoint is slow, need to find the bottleneck',
      traditional: {
        steps: [
          { text: 'Add timing prints everywhere', time: '20 min', icon: '⏱️' },
          { text: 'Run tests multiple times', time: '15 min', icon: '🔄' },
          { text: 'Analyze log files', time: '25 min', icon: '📊' },
          { text: 'Guess which function is slow', time: '10 min', icon: '🤔' },
          { text: 'Optimize and re-test', time: '30 min', icon: '⚡' }
        ],
        total: '100 minutes',
        frustration: 'High',
        color: 'destructive'
      },
      visualDebug: {
        steps: [
          { text: 'Enable real-time profiler', time: '5 sec', icon: '🎯' },
          { text: 'Run endpoint once', time: '2 sec', icon: '▶️' },
          { text: 'View performance visualization', time: '10 sec', icon: '📈' },
          { text: 'AI highlights slow function', time: '5 sec', icon: '🎯' },
          { text: 'Apply optimization', time: '8 min', icon: '⚡' }
        ],
        total: '9 minutes',
        frustration: 'None',
        color: 'success'
      }
    }
  };

  const active = scenarios[activeScenario];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Real-World Scenarios
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See the <span className="text-gradient-primary">Dramatic Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare typical debugging workflows side by side. Same problems, radically different outcomes.
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <Button
              key={key}
              onClick={() => setActiveScenario(key)}
              size="lg"
              className={`px-6 py-6 transition-all duration-300 ${
                activeScenario === key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card text-foreground border-2 border-border hover:border-primary/50'
              }`}
            >
              {scenario.title}
            </Button>
          ))}
        </div>

        {/* Comparison Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Problem Statement */}
            <Card className="mb-8 border-border">
              <div className="p-6 text-center">
                <div className="text-lg font-semibold text-foreground mb-2">
                  Scenario: <span className="text-primary">{active.problem}</span>
                </div>
              </div>
            </Card>

            {/* Side by Side Comparison */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Traditional Debugging */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-destructive/30 bg-destructive/5">
                  {/* Header */}
                  <div className="p-6 border-b border-border bg-card/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">Traditional Debugging</h3>
                      <XCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive" />
                        <span className="font-semibold text-destructive">{active.traditional.total}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Frustration:</span>
                        <span className="font-semibold text-destructive">{active.traditional.frustration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="p-6 space-y-4">
                    {active.traditional.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-destructive/30 transition-colors"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive/10 text-destructive font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{step.icon}</span>
                            <span className="font-medium text-foreground">{step.text}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">⏱️ {step.time}</div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Total Time Highlight */}
                    <div className="p-4 rounded-lg bg-destructive/10 border-2 border-destructive/30">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Total Time Wasted:</span>
                        <span className="text-3xl font-bold text-destructive">{active.traditional.total}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* With VisualDebug */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-success/30 bg-success/5">
                  {/* Header */}
                  <div className="p-6 border-b border-border bg-card/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">With VisualDebug</h3>
                      <CheckCircle2 className="w-8 h-8 text-success" />
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-success" />
                        <span className="font-semibold text-success">{active.visualDebug.total}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Frustration:</span>
                        <span className="font-semibold text-success">{active.visualDebug.frustration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="p-6 space-y-4">
                    {active.visualDebug.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-success/30 transition-colors"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success/10 text-success font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{step.icon}</span>
                            <span className="font-medium text-foreground">{step.text}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">⚡ {step.time}</div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Total Time Highlight */}
                    <div className="p-4 rounded-lg bg-success/10 border-2 border-success/30">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Total Time Saved:</span>
                        <span className="text-3xl font-bold text-success">{active.visualDebug.total}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Time Savings Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Card className="border-primary/30 overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-10">
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-destructive mb-2">{active.traditional.total}</div>
                      <div className="text-sm text-muted-foreground">Traditional</div>
                    </div>
                    <ArrowRight className="w-12 h-12 text-primary" />
                    <div className="text-center">
                      <div className="text-5xl font-bold text-success mb-2">{active.visualDebug.total}</div>
                      <div className="text-sm text-muted-foreground">VisualDebug</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-success/20 border-2 border-success">
                      <TrendingUp className="w-6 h-6 text-success" />
                      <span className="text-2xl font-bold text-success">
                        {Math.round(((parseInt(active.traditional.total) - parseInt(active.visualDebug.total)) / parseInt(active.traditional.total)) * 100)}% 
                        Faster
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Comparison;

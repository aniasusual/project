import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Play, Pause, RotateCcw, CheckCircle2, Activity, Zap, Brain, Eye, Sparkles } from 'lucide-react';

const InteractiveDemo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedLine, setHighlightedLine] = useState(null);
  const [variables, setVariables] = useState([]);
  const [aiInsight, setAiInsight] = useState('');

  const codeLines = [
    "def calculate_fibonacci(n):",
    "    if n <= 1:",
    "        return n",
    "    else:",
    "        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)",
    "",
    "# Call function",
    "result = calculate_fibonacci(5)",
    "print(f'Result: {result}')"
  ];

  const demoSteps = [
    {
      label: 'Set Breakpoint',
      line: 1,
      color: 'destructive',
      description: 'Click on line 2 to set a breakpoint',
      variables: [],
      insight: ''
    },
    {
      label: 'Start Debugging',
      line: 7,
      color: 'primary',
      description: 'Execution starts and hits breakpoint',
      variables: [{ name: 'n', value: '5', type: 'int' }],
      insight: ''
    },
    {
      label: 'Inspect Variables',
      line: 1,
      color: 'warning',
      description: 'Variable values tracked in real-time',
      variables: [
        { name: 'n', value: '5', type: 'int' },
        { name: 'result', value: 'None', type: 'NoneType' }
      ],
      insight: ''
    },
    {
      label: 'AI Analysis',
      line: 4,
      color: 'accent',
      description: 'AI detects recursive pattern',
      variables: [
        { name: 'n', value: '3', type: 'int' },
        { name: 'result', value: 'calculating...', type: 'int' }
      ],
      insight: '⚠️ Recursive calls detected! Consider memoization for O(n) instead of O(2ⁿ).'
    },
    {
      label: 'Fixed with AI!',
      line: 8,
      color: 'success',
      description: 'Optimization applied successfully',
      variables: [
        { name: 'n', value: '5', type: 'int' },
        { name: 'result', value: '5', type: 'int' }
      ],
      insight: '✓ Applied memoization! Execution time: 0.002ms (98% faster)'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      if (currentStep < demoSteps.length - 1) {
        const timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        setIsPlaying(false);
      }
    }
  }, [isPlaying, currentStep]);

  useEffect(() => {
    const step = demoSteps[currentStep];
    setHighlightedLine(step.line);
    setVariables(step.variables);
    setAiInsight(step.insight);
  }, [currentStep]);

  const handlePlay = () => {
    if (currentStep >= demoSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setHighlightedLine(null);
    setVariables([]);
    setAiInsight('');
  };

  return (
    <section id="demo" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 text-base px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See It <span className="text-gradient-primary">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch VisualDebug transform a complex debugging session into a visual, AI-guided experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code Editor Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <Card className="p-6 border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    fibonacci.py
                  </Badge>
                </div>

                {/* Code Editor */}
                <div className="bg-card/50 rounded-xl p-4 font-mono text-sm space-y-1">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-3 px-2 py-1 rounded transition-all ${
                        highlightedLine === i ? 'bg-primary/20 border-l-2 border-primary' : ''
                      }`}
                      animate={{
                        backgroundColor: highlightedLine === i ? 'hsl(var(--primary) / 0.2)' : 'transparent'
                      }}
                    >
                      <span className="text-muted-foreground w-6 text-right select-none">{i + 1}</span>
                      {highlightedLine === i && currentStep === 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-destructive"
                        />
                      )}
                      <span className={line.trim() === '' ? 'opacity-30' : ''}>
                        {line || ' '}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <Button
                    onClick={handlePlay}
                    disabled={isPlaying}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        {currentStep >= demoSteps.length - 1 ? 'Play Again' : 'Start Demo'}
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="border-primary/30"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </Card>

            {/* Variables Panel */}
            <AnimatePresence>
              {variables.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card className="p-6 border-primary/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Variables</h3>
                    </div>
                    <div className="space-y-2">
                      {variables.map((v, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-2 bg-muted/50 rounded"
                        >
                          <span className="font-mono text-sm text-foreground">{v.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm text-primary">{v.value}</span>
                            <Badge variant="outline" className="text-xs border-muted">{v.type}</Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Insight */}
            <AnimatePresence>
              {aiInsight && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card className={`p-6 border-accent/30 ${currentStep === demoSteps.length - 1 ? 'border-success/30' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentStep === demoSteps.length - 1 ? 'bg-success/20' : 'bg-accent/20'
                      }`}>
                        {currentStep === demoSteps.length - 1 ? (
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        ) : (
                          <Brain className="w-5 h-5 text-accent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">AI Insight</h3>
                          <Sparkles className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-sm text-muted-foreground">{aiInsight}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Steps Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4 lg:sticky lg:top-24"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Debug Journey</h3>
              <p className="text-sm text-muted-foreground">Follow along as VisualDebug analyzes and optimizes your code</p>
            </div>

            {demoSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.5,
                  x: 0,
                  scale: index === currentStep ? 1.02 : 1
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 border-border transition-all duration-300 ${
                  index === currentStep ? 'border-primary/50 glow-primary' : ''
                } ${
                  index < currentStep ? 'border-success/30 opacity-75' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        scale: index === currentStep && isPlaying ? [1, 1.2, 1] : 1
                      }}
                      transition={{
                        duration: 1,
                        repeat: index === currentStep && isPlaying ? Infinity : 0
                      }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        index < currentStep
                          ? 'bg-success/20 text-success'
                          : index === currentStep
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <span className="text-xl font-bold">{index + 1}</span>
                      )}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base mb-1">{step.label}</div>
                      <div className="text-xs text-muted-foreground">{step.description}</div>
                      {index === currentStep && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2 }}
                          className="h-1 bg-primary rounded-full mt-2"
                        />
                      )}
                    </div>
                    {index === currentStep && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                      />
                    )}
                  </div>
                </Card>
                {index < demoSteps.length - 1 && (
                  <div className={`w-0.5 h-6 ml-6 transition-colors ${
                    index < currentStep ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary/30 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Faster with AI</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">Real-time</div>
                  <div className="text-xs text-muted-foreground">AI Analysis</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-success" />
                <div>
                  <div className="text-2xl font-bold text-success">Visual</div>
                  <div className="text-xs text-muted-foreground">Flow Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
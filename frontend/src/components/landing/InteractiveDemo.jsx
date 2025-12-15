import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Play, Pause, RotateCcw, CheckCircle2, Code2, Activity } from 'lucide-react';

const InteractiveDemo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { label: 'Set Breakpoint', line: 3, color: 'destructive' },
    { label: 'Start Debugging', line: 5, color: 'primary' },
    { label: 'Inspect Variables', line: 7, color: 'warning' },
    { label: 'AI Analysis', line: 9, color: 'accent' },
    { label: 'Fixed!', line: 11, color: 'success' }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section id="demo" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
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
            Watch how VisualDebug transforms a complex debugging session into a visual, intuitive experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              {/* Mock Code Editor */}
              <div className="relative bg-card/50 rounded-xl p-6 font-mono text-sm space-y-2 mb-6">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-4 ${
                      i === demoSteps[currentStep]?.line ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                    }`}
                    animate={{
                      backgroundColor: i === demoSteps[currentStep]?.line ? 'hsl(var(--primary) / 0.2)' : 'transparent'
                    }}
                  >
                    <span className="text-muted-foreground w-6 text-right">{i + 1}</span>
                    <div className="flex-1">
                      <div className="h-4 bg-muted/50 rounded w-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                    </div>
                    {i === demoSteps[currentStep]?.line && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 rounded-full bg-destructive"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={isPlaying ? () => setIsPlaying(false) : handlePlay}
                  disabled={currentStep >= demoSteps.length - 1 && !isPlaying}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button onClick={handleReset} variant="outline" className="border-primary/30">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {demoSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, x: -20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.5,
                  x: index === currentStep ? 10 : 0
                }}
                className="relative"
              >
                <Card className={`p-6 border-border transition-all duration-300 ${
                  index === currentStep ? 'border-primary/50 glow-primary' : ''
                } ${
                  index < currentStep ? 'border-success/50' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      index < currentStep
                        ? 'bg-success/20 text-success'
                        : index === currentStep
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <span className="text-xl font-bold">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{step.label}</div>
                      <div className="text-sm text-muted-foreground">Line {step.line}</div>
                    </div>
                    {index === currentStep && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                    )}
                  </div>
                </Card>
                {index < demoSteps.length - 1 && (
                  <div className={`w-0.5 h-4 ml-6 ${
                    index < currentStep ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
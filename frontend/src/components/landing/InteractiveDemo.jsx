import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactFlow, { 
  Background, 
  Controls, 
  MarkerType,
  useNodesState,
  useEdgesState 
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Play, Pause, RotateCcw, CheckCircle2, Activity, Zap, Brain, Eye, Sparkles, FileCode, Folder, ArrowRight, GitBranch } from 'lucide-react';

const InteractiveDemo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeFile, setActiveFile] = useState('main.py');
  const [callStack, setCallStack] = useState([]);
  const [variables, setVariables] = useState([]);
  const [aiInsight, setAiInsight] = useState('');
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Multi-file project structure
  const projectFiles = {
    'main.py': [
      "from api.routes import app",
      "from utils.logger import setup_logging",
      "",
      "if __name__ == '__main__':",
      "    setup_logging()",
      "    app.run(debug=True)"
    ],
    'api/routes.py': [
      "from flask import Flask, request",
      "from services.payment import process_payment",
      "",
      "app = Flask(__name__)",
      "",
      "@app.route('/checkout', methods=['POST'])",
      "def checkout():",
      "    amount = request.json.get('amount')",
      "    result = process_payment(amount)",
      "    return result"
    ],
    'services/payment.py': [
      "from utils.validator import validate_amount",
      "from db.models import Transaction",
      "",
      "def process_payment(amount):",
      "    if not validate_amount(amount):",
      "        raise ValueError('Invalid amount')",
      "    ",
      "    # Process payment logic",
      "    transaction = Transaction.create(amount)",
      "    return {'status': 'success', 'id': transaction.id}"
    ],
    'utils/validator.py': [
      "def validate_amount(amount):",
      "    # Bug: doesn't handle string amounts!",
      "    if amount <= 0:",
      "        return False",
      "    return amount < 10000"
    ]
  };

  const demoSteps = [
    {
      label: 'API Request Received',
      file: 'api/routes.py',
      line: 6,
      description: 'POST /checkout with string amount',
      callStack: ['main.py:6', 'routes.py:7'],
      variables: [
        { name: 'amount', value: '"100"', type: 'str', file: 'routes.py' }
      ],
      insight: '',
      flowPath: ['main.py', 'api/routes.py']
    },
    {
      label: 'Cross-File Call',
      file: 'services/payment.py',
      line: 3,
      description: 'Jumped to payment service',
      callStack: ['main.py:6', 'routes.py:9', 'payment.py:4'],
      variables: [
        { name: 'amount', value: '"100"', type: 'str', file: 'payment.py' }
      ],
      insight: '',
      flowPath: ['main.py', 'api/routes.py', 'services/payment.py']
    },
    {
      label: 'Validator Check',
      file: 'utils/validator.py',
      line: 2,
      description: 'Type error about to occur',
      callStack: ['main.py:6', 'routes.py:9', 'payment.py:5', 'validator.py:3'],
      variables: [
        { name: 'amount', value: '"100"', type: 'str', file: 'validator.py' }
      ],
      insight: '⚠️ AI detected: Comparing string "100" with int 0 will fail! Type mismatch across files.',
      flowPath: ['main.py', 'api/routes.py', 'services/payment.py', 'utils/validator.py']
    },
    {
      label: 'AI Analysis',
      file: 'utils/validator.py',
      line: 2,
      description: 'Tracing issue across project',
      callStack: ['main.py:6', 'routes.py:9', 'payment.py:5', 'validator.py:3'],
      variables: [
        { name: 'amount', value: '"100"', type: 'str', file: 'validator.py' },
        { name: 'expected_type', value: 'int | float', type: 'hint', file: 'validator.py' }
      ],
      insight: '🤖 Root cause found in routes.py: request.json.get() returns string. Add int() conversion at line 8.',
      flowPath: ['main.py', 'api/routes.py', 'services/payment.py', 'utils/validator.py']
    },
    {
      label: 'Multi-File Fix Applied',
      file: 'api/routes.py',
      line: 7,
      description: 'Type conversion added',
      callStack: ['main.py:6', 'routes.py:9', 'payment.py:5', 'validator.py:3'],
      variables: [
        { name: 'amount', value: '100', type: 'int', file: 'routes.py' }
      ],
      insight: '✓ Fixed! All 4 files analyzed. Type safety restored across entire call chain.',
      flowPath: ['main.py', 'api/routes.py', 'services/payment.py', 'utils/validator.py']
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      if (currentStep < demoSteps.length - 1) {
        const timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 2500);
        return () => clearTimeout(timer);
      } else {
        setIsPlaying(false);
      }
    }
  }, [isPlaying, currentStep]);

  useEffect(() => {
    const step = demoSteps[currentStep];
    setActiveFile(step.file);
    setCallStack(step.callStack);
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
  };

  const getFileIcon = (filename) => {
    if (filename.includes('/')) return <Folder className="w-3 h-3" />;
    return <FileCode className="w-3 h-3" />;
  };

  return (
    <section id="demo" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 text-base px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            Multi-File Debugging Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Debug Across <span className="text-gradient-primary">Your Entire Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch VisualDebug trace a bug through 4 files, analyze the entire call stack, and suggest fixes across your codebase.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Project Structure + Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Project Files Explorer */}
            <Card className="p-4 border-border">
              <div className="flex items-center gap-2 mb-3">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">payment-api/</span>
                <Badge variant="outline" className="ml-auto text-xs border-primary/30">Flask Project</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(projectFiles).map((filename) => (
                  <motion.button
                    key={filename}
                    onClick={() => setActiveFile(filename)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                      activeFile === filename
                        ? 'bg-primary/20 text-primary border border-primary/50'
                        : 'bg-muted/50 hover:bg-muted text-muted-foreground'
                    } ${
                      demoSteps[currentStep]?.flowPath?.includes(filename)
                        ? 'ring-2 ring-accent/50'
                        : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {getFileIcon(filename)}
                    <span className="truncate">{filename}</span>
                    {demoSteps[currentStep]?.file === filename && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </motion.button>
                ))}
              </div>
            </Card>

            {/* Code Editor */}
            <Card className="p-6 border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs">
                    {activeFile}
                  </Badge>
                </div>

                {/* Code Display */}
                <div className="bg-card/50 rounded-xl p-4 font-mono text-xs space-y-1">
                  {projectFiles[activeFile]?.map((line, i) => {
                    const isHighlighted = demoSteps[currentStep]?.file === activeFile && 
                                         demoSteps[currentStep]?.line === i;
                    return (
                      <motion.div
                        key={i}
                        className={`flex items-center gap-3 px-2 py-1 rounded transition-all ${
                          isHighlighted ? 'bg-primary/20 border-l-2 border-primary' : ''
                        }`}
                        animate={{
                          backgroundColor: isHighlighted ? 'hsl(var(--primary) / 0.2)' : 'transparent'
                        }}
                      >
                        <span className="text-muted-foreground w-6 text-right select-none">{i + 1}</span>
                        {isHighlighted && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-primary"
                          />
                        )}
                        <span className={line.trim() === '' ? 'opacity-30' : ''}>
                          {line || ' '}
                        </span>
                      </motion.div>
                    );
                  })}
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
                        {currentStep >= demoSteps.length - 1 ? 'Play Again' : 'Trace Bug'}
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

            {/* Call Stack Across Files */}
            <AnimatePresence>
              {callStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card className="p-6 border-warning/30">
                    <div className="flex items-center gap-2 mb-4">
                      <GitBranch className="w-5 h-5 text-warning" />
                      <h3 className="font-semibold">Call Stack (Multi-File)</h3>
                      <Badge className="ml-auto bg-warning/10 text-warning border-warning/20">
                        {callStack.length} frames
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {callStack.map((frame, i) => {
                        const [file, line] = frame.split(':');
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex items-center gap-3 p-2 rounded ${
                              i === callStack.length - 1
                                ? 'bg-primary/10 border border-primary/30'
                                : 'bg-muted/30'
                            }`}
                          >
                            <span className="text-xs font-mono text-muted-foreground">{i + 1}</span>
                            <FileCode className="w-4 h-4 text-primary" />
                            <span className="font-mono text-sm flex-1">{file}</span>
                            <Badge variant="outline" className="text-xs">Line {line}</Badge>
                            {i === callStack.length - 1 && (
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Steps & Insights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {/* Flow Visualization */}
            <Card className="p-6 border-accent/30">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Execution Flow</h3>
              </div>
              <div className="space-y-2">
                {demoSteps[currentStep]?.flowPath?.map((file, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      i === demoSteps[currentStep]?.flowPath?.length - 1
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono">{file.split('/').pop()}</div>
                      <div className="text-xs text-muted-foreground">{file.includes('/') ? file.split('/')[0] + '/' : ''}</div>
                    </div>
                    {i < demoSteps[currentStep]?.flowPath?.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Variables */}
            <AnimatePresence>
              {variables.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card className="p-6 border-success/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="w-5 h-5 text-success" />
                      <h3 className="font-semibold">Variables</h3>
                    </div>
                    <div className="space-y-2">
                      {variables.map((v, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-2 bg-muted/50 rounded"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-sm text-foreground">{v.name}</span>
                            <Badge variant="outline" className="text-xs border-muted">{v.type}</Badge>
                          </div>
                          <div className="font-mono text-xs text-primary">{v.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">in {v.file}</div>
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
                  <Card className={`p-6 ${
                    currentStep === demoSteps.length - 1 ? 'border-success/30' : 'border-accent/30'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
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
                          <h3 className="font-semibold">AI Analysis</h3>
                          <Sparkles className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{aiInsight}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Debug Steps */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold mb-3">Debug Journey</h3>
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
                  <Card className={`p-4 border-border transition-all duration-300 ${
                    index === currentStep ? 'border-primary/50 glow-primary' : ''
                  } ${
                    index < currentStep ? 'border-success/30 opacity-75' : ''
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        index < currentStep
                          ? 'bg-success/20 text-success'
                          : index === currentStep
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {index < currentStep ? '✓' : index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm mb-1">{step.label}</div>
                        <div className="text-xs text-muted-foreground">{step.description}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                <FileCode className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">Multi-File</div>
                  <div className="text-xs text-muted-foreground">Project Support</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">Cross-File</div>
                  <div className="text-xs text-muted-foreground">AI Analysis</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <GitBranch className="w-8 h-8 text-success" />
                <div>
                  <div className="text-2xl font-bold text-success">Full Stack</div>
                  <div className="text-xs text-muted-foreground">Trace</div>
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
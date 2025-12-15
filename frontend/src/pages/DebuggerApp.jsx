import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/debugger/Header';
import CodeEditor from '../components/debugger/CodeEditor';
import FlowVisualization from '../components/debugger/FlowVisualization';
import AIInsights from '../components/debugger/AIInsights';
import VariableTracker from '../components/debugger/VariableTracker';
import BreakpointManager from '../components/debugger/BreakpointManager';
import { analyzeSampleCode, generateFlowData } from '../utils/codeAnalysis';
import { toast } from 'sonner';

const DebuggerApp = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));`);
  
  const [flowData, setFlowData] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [variables, setVariables] = useState([]);
  const [breakpoints, setBreakpoints] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleAnalyze = useCallback(async () => {
    if (!code.trim()) {
      toast.error('Please enter some code to analyze');
      return;
    }

    setIsAnalyzing(true);
    toast.loading('Analyzing code...');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const flow = generateFlowData(code);
      const insights = analyzeSampleCode(code);
      
      setFlowData(flow);
      setAiInsights(insights);
      
      // Extract variables from code (mock)
      const mockVariables = [
        { name: 'n', value: '5', type: 'number', scope: 'local' },
        { name: 'result', value: '5', type: 'number', scope: 'return' },
      ];
      setVariables(mockVariables);
      
      toast.dismiss();
      toast.success('Analysis complete!');
    } catch (error) {
      toast.dismiss();
      toast.error('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  }, [code]);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    toast.info(`Selected: ${node.data.label}`);
  }, []);

  const handleAddBreakpoint = useCallback((lineNumber) => {
    if (breakpoints.includes(lineNumber)) {
      setBreakpoints(breakpoints.filter(bp => bp !== lineNumber));
      toast.info(`Removed breakpoint at line ${lineNumber}`);
    } else {
      setBreakpoints([...breakpoints, lineNumber]);
      toast.success(`Added breakpoint at line ${lineNumber}`);
    }
  }, [breakpoints]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Code Editor */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-1/3 border-r border-border flex flex-col"
        >
          <CodeEditor 
            code={code}
            onChange={setCode}
            breakpoints={breakpoints}
            onAddBreakpoint={handleAddBreakpoint}
          />
          <BreakpointManager 
            breakpoints={breakpoints}
            onRemove={(line) => handleAddBreakpoint(line)}
          />
        </motion.div>

        {/* Center Panel - Flow Visualization */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 flex flex-col"
        >
          <FlowVisualization 
            flowData={flowData}
            onNodeClick={handleNodeClick}
            selectedNode={selectedNode}
          />
          <VariableTracker variables={variables} />
        </motion.div>

        {/* Right Panel - AI Insights */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-1/4 border-l border-border overflow-hidden"
        >
          <AIInsights insights={aiInsights} isAnalyzing={isAnalyzing} />
        </motion.div>
      </div>
    </div>
  );
};

export default DebuggerApp;
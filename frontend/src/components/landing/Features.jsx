import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Eye, Brain, GitBranch, Zap, Code, Sparkles, FileSearch, Bug,
  Timer, TrendingUp, Shield, Boxes, Network, Cpu, Activity, Target,
  Layers, Database, Workflow, BookOpen, BarChart3, Lock
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Flow Mapping",
      description: "Watch your code execution as an interactive graph. See function calls, loops, and conditionals in real-time with beautiful visualizations.",
      color: "primary",
      badge: "Core"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Code Analysis",
      description: "GPT-5.1 powered insights analyze your code for bugs, performance issues, and suggest optimizations automatically.",
      color: "accent",
      badge: "AI"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Smart Breakpoints",
      description: "Set conditional breakpoints with natural language. Track variable changes and pause execution intelligently.",
      color: "success",
      badge: "Pro"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Variable Tracking",
      description: "Monitor all variables in your scope with live updates. See value changes, types, and memory usage instantly.",
      color: "warning",
      badge: "Core"
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Code Smell Detection",
      description: "Automatically identify anti-patterns, duplicate code, and potential bugs before they cause problems.",
      color: "destructive",
      badge: "AI"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Time-Travel Debugging",
      description: "Step backward through your code execution. Replay bugs and understand what went wrong with precision.",
      color: "primary",
      badge: "Pro"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Performance Profiling",
      description: "Identify bottlenecks with detailed performance metrics. See execution time for every function and operation.",
      color: "accent",
      badge: "Core"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Complexity Analysis",
      description: "Calculate cyclomatic complexity and cognitive load. Get actionable suggestions to simplify your code.",
      color: "success",
      badge: "AI"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Dependency Visualization",
      description: "See how your functions and modules interact. Identify circular dependencies and optimize architecture.",
      color: "primary",
      badge: "Core"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Memory Leak Detection",
      description: "Track memory allocation and spot leaks before deployment. Get detailed heap snapshots and analysis.",
      color: "destructive",
      badge: "Pro"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Live Code Metrics",
      description: "Real-time code quality scores, maintainability index, and technical debt tracking in your editor.",
      color: "warning",
      badge: "Core"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Test Coverage Overlay",
      description: "See which lines are covered by tests directly in your code. Identify gaps in your test suite instantly.",
      color: "success",
      badge: "Pro"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Stack Trace Navigator",
      description: "Navigate stack traces with ease. Jump to any frame, inspect context, and understand errors deeply.",
      color: "accent",
      badge: "Core"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "State Management Inspector",
      description: "Debug Redux, MobX, Zustand and more. See state changes in real-time with time-travel capabilities.",
      color: "primary",
      badge: "Pro"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Async Flow Tracking",
      description: "Visualize Promise chains, async/await flows, and callback hell. Never lose track of asynchronous operations.",
      color: "warning",
      badge: "Core"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Inline Documentation",
      description: "AI-generated explanations for complex code. Understand what any function does without leaving your editor.",
      color: "accent",
      badge: "AI"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Custom Dashboards",
      description: "Create personalized debugging dashboards. Track the metrics that matter most to your project.",
      color: "success",
      badge: "Pro"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security Scanning",
      description: "Detect security vulnerabilities, SQL injection risks, and XSS vulnerabilities as you code.",
      color: "destructive",
      badge: "Pro"
    }
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'AI': return 'bg-accent/10 text-accent border-accent/20';
      case 'Pro': return 'bg-warning/10 text-warning border-warning/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
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
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Feature Set
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to
            <span className="block text-gradient-primary mt-2">Debug Like a Pro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            18+ powerful features designed to transform your debugging workflow. From AI-powered insights to advanced profiling, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <Badge className={`${getBadgeColor(feature.badge)}`}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary/30 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18+</div>
                <div className="text-sm text-muted-foreground">Features</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">1ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-warning mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
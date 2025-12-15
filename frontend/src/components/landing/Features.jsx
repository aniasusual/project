import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Eye, Brain, GitBranch, Zap, Code, Sparkles, FileSearch, Bug,
  Timer, TrendingUp, Shield, Network, Cpu, Activity,
  Play, Video, History, Wand2, MessageSquare, GitCompare,
  Layers, Database, Clock, BarChart3, Lightbulb, Mic,
  Film, FileCode2, Workflow, ArrowRight, Boxes
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('core');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const categories = {
    core: {
      name: 'Multi-File Debugging',
      icon: <Code className="w-5 h-5" />,
      color: 'primary',
      features: [
        {
          icon: <Network className="w-6 h-6" />,
          title: "Cross-File Execution Flow",
          description: "Trace code execution across your entire project. Visualize how functions in different modules call each other in real-time.",
          demo: "main.py → routes.py → services.py",
          badge: "Core"
        },
        {
          icon: <GitBranch className="w-6 h-6" />,
          title: "Multi-File Breakpoints",
          description: "Set breakpoints across multiple files simultaneously. Track execution flow through imports, packages, and modules.",
          demo: "Break in any file in call chain",
          badge: "Core"
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Import Chain Visualization",
          description: "See your entire import dependency graph. Understand which modules depend on what, detect circular imports instantly.",
          demo: "app → models → utils → app ⚠️",
          badge: "Core"
        },
        {
          icon: <History className="w-6 h-6" />,
          title: "Cross-File Time-Travel",
          description: "Step backward through execution across files. Replay any moment in your multi-module execution timeline.",
          demo: "←  Back through 5 files",
          badge: "Pro"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Full Project Stack Trace",
          description: "Navigate call stacks spanning multiple files. Jump between frames across your entire project structure.",
          demo: "app.py:10 → db.py:45 → models.py:23",
          badge: "Core"
        },
        {
          icon: <FileSearch className="w-6 h-6" />,
          title: "Jump to Definition Anywhere",
          description: "Click any function/variable to jump to its definition across files. Works with imports, classes, methods.",
          demo: "process_payment() → services/payment.py:15",
          badge: "Core"
        }
      ]
    },
    ai: {
      name: 'AI-Powered Analysis',
      icon: <Brain className="w-5 h-5" />,
      color: 'accent',
      features: [
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Whole-Project Bug Detective",
          description: "GPT-5.1 analyzes your entire codebase. Identifies bugs that span multiple files and traces root causes across modules.",
          demo: "Scan 50 files → Find type mismatch",
          badge: "AI"
        },
        {
          icon: <Wand2 className="w-6 h-6" />,
          title: "Multi-File Auto-Fix",
          description: "AI suggests fixes across multiple files simultaneously. Refactors imports, updates function signatures project-wide.",
          demo: "Fix in routes.py affects 3 files ✓",
          badge: "AI"
        },
        {
          icon: <Network className="w-6 h-6" />,
          title: "Dependency Impact Analysis",
          description: "AI predicts how changes ripple through your project. Shows which files will be affected before you make changes.",
          demo: "Change models.py → 12 files affected",
          badge: "AI"
        },
        {
          icon: <Lightbulb className="w-6 h-6" />,
          title: "Architecture Suggestions",
          description: "AI analyzes your project structure and suggests refactoring. Detects god classes, tight coupling across files.",
          demo: "Split utils.py → 4 focused modules",
          badge: "AI"
        },
        {
          icon: <FileSearch className="w-6 h-6" />,
          title: "Cross-File Pattern Detection",
          description: "AI finds repeated patterns across your codebase. Suggests extracting common logic into shared modules.",
          demo: "Same logic in 5 files → Extract",
          badge: "AI"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Project-Wide Context Awareness",
          description: "Ask AI about any function and it understands the full context from all files. Explains dependencies and usage.",
          demo: "'Where is this used?' → 8 locations",
          badge: "AI"
        }
      ]
    },
    performance: {
      name: 'Project Performance',
      icon: <Zap className="w-5 h-5" />,
      color: 'warning',
      features: [
        {
          icon: <Timer className="w-6 h-6" />,
          title: "Multi-File Performance Profiling",
          description: "Profile execution time across your entire project. See which modules and functions consume most time.",
          demo: "api/: 150ms, services/: 80ms, db/: 200ms",
          badge: "Pro"
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "Project-Wide Memory Tracking",
          description: "Track memory usage across all modules. Identify which files cause memory leaks in your application.",
          demo: "models.py leaking in loop: +50MB",
          badge: "Pro"
        },
        {
          icon: <Network className="w-6 h-6" />,
          title: "Import Performance Analysis",
          description: "Measure import times for every module. Identify slow imports that delay application startup.",
          demo: "pandas: 800ms ⚠️ Lazy load?",
          badge: "Pro"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Cross-Module Bottleneck Detection",
          description: "AI identifies performance bottlenecks that span multiple files. Suggests architectural optimizations.",
          demo: "3 files calling DB.query() → Cache",
          badge: "AI"
        },
        {
          icon: <Activity className="w-6 h-6" />,
          title: "Full Stack I/O Monitoring",
          description: "Track all I/O operations across files: API calls, DB queries, file reads. See the complete picture.",
          demo: "routes.py → db.py: 15 queries!",
          badge: "Pro"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Package-Level Performance Metrics",
          description: "Compare performance by package/module. Track improvements after refactoring multi-file changes.",
          demo: "api/ pkg: 200ms → 120ms ✓",
          badge: "Pro"
        }
      ]
    },
    collaboration: {
      name: 'Team Collaboration',
      icon: <GitCompare className="w-5 h-5" />,
      color: 'success',
      features: [
        {
          icon: <Film className="w-6 h-6" />,
          title: "Multi-File Session Recording",
          description: "Record debug sessions spanning multiple files. Share entire execution flow with teammates showing all modules.",
          demo: "🔴 Record 8 files → Share project flow",
          badge: "Pro"
        },
        {
          icon: <GitCompare className="w-6 h-6" />,
          title: "Collaborative Project Debugging",
          description: "Debug multi-file projects together in real-time. See teammates navigate across your codebase.",
          demo: "2 users debugging 10 files → synced",
          badge: "Team"
        },
        {
          icon: <Video className="w-6 h-6" />,
          title: "Cross-File Bug Reports",
          description: "Generate bug reports with full context from all affected files. Includes call stacks and file dependencies.",
          demo: "Bug in 3 files → Complete report ✓",
          badge: "Pro"
        },
        {
          icon: <GitBranch className="w-6 h-6" />,
          title: "Project-Wide Git Blame",
          description: "See commit history across all files in call stack. Track who changed what in related modules.",
          demo: "routes.py:10 → @alice, models.py:45 → @bob",
          badge: "Pro"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Cross-File Annotations",
          description: "Leave notes that link across files. Document how changes in one file affect others.",
          demo: "💬 routes.py note → links to services.py",
          badge: "Team"
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Project Debug Configurations",
          description: "Save debug setups for multi-file projects. Share configurations that set breakpoints across modules.",
          demo: "Config: 5 files, 8 breakpoints → Load",
          badge: "Team"
        }
      ]
    },
    advanced: {
      name: 'Enterprise & Advanced',
      icon: <Shield className="w-5 h-5" />,
      color: 'destructive',
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Project-Wide Security Scanning",
          description: "Scan entire codebase for vulnerabilities. Trace SQL injection risks through multiple files from routes to database.",
          demo: "routes.py → db.py: SQL injection path",
          badge: "Pro"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Multi-File Hot Reload",
          description: "Edit multiple files during debug session. All changes hot-reload without losing debug state.",
          demo: "Edit 3 files → All reload → Continue",
          badge: "Pro"
        },
        {
          icon: <Network className="w-6 h-6" />,
          title: "Distributed System Debugging",
          description: "Debug microservices spanning multiple repositories. Trace requests across services and files.",
          demo: "Service A/routes.py → Service B/api.py",
          badge: "Pro"
        },
        {
          icon: <Boxes className="w-6 h-6" />,
          title: "Package Dependency Debugging",
          description: "Debug into third-party packages. Step through site-packages and understand external library behavior.",
          demo: "Your code → requests/ → urllib3/",
          badge: "Pro"
        },
        {
          icon: <Bug className="w-6 h-6" />,
          title: "Cross-File Exception Prediction",
          description: "AI predicts exceptions that could occur across file boundaries. Warns about type mismatches between modules.",
          demo: "routes.py sends str → models.py expects int",
          badge: "AI"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Monorepo Multi-Project Debugging",
          description: "Debug across multiple Python projects in a monorepo. Trace execution through shared packages.",
          demo: "app1/ → shared/ → app2/",
          badge: "Pro"
        }
      ]
    }
  };

  const getCategoryColor = (color) => {
    const colors = {
      primary: 'from-primary to-primary/50',
      accent: 'from-accent to-accent/50',
      warning: 'from-warning to-warning/50',
      success: 'from-success to-success/50',
      destructive: 'from-destructive to-destructive/50'
    };
    return colors[color] || colors.primary;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'AI': return 'bg-accent/10 text-accent border-accent/20';
      case 'Pro': return 'bg-warning/10 text-warning border-warning/20';
      case 'Team': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
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
            30+ Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Features That Make
            <span className="block text-gradient-primary mt-2">Debugging a Breeze</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered insights to real-time collaboration, everything you need for Python debugging.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(categories).map(([key, category]) => (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? 'default' : 'outline'}
                className={`group ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground glow-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <span className={activeCategory === key ? 'text-primary-foreground' : ''}>
                  {category.icon}
                </span>
                <span className="ml-2">{category.name}</span>
                {activeCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories[activeCategory].features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(feature.title)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(categories[activeCategory].color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <CardContent className="p-6 relative">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        animate={{
                          scale: hoveredFeature === feature.title ? 1.1 : 1,
                          rotate: hoveredFeature === feature.title ? 5 : 0
                        }}
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                      >
                        <div className="text-primary">{feature.icon}</div>
                      </motion.div>
                      <Badge className={getBadgeColor(feature.badge)}>
                        {feature.badge}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Demo Preview */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredFeature === feature.title ? 1 : 0,
                        height: hoveredFeature === feature.title ? 'auto' : 0
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                          <Play className="w-3 h-3" />
                          Quick Demo:
                        </div>
                        <code className="text-xs bg-muted/50 px-3 py-2 rounded-lg block font-mono text-primary">
                          {feature.demo}
                        </code>
                      </div>
                    </motion.div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredFeature === feature.title ? 1 : 0,
                        x: hoveredFeature === feature.title ? 0 : -10
                      }}
                      className="absolute bottom-6 right-6"
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Feature Count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary/30 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Features</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">Python</div>
                <div className="text-sm text-muted-foreground">Focused</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">&lt;1ms</div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-warning mb-2">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
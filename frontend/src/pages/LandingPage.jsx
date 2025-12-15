import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Code, 
  Zap, 
  Eye, 
  Brain, 
  GitBranch, 
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Terminal,
  Search,
  Bot,
  Lightbulb
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Flow Mapping",
      description: "See your code execution as an interactive graph. Trace function calls, loops, and conditionals in real-time."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "GPT-5.1 analyzes your code to suggest fixes, optimizations, and detect potential bugs automatically."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Smart Breakpoints",
      description: "Set intelligent breakpoints and step through code visually. Track variable states at every execution point."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Analysis",
      description: "Get instant feedback on code quality, performance bottlenecks, and complexity metrics."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Works with JavaScript, TypeScript, Python, and more. Syntax highlighting for all major languages."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Auto-Refactoring",
      description: "AI suggests and applies code improvements. Clean up code smells with one click."
    }
  ];

  const workflows = [
    {
      step: "01",
      title: "Upload or Paste Code",
      description: "Import your code files or paste directly into the editor",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      step: "02",
      title: "Visualize Execution",
      description: "Watch as the debugger maps out your code's execution flow",
      icon: <Search className="w-5 h-5" />
    },
    {
      step: "03",
      title: "AI Analysis",
      description: "Get intelligent suggestions for bugs, optimizations, and improvements",
      icon: <Bot className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Fix & Improve",
      description: "Apply fixes and refactorings with AI assistance",
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  const stats = [
    { value: "10x", label: "Faster Debugging" },
    { value: "95%", label: "Bug Detection" },
    { value: "<1s", label: "Analysis Time" },
    { value: "50+", label: "Languages" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">VisualDebug</span>
          </div>
          <Link to="/debugger">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              Launch Debugger
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Debugging
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Debug Smarter,
                <span className="block text-gradient-primary">Not Harder</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Visualize your code execution flow with AI-powered insights. Find bugs faster, understand complex logic instantly, and improve code quality automatically.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/debugger">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 glow-primary group">
                    <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Try Live Demo
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:border-primary hover:bg-primary/10">
                  Watch Video
                </Button>
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden gradient-border glow-primary-strong animate-glow">
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NjU4MDc0OTl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Code Visualization"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass rounded-xl p-4 border border-primary/20 glow-primary"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Bugs Found</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-gradient-primary">Debug Better</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make debugging intuitive, fast, and efficient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Workflow
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Debug in <span className="text-gradient-primary">Four Simple Steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-bold text-primary/20">{workflow.step}</span>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <div className="text-primary">{workflow.icon}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{workflow.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {workflow.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < workflows.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center gradient-border glow-primary-strong"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-primary">Debugging Workflow?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who debug smarter with VisualDebug.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/debugger">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 glow-primary">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Launch Debugger
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-gradient-primary">VisualDebug</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 VisualDebug. Built with AI-powered technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
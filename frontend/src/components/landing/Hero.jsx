import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Download, PlayCircle, ArrowRight, Sparkles, Code2, Zap, Eye } from 'lucide-react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const [init, setInit] = React.useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00BFFF' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00BFFF',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles id="tsparticles" options={particlesConfig} className="w-full h-full" />
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                The Future of Code Debugging
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Debug Like a
              <span className="block text-gradient-primary mt-2">Superhero</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              Stop wasting hours tracing bugs through files. See your code's execution flow visually, get AI-powered root cause analysis, and fix complex multi-file bugs in minutes instead of days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 glow-primary group">
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Install Extension
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:border-primary hover:bg-primary/10">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { icon: <Download />, value: '100K+', label: 'Downloads' },
                { icon: <Zap />, value: '4.9/5', label: 'Rating' },
                { icon: <Eye />, value: '50K+', label: 'Active Users' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative perspective-1000">
              {/* Main Screen */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden gradient-border glow-primary-strong"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NjU4MDc0OTl8MA&ixlib=rb-4.1.0&q=85"
                  alt="VisualDebug Interface"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating UI Elements */}
                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 glass rounded-lg p-4 border border-primary/30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold">Live Analysis</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-4 left-4 glass rounded-lg p-3 border border-success/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-semibold text-success">Debugging Active</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 top-20 w-48 glass rounded-xl p-4 border border-border glow-primary hidden lg:block"
                style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
              >
                <div className="text-xs text-muted-foreground mb-2">Execution Time</div>
                <div className="text-2xl font-bold text-primary">0.23ms</div>
                <div className="h-16 mt-3 flex items-end gap-1">
                  {[40, 70, 50, 90, 60, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.1 + 1.5, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-8 bottom-20 w-52 glass rounded-xl p-4 border border-border glow-primary hidden lg:block"
                style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
              >
                <div className="text-xs text-muted-foreground mb-3">Variables Tracked</div>
                <div className="space-y-2">
                  {['counter', 'isActive', 'response'].map((variable, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + 2 }}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-mono text-foreground">{variable}</span>
                      <span className="text-primary">✓</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Code, Play, Home, Download, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ onAnalyze, isAnalyzing }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="h-16 border-b border-border glass flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
            <Code className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gradient-primary">VisualDebug</span>
        </Link>
        
        <div className="h-6 w-px bg-border" />
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono">Debugger</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={onAnalyze}
          disabled={isAnalyzing}
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
        >
          {isAnalyzing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Play className="w-4 h-4 mr-2" />
              </motion.div>
              Analyzing...
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Analyze Code
            </>
          )}
        </Button>
        
        <Button variant="outline" size="icon" className="border-border hover:border-primary hover:bg-primary/10">
          <Download className="w-4 h-4" />
        </Button>
        
        <Button variant="outline" size="icon" className="border-border hover:border-primary hover:bg-primary/10">
          <Settings className="w-4 h-4" />
        </Button>
        
        <Link to="/">
          <Button variant="outline" size="icon" className="border-border hover:border-primary hover:bg-primary/10">
            <Home className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Circle, X } from 'lucide-react';
import { toast } from 'sonner';

const BreakpointManager = ({ breakpoints, onRemove }) => {
  if (!breakpoints || breakpoints.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-24 border-t border-border bg-card/50"
    >
      <div className="h-full flex flex-col">
        <div className="h-10 border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4 text-destructive fill-destructive" />
            <span className="text-sm font-medium">Breakpoints</span>
          </div>
          <Badge variant="outline" className="border-destructive/30 text-destructive">
            {breakpoints.length}
          </Badge>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-2 p-3 h-full items-center">
            <AnimatePresence>
              {breakpoints.sort((a, b) => a - b).map((line) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-lg px-3 py-1.5 group hover:bg-destructive/20 transition-colors">
                    <Circle className="w-3 h-3 text-destructive fill-destructive" />
                    <span className="text-sm font-mono text-foreground">Line {line}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => {
                        onRemove(line);
                        toast.info(`Removed breakpoint at line ${line}`);
                      }}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BreakpointManager;
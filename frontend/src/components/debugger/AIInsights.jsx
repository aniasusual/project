import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '../ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Brain, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
  Zap,
  TrendingUp,
  Code2,
  Sparkles
} from 'lucide-react';
import { Separator } from '../ui/separator';

const AIInsights = ({ insights, isAnalyzing }) => {
  if (isAnalyzing) {
    return (
      <div className="h-full flex flex-col">
        <div className="h-12 border-b border-border flex items-center px-4 bg-card/50">
          <Brain className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm font-medium">AI Insights</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-primary border-t-transparent"
            />
            <p className="text-sm text-muted-foreground">AI is analyzing your code...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!insights) {
    return (
      <div className="h-full flex flex-col">
        <div className="h-12 border-b border-border flex items-center px-4 bg-card/50">
          <Brain className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm font-medium">AI Insights</span>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            >
              <Brain className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-sm font-semibold mb-2">No Insights Yet</h3>
            <p className="text-xs text-muted-foreground">
              Analyze your code to get AI-powered insights and suggestions
            </p>
          </div>
        </div>
      </div>
    );
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'info':
        return <Lightbulb className="w-4 h-4 text-primary" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-success" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error':
        return 'border-destructive/50 bg-destructive/5';
      case 'warning':
        return 'border-warning/50 bg-warning/5';
      case 'info':
        return 'border-primary/50 bg-primary/5';
      default:
        return 'border-success/50 bg-success/5';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-card/50">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">AI Insights</span>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20">
          <Sparkles className="w-3 h-3 mr-1" />
          GPT-5.1
        </Badge>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-primary/30 glow-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Complexity</span>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {insights.complexity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Quality Score</span>
                  <Badge variant="outline" className="border-success/30 text-success">
                    {insights.qualityScore}/100
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Issues Found</span>
                  <Badge variant="outline" className="border-warning/30 text-warning">
                    {insights.issues.length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Separator />

          {/* Issues */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary" />
              Issues & Suggestions
            </h3>
            <AnimatePresence>
              <div className="space-y-3">
                {insights.issues.map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`border ${getSeverityColor(issue.severity)}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-2">
                          {getSeverityIcon(issue.severity)}
                          <div className="flex-1">
                            <CardTitle className="text-xs font-semibold mb-1">
                              {issue.title}
                            </CardTitle>
                            <p className="text-xs text-muted-foreground">
                              {issue.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      {issue.suggestion && (
                        <CardContent className="pt-0">
                          <div className="text-xs bg-muted/50 rounded-md p-2">
                            <div className="flex items-center gap-1 mb-1 text-primary">
                              <Lightbulb className="w-3 h-3" />
                              <span className="font-medium">Suggestion:</span>
                            </div>
                            <p className="text-muted-foreground">{issue.suggestion}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          <Separator />

          {/* Optimizations */}
          {insights.optimizations && insights.optimizations.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Optimization Opportunities
              </h3>
              <div className="space-y-2">
                {insights.optimizations.map((opt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (insights.issues.length + index) * 0.1 }}
                    className="text-xs p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <Code2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{opt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Action Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Sparkles className="w-4 h-4 mr-2" />
            Apply AI Suggestions
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AIInsights;
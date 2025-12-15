import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Database, Hash, Type } from 'lucide-react';

const VariableTracker = ({ variables }) => {
  if (!variables || variables.length === 0) {
    return null;
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'number':
        return <Hash className="w-3 h-3" />;
      case 'string':
        return <Type className="w-3 h-3" />;
      default:
        return <Database className="w-3 h-3" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'number':
        return 'border-primary/30 text-primary bg-primary/5';
      case 'string':
        return 'border-success/30 text-success bg-success/5';
      case 'boolean':
        return 'border-warning/30 text-warning bg-warning/5';
      default:
        return 'border-muted text-muted-foreground bg-muted/5';
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-40 border-t border-border bg-card/50"
    >
      <div className="h-full flex flex-col">
        <div className="h-10 border-b border-border flex items-center px-4">
          <Database className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm font-medium">Variable Tracker</span>
          <Badge variant="outline" className="ml-auto border-primary/30 text-primary">
            {variables.length} variables
          </Badge>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-3 p-4 h-full">
            {variables.map((variable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Card className="w-48 h-full border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xs font-mono truncate">
                        {variable.name}
                      </CardTitle>
                      {getTypeIcon(variable.type)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm font-mono bg-muted/50 rounded px-2 py-1 truncate">
                      {variable.value}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${getTypeColor(variable.type)}`}>
                        {variable.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-border">
                        {variable.scope}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VariableTracker;
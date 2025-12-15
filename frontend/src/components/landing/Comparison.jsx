import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Check, X, Zap } from 'lucide-react';

const Comparison = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { name: 'Visual Flow Mapping', visualDebug: true, traditional: false, ide: 'Limited' },
    { name: 'AI-Powered Insights', visualDebug: true, traditional: false, ide: false },
    { name: 'Time-Travel Debugging', visualDebug: true, traditional: false, ide: false },
    { name: 'Real-Time Collaboration', visualDebug: true, traditional: false, ide: false },
    { name: 'Performance Profiling', visualDebug: true, traditional: 'Basic', ide: true },
    { name: 'Memory Leak Detection', visualDebug: true, traditional: 'Manual', ide: 'Limited' },
    { name: 'Stack Trace Navigation', visualDebug: true, traditional: true, ide: true },
    { name: 'Variable Watching', visualDebug: true, traditional: true, ide: true },
    { name: 'Breakpoint Management', visualDebug: true, traditional: true, ide: true },
    { name: 'Code Smell Detection', visualDebug: true, traditional: false, ide: false },
    { name: 'Async Flow Tracking', visualDebug: true, traditional: false, ide: 'Limited' },
    { name: 'Custom Dashboards', visualDebug: true, traditional: false, ide: false },
  ];

  const renderCell = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-success" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-muted-foreground" />;
    } else {
      return <span className="text-xs text-muted-foreground">{value}</span>;
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Comparison
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">VisualDebug?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we compare to traditional debuggers and built-in IDE tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Card className="overflow-hidden border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-6 text-left font-semibold">Feature</th>
                    <th className="p-6 text-center">
                      <div className="inline-flex flex-col items-center">
                        <div className="font-bold text-primary mb-1">VisualDebug</div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">Our Tool</Badge>
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex flex-col items-center">
                        <div className="font-semibold text-muted-foreground mb-1">Traditional</div>
                        <Badge variant="outline" className="border-muted">Console/CLI</Badge>
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex flex-col items-center">
                        <div className="font-semibold text-muted-foreground mb-1">IDE Built-in</div>
                        <Badge variant="outline" className="border-muted">Basic Tools</Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.05 + 0.4 }}
                      className="border-b border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-6 font-medium">{feature.name}</td>
                      <td className="p-6 text-center bg-primary/5">
                        {renderCell(feature.visualDebug)}
                      </td>
                      <td className="p-6 text-center">
                        {renderCell(feature.traditional)}
                      </td>
                      <td className="p-6 text-center">
                        {renderCell(feature.ide)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
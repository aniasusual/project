import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Code2, Users, Rocket, GraduationCap, Building2, Microscope
} from 'lucide-react';

const UseCases = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const useCases = [
    {
      id: 'fullstack',
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Perfect for developers working across the entire stack',
      image: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBkZWJ1Z2dpbmd8ZW58MHx8fHwxNzY1ODEzMTkyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Debug frontend React/Vue/Angular components',
        'Trace API calls and backend logic simultaneously',
        'Monitor database queries in real-time',
        'Visualize microservice interactions',
        'Track async operations across the stack'
      ],
      stats: { users: '45K+', satisfaction: '4.9/5', timesSaved: '70%' }
    },
    {
      id: 'team',
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Enhance team productivity with shared debugging sessions',
      image: 'https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwwfHx8fDE3NjU4MTMxOTd8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Share debugging sessions with teammates',
        'Collaborative breakpoint management',
        'Real-time code annotations and comments',
        'Export debug reports for code reviews',
        'Team performance analytics dashboard'
      ],
      stats: { users: '2K+ Teams', satisfaction: '4.8/5', timesSaved: '60%' }
    },
    {
      id: 'startup',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Startup MVP Development',
      description: 'Ship faster with rapid debugging and iteration',
      image: 'https://images.unsplash.com/photo-1624948384140-e48e47087fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxjb2RlJTIwd29ya3NwYWNlfGVufDB8fHx8MTc2NTgxMzIwMnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Rapid prototyping with instant feedback',
        'Catch bugs before they reach production',
        'Optimize performance for scale',
        'Security vulnerability scanning',
        'Technical debt tracking'
      ],
      stats: { users: '5K+ Startups', satisfaction: '5.0/5', timesSaved: '80%' }
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Education',
      description: 'Perfect for students and coding bootcamps',
      image: 'https://images.unsplash.com/photo-1763568258388-25a20ddd8a95?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBkZWJ1Z2dpbmd8ZW58MHx8fHwxNzY1ODEzMTkyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Visualize code execution for better understanding',
        'AI tutor explains complex debugging concepts',
        'Track learning progress with metrics',
        'Interactive debugging challenges',
        'Free tier for students and educators'
      ],
      stats: { users: '20K+ Students', satisfaction: '4.9/5', timesSaved: 'N/A' }
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Enterprise Solutions',
      description: 'Scale debugging across large organizations',
      image: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBkZWJ1Z2dpbmd8ZW58MHx8fHwxNzY1ODEzMTkyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'SSO and advanced access controls',
        'Compliance with GDPR, SOC2, HIPAA',
        'On-premise deployment options',
        'Custom integrations and workflows',
        'Dedicated support and training'
      ],
      stats: { users: '500+ Companies', satisfaction: '4.9/5', timesSaved: '65%' }
    },
    {
      id: 'research',
      icon: <Microscope className="w-6 h-6" />,
      title: 'Research & Algorithm Development',
      description: 'Optimize complex algorithms and data structures',
      image: 'https://images.unsplash.com/photo-1624948384140-e48e47087fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxjb2RlJTIwd29ya3NwYWNlfGVufDB8fHx8MTc2NTgxMzIwMnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Deep algorithm performance analysis',
        'Memory usage and allocation tracking',
        'Big O complexity visualization',
        'Data structure state inspection',
        'Benchmark and compare implementations'
      ],
      stats: { users: '3K+ Researchers', satisfaction: '4.8/5', timesSaved: '75%' }
    }
  ];

  return (
    <section id="usecases" className="py-32 px-6 bg-muted/30 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
            Use Cases
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for <span className="text-gradient-primary">Every Developer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a solo developer, startup team, or enterprise organization, VisualDebug adapts to your workflow.
          </p>
        </motion.div>

        <Tabs defaultValue="fullstack" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 h-auto gap-2 bg-transparent">
            {useCases.map((useCase, index) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:glow-primary"
              >
                <div>{useCase.icon}</div>
                <span className="text-xs font-medium">{useCase.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase, index) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-border overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground">{useCase.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {useCase.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-primary">{useCase.stats.users}</div>
                          <div className="text-xs text-muted-foreground">Active Users</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success">{useCase.stats.satisfaction}</div>
                          <div className="text-xs text-muted-foreground">Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">{useCase.stats.timesSaved}</div>
                          <div className="text-xs text-muted-foreground">Time Saved</div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
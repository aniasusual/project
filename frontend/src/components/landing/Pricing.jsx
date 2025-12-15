import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Check, Sparkles, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const plans = [
    {
      name: 'Free',
      icon: <Sparkles className="w-6 h-6" />,
      price: '0',
      description: 'Perfect for students and hobbyists',
      features: [
        'Visual flow mapping (basic)',
        'Up to 100 debug sessions/month',
        'Basic AI insights',
        'Single user',
        'Community support',
        '10+ language support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      icon: <Rocket className="w-6 h-6" />,
      price: '29',
      description: 'For professional developers',
      features: [
        'Everything in Free',
        'Unlimited debug sessions',
        'Advanced AI analysis with GPT-5.1',
        'Time-travel debugging',
        'Performance profiling',
        'Memory leak detection',
        'Priority email support',
        '50+ language support',
        'Custom dashboards'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      icon: <Crown className="w-6 h-6" />,
      price: '99',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Real-time collaboration',
        'Shared debugging sessions',
        'Team analytics dashboard',
        'SSO integration',
        'Priority chat support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-success/10 text-success border-success/20 text-base px-4 py-2">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, <span className="text-gradient-primary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. All plans include 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={plan.popular ? 'md:-mt-4' : ''}
            >
              <Card className={`h-full relative overflow-hidden ${
                plan.popular
                  ? 'border-primary glow-primary-strong scale-105'
                  : 'border-border'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                )}
                
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-8">
                  <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                    plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gradient-primary">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground glow-primary'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 pt-6">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-primary/20' : 'bg-muted'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom enterprise plan?
          </p>
          <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10">
            Contact Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
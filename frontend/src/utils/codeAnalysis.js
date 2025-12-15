import { MarkerType } from 'reactflow';

// Mock AI analysis - In production, this would call the backend API with GPT-5.1
export const analyzeSampleCode = (code) => {
  // Simulate AI insights
  const insights = {
    complexity: 'Medium',
    qualityScore: 78,
    issues: [],
    optimizations: []
  };

  // Detect recursive patterns
  if (code.includes('function') && /\b(\w+)\s*\([^)]*\)[^{]*{[^}]*\1\s*\(/.test(code)) {
    insights.issues.push({
      severity: 'warning',
      title: 'Recursive Function Detected',
      description: 'This function calls itself recursively. Consider memoization for better performance.',
      suggestion: 'Add memoization to cache results and avoid redundant calculations.'
    });
    insights.optimizations.push('Consider using dynamic programming or memoization to optimize recursive calls');
  }

  // Detect console.log
  if (code.includes('console.log')) {
    insights.issues.push({
      severity: 'info',
      title: 'Console Statements Found',
      description: 'Console statements detected. Remove before production deployment.',
      suggestion: 'Use a proper logging library for production environments.'
    });
  }

  // Check for variable naming
  if (/\b[a-z]\b/.test(code) && code.split('\n').length > 5) {
    insights.issues.push({
      severity: 'info',
      title: 'Single Letter Variables',
      description: 'Consider using descriptive variable names for better code readability.',
      suggestion: 'Rename single-letter variables (except loop counters) to meaningful names.'
    });
  }

  // Check for missing error handling
  if (!code.includes('try') && !code.includes('catch')) {
    insights.optimizations.push('Add error handling with try-catch blocks for robust code');
  }

  // Check code length
  const lines = code.split('\n').length;
  if (lines > 50) {
    insights.issues.push({
      severity: 'warning',
      title: 'Long Function',
      description: 'This function is quite long. Consider breaking it into smaller functions.',
      suggestion: 'Refactor into smaller, more focused functions following the Single Responsibility Principle.'
    });
  }

  // Add generic good practices
  if (insights.issues.length === 0) {
    insights.issues.push({
      severity: 'success',
      title: 'Code Looks Good!',
      description: 'No major issues detected. Code follows good practices.',
    });
    insights.qualityScore = 92;
  }

  insights.optimizations.push('Consider adding comprehensive unit tests for this function');
  insights.optimizations.push('Document complex logic with inline comments for maintainability');

  return insights;
};

// Generate flow visualization data from code
export const generateFlowData = (code) => {
  const nodes = [];
  const edges = [];
  let nodeId = 0;
  let yPosition = 50;

  // Parse the code and create nodes
  const lines = code.split('\n');
  
  // Start node
  nodes.push({
    id: `node-${nodeId}`,
    type: 'input',
    position: { x: 250, y: yPosition },
    data: { 
      label: 'Start',
      line: 1
    },
    style: {
      background: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: '2px solid hsl(var(--primary))',
      borderRadius: '12px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '600',
    }
  });
  const startNodeId = nodeId;
  nodeId++;
  yPosition += 100;

  // Analyze code structure
  let previousNodeId = startNodeId;
  let inFunction = false;
  let functionName = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect function declaration
    if (line.includes('function')) {
      const match = line.match(/function\s+(\w+)/);
      if (match) {
        functionName = match[1];
        inFunction = true;
        
        nodes.push({
          id: `node-${nodeId}`,
          position: { x: 250, y: yPosition },
          data: { 
            label: `Function: ${functionName}`,
            line: i + 1
          },
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '2px solid hsl(var(--primary))',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '13px',
          }
        });

        edges.push({
          id: `edge-${previousNodeId}-${nodeId}`,
          source: `node-${previousNodeId}`,
          target: `node-${nodeId}`,
          type: 'smoothstep',
          animated: true,
          style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
          markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
        });

        previousNodeId = nodeId;
        nodeId++;
        yPosition += 100;
      }
    }
    
    // Detect conditionals
    if (line.includes('if')) {
      nodes.push({
        id: `node-${nodeId}`,
        position: { x: 250, y: yPosition },
        data: { 
          label: 'Condition Check',
          line: i + 1
        },
        style: {
          background: 'hsl(var(--warning) / 0.2)',
          color: 'hsl(var(--foreground))',
          border: '2px solid hsl(var(--warning))',
          borderRadius: '50%',
          padding: '20px',
          fontSize: '12px',
          width: '140px',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      });

      edges.push({
        id: `edge-${previousNodeId}-${nodeId}`,
        source: `node-${previousNodeId}`,
        target: `node-${nodeId}`,
        type: 'smoothstep',
        animated: true,
        style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
      });

      // Create branch nodes
      const trueNodeId = nodeId + 1;
      const falseNodeId = nodeId + 2;

      // True branch
      nodes.push({
        id: `node-${trueNodeId}`,
        position: { x: 100, y: yPosition + 100 },
        data: { 
          label: 'True Branch',
          line: i + 1
        },
        style: {
          background: 'hsl(var(--success) / 0.2)',
          color: 'hsl(var(--foreground))',
          border: '2px solid hsl(var(--success))',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '12px',
        }
      });

      edges.push({
        id: `edge-${nodeId}-${trueNodeId}`,
        source: `node-${nodeId}`,
        target: `node-${trueNodeId}`,
        type: 'smoothstep',
        label: 'true',
        style: { stroke: 'hsl(var(--success))', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--success))' },
      });

      // False branch
      nodes.push({
        id: `node-${falseNodeId}`,
        position: { x: 400, y: yPosition + 100 },
        data: { 
          label: 'False Branch',
          line: i + 1
        },
        style: {
          background: 'hsl(var(--muted))',
          color: 'hsl(var(--foreground))',
          border: '2px solid hsl(var(--border))',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '12px',
        }
      });

      edges.push({
        id: `edge-${nodeId}-${falseNodeId}`,
        source: `node-${nodeId}`,
        target: `node-${falseNodeId}`,
        type: 'smoothstep',
        label: 'false',
        style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--muted-foreground))' },
      });

      previousNodeId = nodeId;
      nodeId = falseNodeId + 1;
      yPosition += 200;
    }
    
    // Detect return statements
    if (line.includes('return')) {
      nodes.push({
        id: `node-${nodeId}`,
        position: { x: 250, y: yPosition },
        data: { 
          label: 'Return Result',
          line: i + 1
        },
        style: {
          background: 'hsl(var(--accent))',
          color: 'hsl(var(--accent-foreground))',
          border: '2px solid hsl(var(--accent))',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '13px',
        }
      });

      edges.push({
        id: `edge-${previousNodeId}-${nodeId}`,
        source: `node-${previousNodeId}`,
        target: `node-${nodeId}`,
        type: 'smoothstep',
        animated: true,
        style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
      });

      previousNodeId = nodeId;
      nodeId++;
      yPosition += 100;
    }

    // Detect recursive calls
    if (inFunction && functionName && line.includes(functionName + '(')) {
      const recursiveNodeId = nodeId;
      nodes.push({
        id: `node-${recursiveNodeId}`,
        position: { x: 450, y: yPosition - 50 },
        data: { 
          label: `Recursive Call: ${functionName}`,
          line: i + 1
        },
        style: {
          background: 'hsl(var(--warning) / 0.2)',
          color: 'hsl(var(--foreground))',
          border: '2px dashed hsl(var(--warning))',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '12px',
        }
      });

      edges.push({
        id: `edge-${previousNodeId}-${recursiveNodeId}`,
        source: `node-${previousNodeId}`,
        target: `node-${recursiveNodeId}`,
        type: 'smoothstep',
        animated: true,
        label: 'recursive',
        style: { stroke: 'hsl(var(--warning))', strokeWidth: 2, strokeDasharray: '5,5' },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--warning))' },
      });

      nodeId++;
    }
  }

  // End node
  nodes.push({
    id: `node-${nodeId}`,
    type: 'output',
    position: { x: 250, y: yPosition },
    data: { 
      label: 'End',
      line: lines.length
    },
    style: {
      background: 'hsl(var(--success))',
      color: 'hsl(var(--primary-foreground))',
      border: '2px solid hsl(var(--success))',
      borderRadius: '12px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '600',
    }
  });

  edges.push({
    id: `edge-${previousNodeId}-${nodeId}`,
    source: `node-${previousNodeId}`,
    target: `node-${nodeId}`,
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  });

  return { nodes, edges };
};

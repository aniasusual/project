import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { GitBranch, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';

const nodeTypes = {};

const FlowVisualization = ({ flowData, onNodeClick, selectedNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(flowData?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowData?.edges || []);

  React.useEffect(() => {
    if (flowData) {
      setNodes(flowData.nodes);
      setEdges(flowData.edges);
    }
  }, [flowData, setNodes, setEdges]);

  const handleNodeClick = useCallback(
    (event, node) => {
      if (onNodeClick) {
        onNodeClick(node);
      }
    },
    [onNodeClick]
  );

  return (
    <div className="flex-1 relative bg-background">
      <div className="absolute top-4 left-4 z-10 glass rounded-lg px-4 py-2 border border-border">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Execution Flow</span>
          {flowData && (
            <Badge variant="outline" className="ml-2 border-primary/30 text-primary">
              {nodes.length} nodes
            </Badge>
          )}
        </div>
      </div>

      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 z-10 glass rounded-lg p-4 border border-primary/50 glow-primary max-w-xs"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Selected Node</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div><span className="text-foreground font-medium">Type:</span> {selectedNode.type}</div>
            <div><span className="text-foreground font-medium">Label:</span> {selectedNode.data.label}</div>
            {selectedNode.data.line && (
              <div><span className="text-foreground font-medium">Line:</span> {selectedNode.data.line}</div>
            )}
          </div>
        </motion.div>
      )}

      {!flowData ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            >
              <GitBranch className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">No Flow Data</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Click "Analyze Code" to visualize the execution flow of your code
            </p>
          </div>
        </div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
          className="bg-background"
        >
          <Background color="hsl(var(--border))" gap={16} size={1} />
          <Controls className="bg-card border border-border rounded-lg" />
          <MiniMap
            className="bg-card border border-border rounded-lg"
            nodeColor={(node) => {
              if (node.type === 'input') return 'hsl(var(--primary))';
              if (node.type === 'output') return 'hsl(var(--success))';
              return 'hsl(var(--muted))';
            }}
          />
        </ReactFlow>
      )}
    </div>
  );
};

export default FlowVisualization;
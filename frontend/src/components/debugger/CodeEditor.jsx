import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Upload, FileCode, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const CodeEditor = ({ code, onChange, breakpoints, onAddBreakpoint }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target?.result || '');
        toast.success(`Loaded ${file.name}`);
      };
      reader.readAsText(file);
    }
  };

  const codeLines = code.split('\n');

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-card/50">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Code Editor</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="file-upload">
            <Button variant="ghost" size="sm" className="cursor-pointer" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </span>
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button variant="ghost" size="sm" onClick={handleCopy}>
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-success" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="flex-1 overflow-hidden mt-0">
          <textarea
            value={code}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-full p-4 bg-background text-foreground font-mono text-sm resize-none focus:outline-none border-0"
            placeholder="Paste your code here..."
            spellCheck={false}
          />
        </TabsContent>

        <TabsContent value="preview" className="flex-1 overflow-auto mt-0">
          <div className="relative">
            {/* Line numbers with breakpoint toggles */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-card/50 border-r border-border flex flex-col text-center text-xs text-muted-foreground select-none">
              {codeLines.map((_, index) => {
                const lineNumber = index + 1;
                const hasBreakpoint = breakpoints.includes(lineNumber);
                return (
                  <motion.button
                    key={lineNumber}
                    onClick={() => onAddBreakpoint(lineNumber)}
                    className={`h-6 flex items-center justify-center hover:bg-muted/50 transition-colors ${
                      hasBreakpoint ? 'bg-destructive/20 text-destructive' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {hasBreakpoint ? '●' : lineNumber}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Code preview */}
            <div className="pl-12">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  background: 'transparent',
                  fontSize: '0.875rem',
                }}
                showLineNumbers={false}
                wrapLines={true}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeEditor;
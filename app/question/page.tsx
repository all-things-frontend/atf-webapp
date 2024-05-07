import { Header } from '@/components/Header';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditor from '@/components/CodeEditor';

export default function Question() {
  return (
    <div>
      <Header />
      <ResizablePanelGroup direction="horizontal" className="w-xl rounded-lg">
        <ResizablePanel defaultSize={30}></ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

/**
 1. for solutions use the - non editable component 
 2. Read more  - https://www.joshwcomeau.com/react/next-level-playground/
 */

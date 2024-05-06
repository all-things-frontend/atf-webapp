"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackThemeProp,
  SandpackPredefinedTheme,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function CodeEditor() {
  const { theme } = useTheme();
  const myTheme: SandpackThemeProp = theme as SandpackPredefinedTheme;

  const styles = { height: "calc(100vh - 100px)" };

  return (
    <div>
      <SandpackProvider template="react" theme={myTheme}>
        <SandpackLayout>
          <ResizablePanelGroup direction="horizontal" className="w-xl">
            <ResizablePanel defaultSize={20}>
              <SandpackFileExplorer style={styles} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <SandpackCodeEditor
                showLineNumbers
                showInlineErrors
                wrapContent
                showTabs
                closableTabs
                style={styles}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <SandpackPreview
                showNavigator
                showOpenInCodeSandbox={false}
                style={styles}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

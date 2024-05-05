"use client";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

export default function CodeEditor() {
  return (
    <div className="p-10">
      <SandpackProvider template="react" theme={"dark"}>
        <SandpackLayout>
          <SandpackFileExplorer className="!h-[500px]" />
          <SandpackCodeEditor
            showLineNumbers
            showInlineErrors
            wrapContent
            showTabs
            closableTabs
            className="!h-[500px]"
          />
          <SandpackPreview
            showNavigator
            showOpenInCodeSandbox={false}
            className="!h-[500px]"
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

interface Window {
  titleBar: {
    minimize: () => void;
    maximize: () => void;
    restore: () => void;
    close: () => void;
    onMaximize: (callback: (event: Electron.IpcRendererEvent) => void) => void;
    onRestore: (callback: (event: Electron.IpcRendererEvent) => void) => void;
  };
}

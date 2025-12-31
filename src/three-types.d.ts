declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
    }
    // Also include ThreeElements just in case, but rely on manual 'any' for the failing ones
    // interface IntrinsicElements extends ThreeElements {}
  }
}

export {}

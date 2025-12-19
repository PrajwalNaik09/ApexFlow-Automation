import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

declare global {
  // Fix for custom element type errors
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'loading-anim-type'?: string;
      };
      // Allow any other element to prevent errors with standard HTML tags if types are missing
      [elemName: string]: any;
    }
  }

  // Fix for process.env type safety
  // We extend the existing NodeJS.ProcessEnv instead of redeclaring the global process variable
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}
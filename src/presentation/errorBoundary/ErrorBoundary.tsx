/* eslint-disable no-console */
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public errorComponent = () => (
    <>
      <h1> There is some problem </h1>
      <p> Please try again</p>
      {this.props.children}
    </>
  );

  public render() {
    if (this.state.hasError) {
      return this.errorComponent();
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

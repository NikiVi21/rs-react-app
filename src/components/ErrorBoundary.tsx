import { Component, ReactNode } from "react";
import ErrorPage from "./ErrorPage";

interface ErrorBoundaryProps {
  children?: ReactNode;
}
interface ErrorBoundaryState {
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(error.message);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorPage message={error.message} />;
    }
    return this.props.children;
  }
}

import { Component } from "react";
import styles from "./Results/Results.module.css";

interface ErrorPageProps {
  message: string;
  returnUrl?: string;
  returnUrlText?: string;
}

class ErrorPage extends Component<ErrorPageProps> {
  render() {
    const { message } = this.props;

    return (
      <div className={styles.container}>
        <p>{message}</p>
        <p>ErrorBoundary page</p>
        <a href={""}>Back</a>
      </div>
    );
  }
}

export default ErrorPage;

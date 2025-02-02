import { Component } from "react";

interface ErrorPageProps {
  message: string;
  returnUrl?: string;
  returnUrlText?: string;
}

class ErrorPage extends Component<ErrorPageProps> {
  render() {
    const { message } = this.props;

    return (
      <div>
        <p>{message}</p>
        <p>Error error</p>
        <a href={""}>Back</a>
      </div>
    );
  }
}

export default ErrorPage;

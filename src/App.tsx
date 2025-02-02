import { Component } from "react";
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MainPage></MainPage>
      </ErrorBoundary>
    );
  }
}

import { Component } from "react";
import Search from "./TopControls/Search/Search";
import { Results } from "./Results/Results";

interface MainPageComponentState {
  repositories: [];
  error: string;
  loading: boolean;
  isErrorHandle: boolean;
}

class MainPage extends Component<object, MainPageComponentState> {
  constructor(props: object) {
    super(props);
    this.state = {
      repositories: [],
      error: "",
      loading: false,
      isErrorHandle: false,
    };
    this.onSearch = this.onSearch.bind(this);
  }

  async onSearch(user: string) {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=5&page=1`
      );
      const res = await response.json();
      this.setState({
        loading: false,
        repositories: res,
      });
    } catch (error) {
      this.setState({
        loading: false,
        repositories: [],
        error: error instanceof Error ? error.message : "unknown error",
      });
    }
  }

  onError() {
    this.setState({ isErrorHandle: true });
  }

  render() {
    const { repositories, error, loading, isErrorHandle } = this.state;

    if (isErrorHandle) {
      throw new Error("Error");
    }

    return (
      <div>
        <header>
          <Search onSearch={this.onSearch} loading={loading}></Search>
        </header>
        <main>
          <Results
            repositories={repositories}
            error={error}
            loading={loading}
          ></Results>
        </main>
        <footer>
          <button onClick={this.onError.bind(this)}>Error Button</button>
        </footer>
      </div>
    );
  }
}

export default MainPage;

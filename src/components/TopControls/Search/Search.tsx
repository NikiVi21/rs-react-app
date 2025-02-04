import { Component, ChangeEvent } from "react";
import styles from "../../../index.module.css";

interface SearchComponentState {
  query: string;
}

export interface SearchComponentProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export default class Search extends Component<
  SearchComponentProps,
  SearchComponentState
> {
  constructor(props: SearchComponentProps) {
    super(props);
    const savedQuery = localStorage.getItem("searchQuery") || "";
    this.state = {
      query: savedQuery,
    };
  }

  componentDidMount(): void {
    return this.props.onSearch(
      this.state.query ? this.state.query.trim() : "default"
    );
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.query.trim());
    localStorage.setItem("searchQuery", this.state.query.trim());
  };

  render() {
    const { loading } = this.props;

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.query}
          placeholder="User"
        />
        <button
          className={styles.button}
          onClick={this.handleSearch}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
    );
  }
}

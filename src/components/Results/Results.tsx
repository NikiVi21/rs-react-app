import { Component } from "react";
import styles from "./Results.module.css";

interface Repository {
  name: string;
  description: string;
}

interface ResultsComponentProps {
  repositories: Repository[];
  error: string;
  loading: boolean;
}

export class Results extends Component<ResultsComponentProps> {
  render() {
    const { repositories, loading, error } = this.props;

    return (
      <div className={styles.resultsTable}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && repositories.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Repository Name</th>
                <th>Repository Description</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repo, index) => (
                <tr key={index}>
                  <td>{repo.name}</td>
                  <td>{repo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && !error && <div>NO</div>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";

import Section from "./components/section.jsx/Section";
import FeedbackOptions from "./components/feedback-options/FeedbackOptions";
import Statistics from "./components/statistics/Statistics";

class App extends Component {
  static defaultProps = {
    options: [
      { id: "opt-1", name: "Good", value: "good" },
      { id: "opt-2", name: "Neutral", value: "neutral" },
      { id: "opt-3", name: "Bad", value: "bad" },
    ],
  };

  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  feedbackHandler = (value) => {
    this.setState((state) => ({ ...state, [value]: state[value] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * this.state.good);
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.props.options}
            onLeaveFeedback={this.feedbackHandler}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

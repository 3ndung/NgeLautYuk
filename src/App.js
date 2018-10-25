import React, { Component } from "react";
import RecipeReviewCard from "./demo.js";
import SearchAppBar from "./AppBar.js";
import SimpleTabs from "./SimpleTabs.js";

class App extends Component {
  render() {
    return (
      <div>
        <SimpleTabs />
        <RecipeReviewCard />
      </div>
    );
  }
}

export default App;

import React, { Component, createContext } from "react";

export const RoomContext = createContext();
export class RoomProvider extends Component {
  state = {
    page: ""
  };

  selectedStyle = page => {
    this.setState({ ...this.state, page });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          selectedStyle: this.selectedStyle
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

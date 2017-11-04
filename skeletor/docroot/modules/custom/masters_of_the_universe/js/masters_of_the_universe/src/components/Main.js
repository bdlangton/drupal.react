import React from 'react';

const Main = React.createClass({
  componentWillMount: function() {
    this.props.init();
  },

  searchTitle: function (e) {
    this.props.searchTitle(e.target.value);
  },

  onButtonClick: function(id) {
    this.props.deleteUser(id);
  },

  render() {
    // App is busy loading Data from API
    if (this.props.data.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    let app = this;

    // All data loaded, so render it.
    return (
      <div>
          Search Title: <input type="text" onKeyUp={this.searchTitle}/>
          {this.props.data.filteredData.map(function(item, index) {
              return (
                  <div key={index}>
                      <p>{item.title}</p>
                      <p>{item.field_artist}</p>
                      <hr/>
                  </div>
              )
          })}
      </div>
    )
  }
});

export default Main;

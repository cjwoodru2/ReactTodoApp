var React = require('react');

var Todo = React.createClass({

  render: function () {
    var {id} = this. props;
    var {text} = this.props;
    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    )
  }
});

module.exports = Todo;

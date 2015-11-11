import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
})

export default App;

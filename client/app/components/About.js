import React from 'react';

var About = React.createClass({
  render: function() {
    return(
      <div className="container home">
        <div className="row">
          <h1 className="text-center">FAQ</h1>
        </div>
        <div className="row">
          <h2 className="text-center"><strong>Q: What is ReactorMaker?</strong></h2>
          <h3 className="text-center">A: ReactorMaker is a 2 week online program designed to prepare people for the Javascript-focused Coding Bootcamps' technical interviews.</h3>
        </div>
        <div className="row">
          <h2 className="text-center"><strong>Q: Who created it?</strong></h2>
          <h3 className="text-center"></h3>
        </div>
      </div>
    )
  }
})

export default About;
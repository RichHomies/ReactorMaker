import React from 'react';

var About = React.createClass({
  render: function() {
    return(
      <div className="container home">
        <div className="row">
          <h1 className="text-center">FAQ</h1>
        </div>
        <div className="row">
          <h2 className="text-center"><strong>Q: Who teaches ReactorMaker?</strong></h2>
          <h3 className="text-center">A: ReactorMaker was created by two former bootcamp instructors, <a className="link" href="http://www.joe-n.com" target="_blank">Joe Nayigiziki</a> and <a className="link" href="https://www.linkedin.com/in/zckly" target="_blank">Zachary Lee.</a></h3>
        </div>
        <div className="row">
          <h2 className="text-center"><strong>Q: What will ReactorMaker teach me?</strong></h2>
          <h3 className="text-center">A: Our curriculum goes over mastery of JavaScript syntax, Objects, Arrays, Functions, Higher-Order Functions, and Recursion.</h3>
        </div>
        <div className="row">
          <h2 className="text-center"><strong>Q: How does the tutoring work?</strong></h2>
          <h3 className="text-center">A: The curriculum will be taught primarily through live sessions with a tutor, with infinite access to exclusive learning resources designed by ReactorMaker.</h3>
        </div>
      </div>
    )
  }
})

export default About;
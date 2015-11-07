import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h1 className="text-center"><strong>We take Javascript beginners to the next level.</strong></h1>
        </div>
        <div className='row'>
          <h2 className='text-center'>ReactorMaker is an 2 week, online program designed to get <strong>you</strong> into Hack Reactor Schools, built by MakerSquare instructional staff.</h2>
        </div>
        <div className='row'>
          <h2 className='text-center'>Upon completion of our program, you will have the skills necessary to ace the intensive technical interview needed to get into Hack Reactor schools.</h2>
        </div>
      </div>
    );
  }
}

export default Home;

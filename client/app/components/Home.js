import React from 'react';

var Home = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.value.trim();
    var name = this.refs.name.value.trim();

    var data = {
      email: email,
      name: name,
    };

    if (!email || !name) {
      return;
    }
    //TO DO: email regex
    var productionIP = 'http://54.186.120.94/api/user';
    $.ajax({
      type: 'POST',
      url: '/api/user',
      data: data
    })
    .done(function(data) {
      console.log('done')
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
      console.log(jqXhr)
    });
    this.refs.email.value = '';
    this.refs.name.value = '';
    swal("Thank you!", "We will reach out to you soon with more information.", "success")
    return;

  },
  render: function() {
    return (
      <div className='container home'>
        <div className='row'>
          <h1 className="text-center"><strong>We take Javascript beginners to the next level.</strong></h1>
        </div>
        <div className='row'>
          <h2 className='text-center'>ReactorMaker is an 2 week, online program designed to get <strong>you</strong> into the top Javascript bootcamps, built by bootcamp graduates turned instructional staff.</h2>
        </div>
        <div className='row'>
          <h2 className='text-center'>Upon completion of our program, you will have the skills necessary to ace the intensive technical interview needed to get into the most challenging of bootcamps.</h2>
        </div>
        <div>
          <h2 className="text-center">Enter your name and email to stay in the loop and get <strong>50%</strong> off when the course is released.</h2>
        </div>
        <div className='row'>
          <br></br>
          <br></br>
        </div>
        <div className='row'>
          <form ref='searchForm' className='navbar-form navbar-center text-center animated' onSubmit={this.handleSubmit}>
            <div className='input-group input-group-lg'>
              <input type='text' className='form-control' placeholder='Enter your name' ref='name'/>
            </div>
            <div className='input-group input-group-lg'>
              <input type='text' className='form-control' placeholder='Enter your email' ref='email'/>
            </div>
            <div className='input-group input-group-lg'>
              <span className='input-group-btn'>
                <button className='btn btn-default'><span className='glyphicon glyphicon-plus'></span></button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }  
});


export default Home;

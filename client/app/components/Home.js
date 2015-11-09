import React from 'react';

var Home = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.value.trim();
    var name = this.refs.name.value.trim();
    var phoneNumber = this.refs.phoneNumber.value.trim();

    var data = {
      email: email,
      name: name,
      phoneNumber : phoneNumber
    };

    if (!email || !name || !phoneNumber) {
      return;
    }
    //TO DO: email regex
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
    this.refs.phoneNumber.value = '';
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
          <h2 className='text-center'>ReactorMaker is an 2 week, online program designed to get <strong>you</strong> into Hack Reactor Schools, built by MakerSquare instructional staff.</h2>
        </div>
        <div className='row'>
          <h2 className='text-center'>Upon completion of our program, you will have the skills necessary to ace the intensive technical interview needed to get into Hack Reactor schools.</h2>
        </div>
        <div>
          <h2 className="text-center">Wanna know more? Stay in the loop.</h2>
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
              <input type='text' className='form-control' placeholder='Enter your phone #' ref='phoneNumber'/>
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

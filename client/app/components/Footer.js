import React from 'react';
import {Link} from 'react-router';

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="shadow">
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 copyright'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>ReactorMaker is not affiliated with Hack Reactor. Site created by <strong>Zachary Lee</strong> and <strong>Joe Nayigiziki</strong>. Copyright © 2015 Zachary Lee. All Rights Reserved.</p>
            </div>
            <div className='col-sm-7 hidden-xs copyright'>
              <h3 className='lead'>Site is still in development. Check back soon!</h3>
              <ul className='list-inline'>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
})

export default Footer;
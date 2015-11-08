import React from 'react';
import {Link} from 'react-router';

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Flex</strong> Ooh ooh ooh</h3>
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
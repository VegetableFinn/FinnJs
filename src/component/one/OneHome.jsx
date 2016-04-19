import React from 'react';
import './OneHome.less';

import Header from './Header'
import Footer from './Footer'
import Pic from './Pic'
import Word from './Word'
    

const OneHome = React.createClass({
    getInitialState() {
        return {
            oneData:{}
        };
    },
    
    componentDidMount: function() {
    $.get("one/getLastOne.json", function(result) {
      const oneresult = JSON.parse(result);
      if (this.isMounted()) {
       this.setState({
          oneData: oneresult
        });
      }
    }.bind(this));
  },
    
    render() {
        const oneDataParam = this.state.oneData;
        const oneImgParam = this.state.oneData.title;
        return (
          <div className="whole">
            <Header/>
            <div className="row container">
              <div className="main">
                    <Pic key="onepic" oneImg={oneImgParam}/>
                    <Word key="oneword" oneData={oneDataParam}/>
              </div>
            </div>
            <Footer/>
          </div>
        );
      }
    });

export default OneHome;


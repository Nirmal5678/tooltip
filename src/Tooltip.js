import React from "react";
import './index'
class Tooltip extends React.Component {
    constructor () {
        super();
        this.state = {
          msg:''
        }
    }
    mouseOver = () => {
        // alert('this');
        this.setState(()=>{
            return {
                msg :  <div>Thanks for hovering over me! I am a tooltip</div>
            }
        });
      }

      mouseDown  = () => {
        // alert('this');
        this.setState(()=>{
            return {
                msg : '',
               
            }
        });
      }

    render (){
        const {msg } = this.state;
        return( 
            <div  style={{ display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
    }}>

        {/*  tool tip  */}
                <div className="tooltip" style={ {} }>
                <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseDown}>Hover Over Me
                    </div> 
                    <div className='tooltiptext'>{msg}</div>   
                    </div>            

                
            </div>
        )
    }
}

export default Tooltip;

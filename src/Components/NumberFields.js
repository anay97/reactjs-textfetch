import React, { Component } from 'react';

class NumberFields extends Component {
    constructor(props){
        super(props);
    }

getChange(){
    let x=this.refs.abc.value;
    this.props.getChange(x);
    //console.log('fired');
}
  render() {
    return (
      <div className="NumberFields">
        <input ref="abc" type="number" value={this.props.val} step="1" onChange={this.getChange.bind(this)} />
      </div>
    );
  }
}

export default NumberFields;
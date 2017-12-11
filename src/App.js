import React, { Component } from 'react';
import Projects from './Components/Projects';
import Paras from './Components/Paras';
import NumberFields from './Components/NumberFields';
import $ from 'jquery';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            paras:'',
            num:2
        };
    }
    getParas(){
        $.ajax({
            url:'https://baconipsum.com/api/?type=all-meat&format=text&paras='+this.state.num,
            dataType:'text',
            cache:false,
            success:function(data){
                this.setState({paras:data},function(){
                });
            }.bind(this),
            error:function(xhr,status,err){
                console.log(err);
            }
        });
    }
    componentWillMount(){
        this.getParas();
    }
  changeParas(number){
      this.setState({num: (number)},this.getParas());
      console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Projects name="Abc" />
        <NumberFields val={this.state.num}  getChange={this.changeParas.bind(this)} /><br /><br />
        <Paras txt={this.state.paras} />
      </div>
    );
  }
}

export default App;

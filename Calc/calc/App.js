import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';
import styles from './style.js';
import { Icon } from 'react-native-elements'

class App extends Component{

  action(action){
    switch(action){
      case 'C':
        this.setState({
          outcome: "",
          calculationText:"0",
        })
        this.bracket = true
        this.openBrackets = 0
        break;
      case '()':
        if(this.bracket){
          this.setState({
            outcome: this.state.outcome + '('
          })
          this.bracket = false
          this.openBrackets++
        }
        else{
          if(this.openBrackets > 0)
          {
            this.setState({
              outcome: this.state.outcome + ')'
            })
            this.openBrackets--
          }
        }
        break;
      case '^':
        action = '**'
      case '+':
      case '*':
      case '-':
      case '/':
      case 'e':

      const lastChar = this.state.outcome.split('').pop()
      if(this.chars.indexOf(lastChar)!= -1)return
      if(this.state.outcome == ''){
        if(action=='-'){
          this.setState({
            outcome: this.state.outcome + action
          })
        }
        return
      }
      this.setState({
        outcome: this.state.outcome + action
      })
      this.bracket = true
    }
  }

  constructor(){
    super()
    this.state = {
      outcome:"",
      calculationText:"",
    }
    this.chars = ['+','-','/','*','e'],
    this.bracket = true
    this.openBrackets = 0
  }

  calculate(){
    const text = this.state.outcome
    this.setState({
      calculationText:eval(text)
    })
  }

  
  
  buttonPressed(value){
    const lastChar = this.state.outcome.split('').pop()
    if(value == '='){
      return this.calculate()
    }
    else if(value == '.'){
      if(this.state.outcome == '')return
      if(lastChar =='.') return
      this.setState({
        outcome: this.state.outcome + value
      })
    }
    else{
      if(this.openBrackets != 0){
        this.setState({
          outcome: this.state.outcome+value,
        })
      }
      else{
        this.setState({
          outcome: this.state.outcome+value,
          calculationText:eval(this.state.outcome+value)
        })
      }
    }
      this.bracket = false
  }




  render(){
    var rows = []
    var numbers =[['C','()','^'],[1,2,3], [4,5,6], [7,8,9],['.',0,'=']]

    for(let i = 0; i<5; i++){
      var row = []
      for(let j = 0; j < 3; j++){
        if(i==0){
          row.push(
            <TouchableOpacity onPress={() => this.action(numbers[i][j])} style={styles.btn}>
              <View style={styles.fbutton}>
                <Text style={[styles.btnText, styles.whiteText]}>{numbers[i][j]}</Text>
              </View>
            </TouchableOpacity>
          )
        }
        else{
          row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(numbers[i][j])} style={styles.btn}>
            <View style={styles.numBtn}>
              <Text style={styles.btnText}>{numbers[i][j]}</Text>
            </View>
          </TouchableOpacity>
          )
        }
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }


    let operators=[]
    for(let i = 0; i < 5;i++){
      operators.push(
        <TouchableOpacity style={styles.btn} onPress={()=> this.action(this.chars[i])}>
          <View style={styles.fbutton}>
            <Text style={[styles.btnText, styles.whiteText]}>{this.chars[i]}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    //components
    return(
      <View style={styles.container}>
        <View style={styles.outcome}>
          <Text style={styles.outcomeText}>{this.state.outcome}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.actions}>
           {operators}
          </View>
        </View>
      </View>
    );
  }
}
export default App;
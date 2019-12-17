import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class Ecran extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.ecran}>
        <Text style={{ color: "white", top: 70, fontSize: 20 }}>{this.props.label}</Text>
      </View>
    );
  }
}

class Calc extends Component {
  constructor(props) {
    super(props);
  }

  bEval = false;

  state = {
    label: '',
    bEval: false
  }

  render() {
    return (
      <View style={styles.base}>
        <Ecran label={this.state.label}></Ecran>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "1"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>Press</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "(",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "("
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>(</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "7",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "7"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "4",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "4"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "1",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "1"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "0",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "0"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>0</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                this.setState({
                  label: ""
                })
              }}>
                <Text style={styles.btnText}>Clean</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: ")",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + ")"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>)</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "8",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "8"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "5",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "5"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "2",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "2"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "00",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "00"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>00</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                this.setState({
                  label: this.state.label.substring(0, this.state.label.length - 1)
                })
              }}>
                <Text style={styles.btnText}>Del</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "%",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "%"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>%</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "9",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "9"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "6",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "6"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "3",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "3"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnChiffre}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: ".",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "."
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>.</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "/",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "/"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>/</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "*",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "*"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "-",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "-"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnOpe}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                if (this.state.bEval == true) {
                  this.setState({
                    label: "+",
                    bEval:false
                  }
                  )
                }else{
                  this.setState({
                    label: this.state.label + "+"
                  }
                  )
                }
              }}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnEgale}>
              <TouchableOpacity style={ styles.touchCenter } onPress={() => {
                this.setState({
                  label: eval(this.state.label),
                  bEval:true
                })
              }}>
                <Text style={styles.btnText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default function App() {
  return (
    <Calc></Calc>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  base: {
    flex: 1,
  },

  ecran: {
    flex: 2,
    backgroundColor: "#151925",
    right: 0,
    alignItems: "flex-end"
  },

  btnOpe: {
    flex: 1,
    backgroundColor: "#252E3E",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  touchCenter :{
    flex: 1, 
    justifyContent: 'center'
  },

  btnChiffre: {
    flex: 1,
    backgroundColor: "#343C4D",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  btnEgale: {
    flex: 2,
    backgroundColor: "#52AB5E",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  btnText: {
    color: "white",
    fontWeight: "bold"
  }
});

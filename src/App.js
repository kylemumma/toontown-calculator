import React from 'react';
import MainScreen from './components/MainScreen.js'
import ToonDamageCalculator from './components/ToonDamageCalculator.js'
import CogFacilityInfo from './components/CogFacilityInfo.js'
import UltimateAntiCogTool from './components/UltimateAntiCogTool.js'
import ToonAccuracyCalculator from './components/ToonAccuracyCalculator.js'
import DoubleLureCalculator from './components/DoubleLureCalculator.js'
import CogDamageCalculator from './components/CogDamageCalculator.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 0
    }
  }

  changeScene = (sceneNumber) => {
    this.setState({
      scene: sceneNumber
    });
  }

  render() {
    switch(this.state.scene) {
      case 0: // main screen
        return (
          <MainScreen onClick={this.changeScene}/>
        );
      case 1: // Toon Damage Calculator
        return (
          <ToonDamageCalculator />
        ); 
      case 2: // Cog Facility Info
        return (
          <CogFacilityInfo />
        ); 
      case 3: // Ultimate Anti-Cog Tool
        return (
          <UltimateAntiCogTool />
        ); 
      case 4: // Toon Accuracy Calculator
        return (
          <ToonAccuracyCalculator />
        ); 
      case 5: // Double Lure Calculator
        return (
          <DoubleLureCalculator />
        ); 
      case 6: // Cog Damage Calculator
        return (
          <CogDamageCalculator />
        ); 
    }
  }
}

export default App;

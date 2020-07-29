import React from 'react';
import MainScreen from './components/MainScreen.js'
import ToonDamageCalculator from './components/ToonDamageCalculator.js'
import CogFacilityInfo from './components/CogFacilityInfo.js'
import UltimateAntiCogTool from './components/UltimateAntiCogTool.js'
import ToonAccuracyCalculator from './components/ToonAccuracyCalculator.js'
import DoubleLureCalculator from './components/DoubleLureCalculator.js'
import CogDamageCalculator from './components/CogDamageCalculator.js'
import ErrorPage from './components/ErrorPage.js'
import SellbotInfo from './components/SellbotInfo.js'
import CashbotInfo from './components/CashbotInfo.js'
import LawbotInfo from './components/LawbotInfo.js'
import BossbotInfo from './components/BossbotInfo.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 0
    }
  }

  /*
  updates the current states scene to the given scene number
  */
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
          <ToonDamageCalculator onClick={this.changeScene} />
        ); 
      case 2: // Cog Facility Info
        return (
          <CogFacilityInfo onClick={this.changeScene} />
        );
      case 2.1: // (Subpage of 2) Sellbot Info Page
        return (
          <SellbotInfo onClick={this.changeScene} />
        );
      case 2.2: // (Subpage of 2) Cashbot Info Page
        return (
          <CashbotInfo onClick={this.changeScene} />
        );
      case 2.3: // (Subpage of 2) Lawbot Info Page
        return (
          <LawbotInfo onClick={this.changeScene} />
        );
      case 2.4: // (Subpage of 2) Bossbot Info Page
        return (
          <BossbotInfo onClick={this.changeScene} />
        );
      case 3: // Ultimate Anti-Cog Tool
        return (
          <UltimateAntiCogTool onClick={this.changeScene} />
        ); 
      case 4: // Toon Accuracy Calculator
        return (
          <ToonAccuracyCalculator onClick={this.changeScene} />
        ); 
      case 5: // Double Lure Calculator
        return (
          <DoubleLureCalculator onClick={this.changeScene} />
        ); 
      case 6: // Cog Damage Calculator
        return (
          <CogDamageCalculator onClick={this.changeScene} />
        );
      default:
        return (
          <ErrorPage />
        );
    }
  }
}

export default App;

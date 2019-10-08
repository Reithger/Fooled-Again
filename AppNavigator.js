import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Junction from './screens/Junction';
import SleuthConversation from './screens/SleuthConversation';
import SleuthDescription from './screens/SleuthDescription';
import SolveIntro from './screens/SolveIntro';
import Solve from './screens/Solve';
import End from './screens/End';
import Intro from './screens/Intro';

const AppNavigator = createStackNavigator({


  Solve: {
      screen: Solve
  },
    Home: {
        screen: Home
    },
    Intro: {
        screen: Intro
    },
    Junction: {
        screen: Junction
    },
    SleuthDescription: {
        screen: SleuthDescription
    },
    SleuthConversation: {
        screen: SleuthConversation
    },
   SolveIntro : {
      screen : SolveIntro
    },
    End: {
        screen: End
    },
});

const App = createAppContainer(AppNavigator);

export default App;

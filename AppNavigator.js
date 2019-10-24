import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Messenger from './screens/Messenger';
import News from './screens/News';
import NewsStory from './screens/NewsStory';
import SolveIntro from './screens/SolveIntro';
import Solve from './screens/Solve';
import End from './screens/End';
import Intro from './screens/Intro';

const AppNavigator = createStackNavigator({

    Home: {
        screen: Home
    },
    Intro: {
        screen: Intro
    },
    Messenger: {
        screen: Messenger
    },
    News : {
      screen : News
    },
    NewsStory : {
      screen : NewsStory
    },
    Solve: {
        screen: Solve
    },
    End: {
        screen: End
    },
});

const App = createAppContainer(AppNavigator);

export default App;

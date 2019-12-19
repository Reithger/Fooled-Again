import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Messenger from './screens/Messenger';
import News from './screens/News';
import NewsStory from './screens/NewsStory';
import Blog from './screens/Blog';
import End from './screens/End';
import Intro from './screens/Intro';

const AppNavigator = createStackNavigator({



    Home: {
        screen: Home
    },
    Intro: {
        screen: Intro
    },
    News : {
      screen : News
    },
    NewsStory : {
      screen : NewsStory
    },
    Messenger: {
        screen: Messenger
    },
    Blog: {
        screen: Blog
    },
    End: {
        screen: End
    },
});

const App = createAppContainer(AppNavigator);

export default App;

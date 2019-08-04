import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Junction from './screens/Junction';
import Sleuth from './screens/Sleuth';
import Solve from './screens/Solve';
import End from './screens/End';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }, 
    Junction: {
        screen: Junction
    },
    Sleuth: {
        screen: Sleuth
    },
    Solve: {
        screen: Solve
    },
    End: {
        screen: End
    }
});

const App = createAppContainer(AppNavigator);

export default App;
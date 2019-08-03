import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Second from './screens/Second';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }, 
    Second: {
        screen: Second
    }
});

const App = createAppContainer(AppNavigator);

export default App;
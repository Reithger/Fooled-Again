import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container_small: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_medium: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
    junction: { 
        flex: 1,
        backgroundColor: '#fff',
        borderStyle: 'solid',
    },
    junction_title: {
        fontSize: 32,
        flex: 1,
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginTop: '5%',
    },
    junction_sleuth_image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'red',
    },
    junction_profile_image: {
        width: 50,
        height: 50,
    },
    junction_sleuth_selection: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    junction_center_top: {
        flex: 1,
        backgroundColor: '#ead',
        borderColor: '#fff',
        width: '100%',
    },
    junction_center_bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfc',
        borderColor: '#000',
        width: '100%',
    }
});
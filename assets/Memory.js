import { AsyncStorage } from "react-native";

export default class Memory{

    async storeData(field, key){
        try {
            await AsyncStorage.setItem(field, key);
        }
        catch (error) {
            console.log(field + ":" + key);
            console.log(error);
        }
    }

    async retrieveData (field){
        try {
            const value = await AsyncStorage.getItem(field);
            return value;
        }
        catch (error) {
            console.log(field);
            console.log(error);
        }
    }

    async delete(field) {
        try {
            await AsyncStorage.removeItem(field);
        }
        catch (error) {
            console.log(field);
            console.log(error);
        }
    }
}

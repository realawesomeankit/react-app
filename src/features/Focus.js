import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../utils/colors'

export const Focus = () => {
    <View style={styles.container}>
        <Text style={styles.text}>Focus Features</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        color:colors.white,
    }
})
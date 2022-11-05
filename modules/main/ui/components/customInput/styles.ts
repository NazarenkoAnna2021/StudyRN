import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 40,
            backgroundColor: 'grey',
            alignItems: 'center',
            marginVertical: 10,
            marginLeft: 10,
        },
        input: {
            flex: 1,
            color: '#000000'
        }
    });
    return styles;
}
import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: 100,
            backgroundColor: 'grey',
            alignItems: 'center',
            padding: 5,
            marginBottom: 10,
            marginLeft: 10,
        },
        title: {
            width: 50,
            fontSize: 20,
            fontWeight:'700',
            color: '#ffffff',
        },
        description: {
            fontSize: 16,
            color: '#ffffff',
        },
    });
    return styles;
}
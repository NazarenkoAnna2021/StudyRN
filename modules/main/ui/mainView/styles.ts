import { StyleSheet } from 'react-native';

export const getStyle = (isScrollEnabled: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#000000',
        },
        button: {
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isScrollEnabled ? 'blue' : 'red',
        },
        buttonText: {
            color: '#ffffff'
        },
        contentContainerStyle: {
            paddingHorizontal: 16,
            paddingVertical: 20,
        },
    });
    return styles;
}
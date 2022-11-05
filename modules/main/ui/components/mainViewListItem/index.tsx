
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getStyle } from './styles';

interface IProps {
    title: string;
    description: string;
    onPress?: () => void;
}

export const MainViewListItem: FC<IProps> = ({ title, description, onPress }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <TouchableOpacity style={styles.container} disabled={!onPress} onPress={onPress} onPressIn={() => console.log('onPressIn')} onPressOut={() => console.log('onPressOut')} onLongPress={() => console.log('onLongPress')}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );
};
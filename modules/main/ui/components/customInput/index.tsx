
import React, { FC, useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { getStyle } from './styles';

interface IProps {
    value: string;
    setValue: (value: string) => void;
}

export const CustomInput: FC<IProps> = ({ value, setValue }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="useless placeholder"
            />
        </View>
    );
};
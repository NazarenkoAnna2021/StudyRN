
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, LayoutChangeEvent } from 'react-native';
import { CustomInput } from '../components/customInput';
import { MainViewListItem } from '../components/mainViewListItem';
import { getStyle } from './styles'

const DATA: IData[] = [
    {
        id: 0,
        title: 'aaaa',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 1,
        title: 'bbbbb',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 2,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 3,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 4,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 5,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 6,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 7,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 8,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 9,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 10,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 11,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
    {
        id: 12,
        title: 'ccccc',
        description: 'acjscisjc jsjcosjcp ajcsjacpos'
    },
];

interface IData {
    id: number;
    title: string;
    description: string;
};

export const MainView: FC = () => {
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);
    const styles = useMemo(() => getStyle(isScrollEnabled), [isScrollEnabled]);
    const [inputValue, setInputValue] = useState('');
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        console.log('====================================');
        console.log(textWidth);
    }, [textWidth]);

    const keyExtractor = (item: IData) => String(item.id);
    const renderItem = ({ item }: { item: IData }) => (
        <MainViewListItem onPress={() => { }} title={item.title} description={item.description} />
    );
    const onSetIsScrollEnabled = useCallback(() => {
        setIsScrollEnabled(prevState => !prevState);
    }, []);

    const onLayout = (event: LayoutChangeEvent) => {
        setTextWidth(event.nativeEvent.layout.width);
    }

    return (
        <View style={styles.container}>
            <CustomInput value={inputValue} setValue={setInputValue} />
            <Text onLayout={onLayout} style={styles.buttonText}>{inputValue}</Text>
            <TouchableOpacity style={styles.button} onPress={onSetIsScrollEnabled}>
                <Text  style={styles.buttonText}>scrollEnabled</Text>
            </TouchableOpacity>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerStyle}
                scrollEnabled={isScrollEnabled}
                initialNumToRender={12}
                numColumns={3}
            />
        </View>
    );
};
import React from 'react';
import { View, Text } from 'react-native';
import { Dot } from 'phosphor-react-native';
import * as Progress from 'react-native-progress';

const CustomProgressBar = ({ dotColor, title, progress, space }) => {
    return (
        <View>
            <View style={styles.section}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Dot size={50} weight="bold" color={dotColor} />
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#373737' }}>{title}</Text>
                </View>
                <Progress.Bar progress={progress} width={150} height={3} color={dotColor} borderWidth={0} unfilledColor={'#DBDBDB'} />
            </View>
            <Text style={styles.space}>{space}</Text>
        </View>
        
    );
};

const styles = {
    section: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
    },
    space: {
        fontSize: 12,
        marginHorizontal: 60,
        color: '#666666',
        marginTop: 0,
        paddingTop: 0,
    }
};

export default CustomProgressBar;

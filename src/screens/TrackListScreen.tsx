import {View, Text, Button} from 'react-native';
import React from 'react';

const TrackListScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TrackDetailsScreen')}
      />
    </View>
  );
};

export default TrackListScreen;

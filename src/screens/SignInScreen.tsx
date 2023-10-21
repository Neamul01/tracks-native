import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const SignInScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const Kedilisayfa = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={styles.ciguli}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ciguli: {
    backgroundColor: 'pink'
  }
});

export default Kedilisayfa;

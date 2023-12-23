import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.freepnglogos.com/uploads/polaris-png-logo/polaris-power-brand-png-logo-20.png' }}
        style={styles.image}
      />
      {isLoading && (
        <ActivityIndicator size="large" color="white" style={styles.loader} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    // flex: 1
  },
  loader: {
    position: 'absolute',
    bottom: 150,
  },
});

export default SplashScreen;

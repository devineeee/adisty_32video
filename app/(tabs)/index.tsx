// App.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import LocalAPI from './LocalAPI';
import CallAPIAxios from './CallAPIAxios';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        <LocalAPI />
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;

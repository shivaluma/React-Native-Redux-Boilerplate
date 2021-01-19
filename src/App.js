import React from 'react'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from 'store'
import 'translations'

const App = () => {
  const { t } = useTranslation()

  return (
    <Provider store={store}>
    
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Text>{t('welcome')}</Text>
          <StatusBar style="auto" />
        </View>
      </PersistGate>

      
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

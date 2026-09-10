import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import EmploeyeeList from './src/components/EmploeyeeList';
import CompanyHeader from './src/components/CompanyHeader';

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? styles.statusDark.backgroundColor : styles.statusLight.backgroundColor}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
        <View style={styles.headerSection}>
          <CompanyHeader />
        </View>

        <View style={styles.listSection}>
          <EmploeyeeList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 0.3, // 30% superior para el encabezado corporativo
    width: '100%',
  },
  listSection: {
    flex: 0.7, // 70% restante para el directorio de empleados
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  statusLight: {
    backgroundColor: '#FFFFFF',
  },
  statusDark: {
    backgroundColor: '#121212',
  },
});
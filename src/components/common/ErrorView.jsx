import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SolidIcons} from '../../utils/Theme';

const ErrorView = ({message = 'Something went wrong.', onRetry}) => {
  return (
    <View style={styles.container}>
      <SolidIcons.ExclamationTriangleIcon
        size={48}
        color={COLORS['primary-rose-500']}
      />
      <Text style={styles.message}>{message}</Text>

      {onRetry && (
        <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  message: {
    color: COLORS['Neutrals/neutrals-5'] || '#666',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS['primary-blue-400'] || '#007AFF',
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

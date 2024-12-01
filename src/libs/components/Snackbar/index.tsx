import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface SnackbarProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  type?: 'error' | 'warning' | 'success' | 'default';
}

function getTypeColor(
  type: 'error' | 'warning' | 'success' | 'default',
): string {
  switch (type) {
    case 'warning':
      return '#E0E04D';
    case 'success':
      return '#0CB06F';
    case 'error':
      return '#EC5974';
    default:
      return '#323232';
  }
}

const SnackbarComponent: React.FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
  type = 'default',
}) => {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      hideSnackbar();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const hideSnackbar = () => {
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (onClose) onClose();
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: getTypeColor(type) },
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={hideSnackbar}>
        <AntDesign name='closecircle' size={24} color='white' />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#323232',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  message: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    fontFamily: 'Avenir',
  },
});

export default SnackbarComponent;

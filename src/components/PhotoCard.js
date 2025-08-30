import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoCard = ({ photo, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(photo)}>
      <Image 
        source={{ uri: photo.img_src }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.info}>
          <Text style={styles.cameraName}>{photo.camera.name}</Text>
          <Text style={styles.date}>{photo.earth_date}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Sol {photo.sol}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  info: {
    flex: 1,
  },
  cameraName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    color: '#ccc',
    fontSize: 12,
  },
  badge: {
    backgroundColor: '#e94560',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PhotoCard;
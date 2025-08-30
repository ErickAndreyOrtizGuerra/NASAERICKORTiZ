import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { getRoverInfo } from '../services/nasaApi';

const { width, height } = Dimensions.get('window');

const PhotoDetailScreen = ({ route }) => {
  const { photo } = route.params;
  const roverInfo = getRoverInfo(photo);

  const DetailItem = ({ label, value, icon }) => (
    <View style={styles.detailItem}>
      <Text style={styles.detailIcon}>{icon}</Text>
      <View style={styles.detailContent}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#0B1426" barStyle="light-content" />
      
      {/* Imagen principal */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: photo.img_src }} 
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageTitle}>Foto #{photo.id}</Text>
        </View>
      </View>

      {/* Información del rover */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>🤖 Información del Rover</Text>
        
        <DetailItem 
          icon="🚀" 
          label="Rover" 
          value={roverInfo.roverName} 
        />
        
        <DetailItem 
          icon="📅" 
          label="Fecha de lanzamiento" 
          value={roverInfo.launchDate} 
        />
        
        <DetailItem 
          icon="🛬" 
          label="Fecha de aterrizaje" 
          value={roverInfo.landingDate} 
        />
        
        <DetailItem 
          icon="⚡" 
          label="Estado" 
          value={roverInfo.status.toUpperCase()} 
        />
      </View>

      {/* Información de la foto */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>📸 Detalles de la Foto</Text>
        
        <DetailItem 
          icon="📷" 
          label="Cámara" 
          value={`${roverInfo.cameraAbbr} - ${photo.camera.full_name}`} 
        />
        
        <DetailItem 
          icon="🌍" 
          label="Fecha terrestre" 
          value={roverInfo.earthDate} 
        />
        
        <DetailItem 
          icon="🔴" 
          label="Sol marciano" 
          value={`Día ${roverInfo.sol} en Marte`} 
        />
        
        <DetailItem 
          icon="🆔" 
          label="ID de la foto" 
          value={photo.id.toString()} 
        />
      </View>

      {/* Información adicional */}
      <View style={styles.funFactContainer}>
        <Text style={styles.funFactTitle}>🌟 Dato Curioso</Text>
        <Text style={styles.funFactText}>
          Un "Sol" es un día marciano, que dura aproximadamente 24 horas y 37 minutos. 
          Esta foto fue tomada en el Sol {roverInfo.sol} de la misión del rover Curiosity en Marte.
        </Text>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419',
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height * 0.4,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
  },
  imageTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#1a1a2e',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  detailIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  funFactContainer: {
    padding: 20,
    backgroundColor: '#16213e',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#e94560',
  },
  funFactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  funFactText: {
    fontSize: 14,
    color: '#ccc',
    lineHeight: 20,
  },
  spacer: {
    height: 30,
  },
});

export default PhotoDetailScreen;
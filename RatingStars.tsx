import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../theme/colors';
import { Fonts, FontSizes } from '../theme/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RatingStarsProps = {
  label: string;
  onRate: (rating: number) => void;
};

export const RatingStars: React.FC<RatingStarsProps> = ({ label, onRate }) => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleRate = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.starsContainer}>
        {[...Array(totalStars)].map((_, index) => {
          const iconName = index < rating ? 'star' : 'star-border';
          const iconColor = index < rating ? Colors.accentOrange : Colors.borderDefault;
          return (
            <TouchableOpacity key={index} onPress={() => handleRate(index)}>
              <Icon name={iconName} size={40} color={iconColor} style={styles.star} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: Colors.neutralWhite,
  },
  label: {
    fontSize: FontSizes.label,
    fontFamily: Fonts.LatoBold,
    color: Colors.darkBlue,
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 5,
  },
});
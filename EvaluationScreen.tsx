import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../theme/colors';
import { Fonts, FontSizes } from '../theme/typography';
import { RatingStars } from '../components/RatingStars';

export const EvaluationScreen = () => {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="arrow-back" size={24} color={Colors.neutralWhite} />
          </TouchableOpacity>
          <Text style={styles.headerTitleText}>Avaliação</Text>
          <View style={styles.headerButton} />
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.cardHeaderTitle}>Avaliação do Local</Text>

          <RatingStars
            label="Sua nota geral"
            onRate={(nota) => console.log('Nota selecionada:', nota)}
          />

          <Text style={styles.commentLabel}>Comentários (Opcional):</Text>
          <TextInput
            style={styles.textInput}
            placeholder="O que você achou do local?"
            placeholderTextColor={Colors.borderDefault}
            onChangeText={setComment}
            value={comment}
            multiline={true}
          />
        </View>
      </ScrollView>

      <SafeAreaView style={styles.footerSafeArea}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="map" size={28} color={Colors.neutralWhite} />
            <Text style={styles.footerText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="favorite" size={28} color={Colors.neutralWhite} />
            <Text style={styles.footerText}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="person" size={28} color={Colors.neutralWhite} />
            <Text style={styles.footerText}>Conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  headerSafeArea: {
    backgroundColor: Colors.primaryBlue,
  },
  footerSafeArea: {
    backgroundColor: Colors.primaryBlue,
  },
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  header: {
    height: 60,
    backgroundColor: Colors.primaryBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitleText: {
    color: Colors.neutralWhite,
    fontSize: 20,
    fontFamily: Fonts.LatoBold,
  },
  headerButton: {
    width: 24,
  },
  footer: {
    height: 70,
    backgroundColor: Colors.primaryBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: Colors.neutralWhite,
    fontSize: 12,
    fontFamily: Fonts.LatoRegular,
  },
  sectionContainer: {
    backgroundColor: Colors.neutralWhite,
    marginHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    overflow: 'hidden',
  },
  cardHeaderTitle: {
    fontSize: FontSizes.title,
    fontFamily: Fonts.LatoBold,
    color: Colors.darkBlue,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  commentLabel: {
    fontSize: FontSizes.label,
    fontFamily: Fonts.LatoBold,
    color: Colors.darkBlue,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  textInput: {
    height: 100,
    borderColor: Colors.borderDefault,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 24,
    paddingTop: 12,
    padding: 12,
    fontSize: FontSizes.body,
    fontFamily: Fonts.LatoRegular,
    color: Colors.darkBlue,
    textAlignVertical: 'top',
  },
  ratingContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: Colors.neutralWhite,
  },
  ratingLabel: {
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
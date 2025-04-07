import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS, OutlineIcons, SIZES} from '../../utils/Theme';
import {useNavigation} from '@react-navigation/native';

const MovieDetailsScreen = props => {
  const movie = props.route.params.movie;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <OutlineIcons.ChevronLeftIcon
            size={SIZES.large}
            color={COLORS['Neutrals/neutrals-1']}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{movie?.original_title}</Text>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;

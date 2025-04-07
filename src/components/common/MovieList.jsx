import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {
  COLORS,
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../utils/Theme';
import MovieListCard from './MovieListCard';

const MovieList = ({
  isLoading,
  movieData,
  onEndReachedHandler,
  paginationLoader,
  emptyComponent,
}) => {
  const renderLoader = () => {
    return (
      <>
        {paginationLoader && (
          <View style={styles.loaderStyle}>
            <ActivityIndicator
              size={'large'}
              color={COLORS['Neutrals/neutrals-1']}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <Animated.View style={[styles.contentCont]}>
      <View style={{alignSelf: 'center'}}>
        {isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={COLORS['Neutrals/neutrals-1']}
          />
        ) : (
          <Animated.FlatList
            data={movieData}
            keyExtractor={(item, index) => index}
            numColumns={Math.floor(width / (width / 2.2))}
            renderItem={({item, index}) => (
              <MovieListCard item={item} index={index} />
            )}
            initialNumToRender={10}
            maxToRenderPerBatch={11}
            scrollEventThrottle={16}
            contentContainerStyle={{
              flexGrow: 1,
              gap: moderateScale(16),
              paddingBottom: verticalScale(55),
            }}
            onEndReached={onEndReachedHandler}
            onEndReachedThreshold={0}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={emptyComponent}
          />
        )}
      </View>
    </Animated.View>
  );
};

export default React.memo(MovieList);

const styles = StyleSheet.create({
  contentCont: {
    height: height - verticalScale(80),
    paddingTop: verticalScale(20),
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
  },
  layoutChangeCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(50),
    justifyContent: 'space-between',
  },
  cardStyle: {
    width: horizontalScale(160),
    height: verticalScale(210),
    marginBottom: verticalScale(10),
    marginRight: horizontalScale(5),
    marginLeft: horizontalScale(5),
  },
  loaderStyle: {
    marginVertical: verticalScale(16),
    alignItems: 'center',
  },
});

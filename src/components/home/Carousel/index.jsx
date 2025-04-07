import {StyleSheet, View} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {verticalScale, width} from '../../../utils/Theme';
import BackImage from './BackImage';
import CarouselItem from './CarouselItem';
import Pagination from './Pagination';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import CarouselItemInfo from './CarouselItemInfo';
import Gradient from '../Gradient';

const Carousel = ({data}) => {
  const ref = useAnimatedRef();
  const interval = useRef();

  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [carouselData, setCarouselData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const x = useSharedValue(0);
  const offset = useSharedValue(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({viewableItems}) => {
    if (
      viewableItems[0]?.index !== undefined &&
      viewableItems[0]?.index !== null
    ) {
      setCurrentIndex(viewableItems[0]?.index);
      setPaginationIndex(viewableItems[0]?.index % carouselData.length);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]);

  const onCarouselScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: event => {
      offset.value = event.contentOffset.x;
    },
  });

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  useEffect(() => {
    setCarouselData(data);
  }, [data]);

  useEffect(() => {
    if (false) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 3000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, offset, width]);

  return (
    <View style={styles.container}>
      {carouselData.map((item, index) => {
        return (
          <View key={item?.id}>
            {index === currentIndex && (
              <BackImage item={item} index={index} x={x} />
            )}
          </View>
        );
      })}
      <Gradient bottomGradStyle={styles.bottomGradStyle} showTopGradient />
      <Animated.FlatList
        ref={ref}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        onScrollEndDrag={() => setIsAutoPlay(true)}
        onScroll={onCarouselScroll}
        style={{height: width, flexGrow: 0}}
        data={carouselData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return <CarouselItem item={item} index={index} x={x} />;
        }}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReachedThreshold={0.1}
      />
      {carouselData.map((item, index) => {
        return (
          <View key={index}>
            {index === currentIndex && (
              <CarouselItemInfo item={item} index={index} x={x} />
            )}
          </View>
        );
      })}
      <Pagination data={data} paginationIndex={paginationIndex} />
    </View>
  );
};

export default memo(Carousel);

const styles = StyleSheet.create({
  container: {
    height: verticalScale(300),
    width: width,
  },
  bottomGradStyle: {
    height: verticalScale(50),
  },
});

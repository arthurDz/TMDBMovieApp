import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  COLORS,
  CommonStyles,
  horizontalScale,
  moderateScale,
  OutlineIcons,
  SIZES,
  verticalScale,
  width,
} from '../../utils/Theme';
import {useNavigation} from '@react-navigation/native';
import {getMovieDetails} from '../../api/tmdbApi';
import Gradient from '../../components/home/Gradient';
import {buildImageUrl} from '../../utils/imagePathBuilder';
import FastImage from '@d11/react-native-fast-image';
import SkeletonLoader from '../../components/common/skeletons/SkeletonLoader';
import {formatRuntime, getDate} from '../../utils/AppUtils';
import GenreView from '../../components/common/detailsScreen/GenreView';
import CharactersList from '../../components/common/detailsScreen/CharacterList';

const MovieDetailsScreen = props => {
  const movie = props.route.params.movie;
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    try {
      const data = await getMovieDetails(movie?.id);
      setData(data || null);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching now playing movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

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

      <ScrollView>
        <View style={styles.headerContent}>
          <View>
            {buildImageUrl(movie?.backdrop_path, 'original') ? (
              <FastImage
                source={{
                  uri: buildImageUrl(movie?.backdrop_path, 'original'),
                  priority: FastImage.priority.normal,
                }}
                style={styles.bannerImg}
              />
            ) : (
              <View
                style={[
                  styles.bannerImg,
                  {
                    backgroundColor: COLORS['washed-blue-600'],
                  },
                ]}
              />
            )}
            <Gradient
              showTopGradient
              bottomGradStyle={styles.bannerImgBottomGradient}
              topGradStyle={styles.bannerImgTopGradient}
            />
          </View>

          <View style={styles.mediaHeaderCont}>
            {isLoading ? (
              <SkeletonLoader
                width={horizontalScale(140)}
                height={verticalScale(190)}
                borderRadius={moderateScale(20)}
              />
            ) : (
              <View>
                <FastImage
                  source={{
                    uri: buildImageUrl(movie?.poster_path),
                    priority: FastImage.priority.normal,
                  }}
                  style={styles.coverImg}
                  resizeMode={FastImage.resizeMode.contain}
                />

                <View style={styles.movieScore}>
                  <OutlineIcons.FaceSmileIcon
                    color={COLORS['primary-green-400']}
                    size={SIZES.xMedium}
                  />
                  <Text style={styles.movieScoreTxt}>
                    {Math.floor(data?.vote_average * 10)}%
                  </Text>
                </View>
              </View>
            )}
            <View>
              {isLoading ? (
                <SkeletonLoader
                  width={horizontalScale(100)}
                  marginBottom={verticalScale(10)}
                  marginLeft={horizontalScale(10)}
                  height={verticalScale(30)}
                />
              ) : (
                <Text style={styles.mediaName}>
                  {data?.original_title || movie?.original_title}
                </Text>
              )}

              {isLoading ? (
                <SkeletonLoader
                  width={horizontalScale(100)}
                  marginBottom={verticalScale(10)}
                  marginLeft={horizontalScale(10)}
                  height={verticalScale(30)}
                />
              ) : (
                data?.runtime && (
                  <View style={CommonStyles.row}>
                    <OutlineIcons.ClockIcon
                      color={COLORS['Neutrals/neutrals-1']}
                      size={SIZES.large}
                    />
                    <Text style={styles.mediaHeaderInfoTxt}>
                      {formatRuntime(data?.runtime)}
                    </Text>
                  </View>
                )
              )}

              {isLoading ? (
                <SkeletonLoader
                  width={horizontalScale(100)}
                  marginBottom={verticalScale(10)}
                  marginLeft={horizontalScale(10)}
                  height={verticalScale(30)}
                />
              ) : (
                <View
                  style={[
                    CommonStyles.row,
                    {marginVertical: verticalScale(10)},
                  ]}>
                  <OutlineIcons.TvIcon
                    color={COLORS['Neutrals/neutrals-1']}
                    size={SIZES.large}
                  />
                  <Text style={styles.mediaHeaderInfoTxt}>
                    Movie
                    <Text style={{textTransform: 'capitalize'}}>
                      {data?.status && ` • ${data?.status}`}
                    </Text>
                  </Text>
                </View>
              )}

              {isLoading ? (
                <SkeletonLoader
                  width={horizontalScale(100)}
                  marginBottom={verticalScale(10)}
                  marginLeft={horizontalScale(10)}
                  height={verticalScale(30)}
                />
              ) : (
                <View style={CommonStyles.row}>
                  <OutlineIcons.CalendarDaysIcon
                    color={COLORS['Neutrals/neutrals-1']}
                    size={SIZES.large}
                  />
                  <Text style={styles.mediaHeaderInfoTxt}>
                    Release Date -{' '}
                    {data?.release_date ? getDate(data?.release_date) : '-'}{' '}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>

        {isLoading ? (
          <SkeletonLoader
            width={width}
            marginHorizontal={horizontalScale(10)}
            marginTop={verticalScale(60)}
            marginBottom={verticalScale(15)}
            height={verticalScale(200)}
          />
        ) : (
          <View style={styles.mediaInfoCont}>
            <GenreView
              genres={data?.genres}
              color={COLORS['washed-blue-600']}
            />

            <View>
              <Text style={styles.tagline}>{data?.tagline}</Text>
              <Text style={styles.overview}>{data?.overview}</Text>
            </View>

            <View style={{marginBottom: verticalScale(20)}}>
              <Text
                style={[styles.heading, {color: COLORS['washed-blue-600']}]}>
                Characters
              </Text>
              <CharactersList data={data?.credits?.cast} />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MovieDetailsScreen;

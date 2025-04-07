import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS} from '../../../utils/Theme';

const SkeletonLoader = props => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor={COLORS['primary-dark-blue']}
      highlightColor={COLORS['washed-blue-900']}
      speed={1000}>
      <SkeletonPlaceholder.Item {...props} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoader;

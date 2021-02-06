import React, {useEffect,createRef} from 'react'
import {View,Animated, Dimensions} from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
 
const {width, height} = Dimensions.get('window');

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const SkeletonShimer = ({visible}) => {
 
  // Handle animation
  const firstRef = createRef()
  const secondLineRef = createRef()
  const thirdRef = createRef()
 
  useEffect(() => {
    const facebookAnimated = Animated.stagger(
      400,
      [
        Animated.parallel([
          firstRef.current.getAnimated(),
          secondLineRef.current.getAnimated(),
          thirdRef.current.getAnimated(),
        ])
      ]
    );
    Animated.loop(facebookAnimated).start();
  }, [])
 
  return (
    <View style={{ flex:1 ,justifyContent:'flex-end', alignItems:'center', flexDirection: "row"}}>
        <ShimmerPlaceholder
          ref={firstRef}
          stopAutoRun
          visible={visible}
          height= {100}
          width= {width/3.3}
        />
        <ShimmerPlaceholder
          ref={secondLineRef}
          stopAutoRun
          visible={visible}
          height= {100}
          width= {width/3.3}
        /><ShimmerPlaceholder
        ref={thirdRef}
        stopAutoRun
        visible={visible}
        height= {100}
        width= {width/3.3}
      />
    </View>
  )
}

export default SkeletonShimer;
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Swiper from '@ng-ha/react-native-swiper';
import FastImage from '@d11/react-native-fast-image';
import { useTheme } from '../themes/ThemeContext';
const { width } = Dimensions.get('window');

const sliderImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGsQ66uh5oPtD0HoQzF9hNLgT8R4pyLlYl4hz6txcbppwFHODZQJoIAAWD1Je83EoWHsTTSDAscPgYRWbQ8oM9boVPYL2UbQtPhWe1Ydsm_fNuwFUVzd-IUC3f9_z0vk2r74ncqxx4x4P43qAOwMy5PIMeTzWCTWNjZOF95h6xPErVpvu5nsxiwZFcwpM/s1600/slider6.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB8dtobbZQ-EjRP_Ci4frlGEqWFxIOM6qs12Ngq_4fot4VZxjKnb-ZGB6j9wKD0XC6Qpt1HtrnE915EnZOwVkeCXDILYvtuPghmEnM8ibE3g7MYX8J66I6ltnX8SGVXaDi809jl0dpIgp2Tie8C8EzbDmd9QgchDYZ6BcHF0gmykwyjYT02clgfejTiO8/s1600/slider11.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1V4jX1Ge3ZdwVCNd_TmxVO3X4XFNxBPV1Q3kkFCkcc14xgKzXp3fQg9Psw_EPQZIl6yz3YxLIpux2yW7L6IOw-ypsqEHIVYq4S8MVnKwjrbl-EpWrNKXYMFBwmcU2WmpcNaq1ADp18F-797ag_agKv-_lTwMr99Kbd3mWkPRZNfX-3Vi2JboUFBsKMeo/s1600/slider10.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo2a8KRGYaVPU-0bRcrTT4thZn4hwtT3KKOPiiWlS3JJgqyRAte61zssCsqnH4gSFqNECFwHEaE5NUvb1x4Z_Xaln08RgRrH1rq9Ba-FizkmMVLKJTV9hmXFIPIfLrcv6dRkbITfGtabDWNAVK4lrozjdYhT-uSiMmBCvwBTWUlUdI-WxBY0nLTlkjHe8/s1600/slider9.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtRfQdD-SaAqaoXrP1FwBBpTD0AHs1vci2_LLnNLRRsUJmznv1sCbwsd82kOzkTOIeNF3MZO-_r9tjyJ5QVBNmNMlW-QDGiq1n0khMHCbJtSajW2m7N0pwGH0G2hqeSLbIvjDQCtaHGuE5TEsP-8cBDx-0aqwIkXzM2sgyHaTP-gNzXCEC9dCFOc85Mbg/s1600/slider8.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7SJLi_vrtWrOo5Oo4A-ohxbF7CW40J1gSf5g7uhRcf4wRYTF71q3IS_862jxlEAkjcZE-TecgO_1Qkzox3eSdBxgGMyOPmWorkyiZLr5zszaaJvmyHzAAERFjtHTnR5Y5cF4fKqsTfjQNAOZRQ6OKIszzmjXUssfS3zcHa_Fwt8Mv1ulyAMjCMP_Njl8/s1600/slider7.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpRYuc4RWpSJfqIhFU0CuDHd545ddJs0f0ulri3ykhhDN0W8EhFaPA7cX5MTcNFsf9wlBO41uYDGuWxAVHZnAdVEDkKV4rsR5NEjNZ_8EhBUBOrwzFASWqLLA2qEkhRwyohtWo3t2nqmcSNp-1lDnElNStXMA1HiAy-35igagX-grDvbQWni8DwE15R48/s1600/slider5.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEoJh7J8RAwg19BQfuUm829KQeS_NtRQXEIIF-wMXe2qNgI0Xi1HDlcMTmrDGsne9b-1kNXYdbqqBVxtFxd8GpMsJnBusSwDawgbVIJdEMRxT9yj6T8k8Lkb1TQunUmTCLxQJ4lKD49TTL6N-6uvorbFKa47t-DsMkKezq1plJQvfYAMCNv0oPbsb54qs/s1600/slider4.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhdwIqS1mX-cqaaEUEiegroY7MPDvZJdEi14NvPqV51-E0CJ3zImi9KJAsHsIUnYJgIfX9cipLDLmw6DWzoMSZiclgJSoMjmIEYfMj_ezlvph8SR4wvf4li8PIXr-cvYRdNC19ArJDkA-qm1w_wWgGRoGA7pl1AnD48_sOOxRiqEm0oEH7lk-BN-4fjG8/s1600/slider3.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX4YeLtpViE4Et8xpgP3H7Qi5X-6iiBCrqFLv0NzG9w97BFO_OjGAOYqlAbvRKHnj1neYunXVXOYEU0An9wpZ2Lu78hNPheTnOK9kVZczXws3OrNYmzI4O2E3pzltAroiAIrv8PzRrNHqopvOIysb6CwSSw8RthXP6NKVvc7N_R_xpDhG-W6tult35gpo/s1600/slider2.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUkrINrBHDP0QQZDHYtdqHzlQX7DxA_vRA_zIOtMcxVquMVVgHDHQA3ooO3F3CMOVhmLRzBBZ65kpVVmSFPQf3sbK8J2sWh_8FMZzLx4JBqqtEq3su1QtDMd-42Jn5aGo0fBEI8EDiNjU_CLbMlVtYknR3Gs4zq1S0uVcTk4YECVM_EcvkyEP2hyLtzN8/s1600/slider1.jpg",  
];

const Slider = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Swiper
        autoplay
        loop
        showsPagination={false}
        autoplayTimeout={9.5}
        removeClippedSubviews={false}
      >
        {sliderImages.map((uri, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imageWrapper}>
              <FastImage
                source={{ uri }}
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    marginVertical: 10,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: width - 30,
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Slider;

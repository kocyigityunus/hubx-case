import { Logger } from '@/utils/logger';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  LayoutAnimation,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList, ScreenNames } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native-unistyles';
import { colors, fonts } from '@styles';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FastImage from '@d11/react-native-fast-image';
import { BlurView } from '@react-native-community/blur';
import { SvgXml } from 'react-native-svg';
import { getCategories, getQuestions } from '@/api';
import { colord } from 'colord';

//
const glassSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_621_8760)"><path d="M17.2583 16.075L14.425 13.25C15.3392 12.0854 15.8352 10.6472 15.8333 9.16667C15.8333 7.84813 15.4423 6.5592 14.7098 5.46287C13.9773 4.36654 12.9361 3.51206 11.7179 3.00747C10.4997 2.50289 9.15927 2.37087 7.86607 2.6281C6.57286 2.88534 5.38497 3.52027 4.45262 4.45262C3.52027 5.38497 2.88534 6.57286 2.6281 7.86607C2.37087 9.15927 2.50289 10.4997 3.00747 11.7179C3.51206 12.9361 4.36654 13.9773 5.46287 14.7098C6.5592 15.4423 7.84813 15.8333 9.16667 15.8333C10.6472 15.8352 12.0854 15.3392 13.25 14.425L16.075 17.2583C16.1525 17.3364 16.2446 17.3984 16.3462 17.4407C16.4477 17.4831 16.5567 17.5048 16.6667 17.5048C16.7767 17.5048 16.8856 17.4831 16.9872 17.4407C17.0887 17.3984 17.1809 17.3364 17.2583 17.2583C17.3364 17.1809 17.3984 17.0887 17.4407 16.9872C17.4831 16.8856 17.5048 16.7767 17.5048 16.6667C17.5048 16.5567 17.4831 16.4477 17.4407 16.3462C17.3984 16.2446 17.3364 16.1525 17.2583 16.075V16.075ZM4.16667 9.16667C4.16667 8.17776 4.45991 7.21106 5.00932 6.38882C5.55873 5.56657 6.33962 4.92571 7.25325 4.54727C8.16688 4.16883 9.17222 4.06982 10.1421 4.26274C11.112 4.45567 12.0029 4.93187 12.7022 5.63114C13.4015 6.3304 13.8777 7.22131 14.0706 8.19122C14.2635 9.16112 14.1645 10.1665 13.7861 11.0801C13.4076 11.9937 12.7668 12.7746 11.9445 13.324C11.1223 13.8734 10.1556 14.1667 9.16667 14.1667C7.84059 14.1667 6.56882 13.6399 5.63114 12.7022C4.69345 11.7645 4.16667 10.4928 4.16667 9.16667Z" fill="#ABABAB"/></g><defs><clipPath id="clip0_621_8760"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>`;
const HeaderView = () => {
  const insets = useSafeAreaInsets();

  //
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: 14,
        borderBottomWidth: 0.5,
        borderColor: colord('#3C3C43').alpha(0.1).toHex(),
      }}
    >
      <FastImage
        style={{ position: 'absolute', inset: 0 }}
        source={require('@assets/images/header_bg.png')}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View style={{ paddingHorizontal: 24 }}>
        <Text
          style={{
            fontFamily: fonts.Rubik400Regular,
            fontSize: 16,
            letterSpacing: 0.07,
            color: colors.dark900,
          }}
        >
          Hi, plant lover!
        </Text>
        <Text
          style={{
            marginTop: 6,
            fontFamily: fonts.Rubik500Medium,
            fontSize: 24,
            lineHeight: 28,
            letterSpacing: 0.35,
            color: colors.dark900,
          }}
        >
          Good Afternoon! ⛅
        </Text>

        <TouchableHighlight
          underlayColor={colors.white}
          style={{
            borderWidth: 0.2,
            borderColor: colord('#3C3C43').alpha(0.25).toHex(),
            height: 44,
            marginTop: 14,
            borderRadius: 12,
            backgroundColor: colord(colors.white).alpha(0.9).toHex(),
          }}
          onPress={() => {
            console.log('TODO: handle search for plants press');
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 16,
              alignItems: 'center',
              flexDirection: 'row',
              gap: 12,
            }}
          >
            <SvgXml xml={glassSvg} width={20} height={20} />
            <Text
              style={{
                fontFamily: fonts.Rubik400Regular,
                fontSize: 15.5,
                letterSpacing: 0.07,
                color: '#AFAFAF',
              }}
            >
              Search for plants
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

//
const envelopeSvg = `<svg viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_589_5497)"><path d="M28.6743 23.3546C27.8782 23.8854 26.9534 24.1659 26 24.1659C25.0466 24.1659 24.1219 23.8854 23.3258 23.3546L10.2131 14.6126C10.1403 14.5641 10.0694 14.5135 10 14.4615V28.7863C10 30.4287 11.3328 31.7321 12.9458 31.7321H39.0541C40.6965 31.7321 41.9999 30.3993 41.9999 28.7863V14.4614C41.9304 14.5136 41.8594 14.5642 41.7864 14.6128L28.6743 23.3546Z" fill="url(#paint0_linear_589_5497)"/><path d="M11.2531 13.0526L24.3658 21.7948C24.8622 22.1257 25.4311 22.2911 25.9999 22.2911C26.5689 22.2911 27.1378 22.1256 27.6342 21.7948L40.7469 13.0526C41.5316 12.5298 42 11.6548 42 10.7104C42 9.08663 40.6789 7.76562 39.0552 7.76562H12.9448C11.3211 7.76569 10 9.08669 10 10.712C10 11.6548 10.4685 12.5298 11.2531 13.0526Z" fill="url(#paint1_linear_589_5497)"/></g><foreignObject x="-14" y="-43" width="105" height="105"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(22.5px);clip-path:url(#bgblur_0_589_5497_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter1_d_589_5497)" data-figma-bg-blur-radius="45"><rect x="31" y="2" width="15" height="15" rx="7.5" fill="#E82C13" fill-opacity="0.9" shape-rendering="crispEdges"/><path d="M38.6699 12.3413H39.6543V6H38.6699L37 7.18652V8.15332L38.5952 7.01514H38.6699V12.3413Z" fill="white"/></g><defs><filter id="filter0_d_589_5497" x="0" y="0.765625" width="52" height="43.9663" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_589_5497"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_589_5497" result="shape"/></filter><filter id="filter1_d_589_5497" x="-14" y="-43" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_589_5497"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_589_5497" result="shape"/></filter><clipPath id="bgblur_0_589_5497_clip_path" transform="translate(14 43)"><rect x="31" y="2" width="15" height="15" rx="7.5"/></clipPath><linearGradient id="paint0_linear_589_5497" x1="26" y1="14.4614" x2="41.8085" y2="37.5513" gradientUnits="userSpaceOnUse"><stop stop-color="#F0D399"/><stop offset="1" stop-color="#D9A846"/></linearGradient><linearGradient id="paint1_linear_589_5497" x1="26" y1="7.76563" x2="38.3343" y2="29.1859" gradientUnits="userSpaceOnUse"><stop stop-color="#F0D399"/><stop offset="1" stop-color="#D9A846"/></linearGradient></defs></svg>`;
const arrowRightSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_589_5492)"><path d="M9.99981 18.9999C9.76615 19.0004 9.53972 18.919 9.35981 18.7699C9.25855 18.686 9.17485 18.5829 9.11349 18.4665C9.05214 18.3502 9.01435 18.2229 9.00227 18.0919C8.99019 17.9609 9.00408 17.8289 9.04312 17.7033C9.08217 17.5777 9.1456 17.461 9.22981 17.3599L13.7098 11.9999L9.38981 6.62994C9.30674 6.52765 9.24471 6.40996 9.20728 6.28362C9.16985 6.15728 9.15775 6.02479 9.17169 5.89376C9.18563 5.76273 9.22533 5.63575 9.2885 5.52011C9.35168 5.40447 9.43708 5.30246 9.53981 5.21994C9.64327 5.1289 9.76444 5.06024 9.8957 5.01825C10.027 4.97626 10.1655 4.96185 10.3026 4.97594C10.4397 4.99002 10.5724 5.03229 10.6924 5.1001C10.8123 5.1679 10.917 5.25977 10.9998 5.36994L15.8298 11.3699C15.9769 11.5489 16.0573 11.7733 16.0573 12.0049C16.0573 12.2366 15.9769 12.461 15.8298 12.6399L10.8298 18.6399C10.7295 18.761 10.6021 18.8566 10.4578 18.9192C10.3136 18.9817 10.1567 19.0094 9.99981 18.9999Z" fill="#D0B070"/></g><defs><clipPath id="clip0_589_5492"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`;
type FreePremiumViewProps = { onPress: () => void; style?: StyleProp<ViewStyle> };
const FreePremiumView = ({ onPress, style }: FreePremiumViewProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          backgroundColor: '#24201A',
          paddingHorizontal: 20,
          height: 64,
          flexDirection: 'row',
          gap: 16,
          borderRadius: 12,
          alignItems: 'center',
        },
        style,
      ]}
    >
      <SvgXml xml={envelopeSvg} width={52} height={45} style={{ marginTop: 7 }} />
      <View style={{ gap: 1 }}>
        <Text
          style={{
            fontFamily: fonts.SFProText,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            letterSpacing: -0.24,
            color: '#E5C990',
          }}
        >
          FREE <Text style={{ fontWeight: 'semibold' }}>Premium Available </Text>
        </Text>
        <Text
          style={{
            fontFamily: fonts.SFProText,
            fontWeight: 'regular',
            fontSize: 13,
            lineHeight: 16,
            color: '#F5C25B',
          }}
        >
          Tap to upgrade your account!
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <SvgXml xml={arrowRightSvg} width={24} height={24} />
    </TouchableOpacity>
  );
};

//
type Question = Awaited<ReturnType<typeof getQuestions>>[number];
const Question = ({ question }: { question: Question }) => {
  const navigation = useNavigation<NavType>();

  //
  return (
    <FastImage
      key={question.id}
      style={{ width: 240, height: 164, borderRadius: 12 }}
      source={{ uri: question.image_uri }}
      resizeMode={FastImage.resizeMode.cover}
    >
      <Pressable
        style={{ flex: 1, justifyContent: 'flex-end' }}
        onPress={() => {
          navigation.push(ScreenNames.Other.WebView, { url: question.uri });
        }}
      >
        <BlurView style={{ height: 64, pointerEvents: 'none' }}>
          <View
            style={{
              paddingStart: 12,
              paddingEnd: 4,
              paddingTop: 11,
              pointerEvents: 'none',
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontFamily: fonts.Rubik400Regular,
                fontSize: 15,
                lineHeight: 20,
                letterSpacing: -0.24,
                color: colors.white,
                pointerEvents: 'none',
              }}
            >
              {question.title}
            </Text>
          </View>
        </BlurView>
      </Pressable>
    </FastImage>
  );
};

type Category = Awaited<ReturnType<typeof getCategories>>['data'][number];
const Category = ({ category, width }: { category: Category; width: number }) => {
  return (
    <View
      style={{
        height: 152,
        width: width,
        borderWidth: 0.5,
        borderColor: colord('#3C3C43').alpha(0.1).toHex(),
        borderRadius: 12,
        backgroundColor: colors.white,
        padding: 16,
      }}
    >
      <FastImage
        style={{ position: 'absolute', inset: 0, borderRadius: 12 }}
        source={{ uri: category.image.url }}
      />
      <Text
        numberOfLines={2}
        style={{
          fontFamily: fonts.Rubik500Medium,
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: -0.32,
          maxWidth: '75%',
          color: colors.dark900,
        }}
      >
        {category.title}
      </Text>
    </View>
  );
};

const ListHeaderComponent = () => {
  const { data: questionsData, isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
    refetchOnMount: 'always',
    select: data => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      return data;
    },
  });

  console.log({ questionsData, isLoading });

  //
  const QuestionsView = isLoading ? (
    <View
      style={{
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={colors.dark900} />
    </View>
  ) : (
    <ScrollView
      horizontal
      style={{ overflow: 'visible' }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingHorizontal: 24 }}
      snapToAlignment="start"
      snapToInterval={240}
      decelerationRate={0}
    >
      {questionsData?.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </ScrollView>
  );

  //
  return (
    <View style={{ gap: 24 }}>
      <HeaderView />
      <FreePremiumView
        style={{ marginHorizontal: 24 }}
        onPress={() => {
          console.log('TODO: handle free premium view press');
        }}
      />
      <View>
        <Text style={styles.getStartedText}>Get Started</Text>
        {QuestionsView}
      </View>
    </View>
  );
};

//
type ScreenName = typeof ScreenNames.Main.Home;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('HomeScreen').info('line21.insets', { insets });

  const {
    data: categoriesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    select: data => data.data,
  });

  //
  const { width } = useWindowDimensions();
  const categoryWidth = React.useMemo(() => {
    return (width - 2 * 24 - 11) / 2;
  }, [width]);

  console.log({ categoriesData, isLoading, error });

  //
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        style={{ flex: 1, backgroundColor: '#FBFAFA' }}
        data={categoriesData}
        contentContainerStyle={{ gap: 16, paddingBottom: 64 }}
        columnWrapperStyle={{ gap: 11, paddingHorizontal: 24 }}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Category category={item} width={categoryWidth} />}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedText: {
    color: colors.dark900,
    fontFamily: fonts.Rubik500Medium,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 16,
    marginHorizontal: 24,
  },
});

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//
import { TempScreen } from '../screens/TempScreen';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenNames } from './';
import { SvgXml } from 'react-native-svg';
import { colors, fonts } from '@/styles';
import { PlatformPressable } from '@react-navigation/elements';
import { colord } from 'colord';
import { StyleSheet } from 'react-native-unistyles';
import { HomeScreen } from '@/screens/Main/HomeScreen';

// icons
const homeSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50008 3.04199H18.5078C18.4413 2.22906 17.9482 1.78564 17.0376 1.78564H7.96073C7.05968 1.78564 6.55698 2.22906 6.50008 3.04199ZM4.5652 5.71172H20.4426C20.3098 4.83413 19.8545 4.33529 18.8492 4.33529H6.15863C5.15325 4.33529 4.69798 4.83413 4.5652 5.71172ZM5.68439 22.3214H19.314C21.2868 22.3214 22.3206 21.3237 22.3206 19.4207V10.1182C22.3206 8.21518 21.2868 7.21749 19.314 7.21749H5.68439C3.70208 7.21749 2.67773 8.20594 2.67773 10.1182V19.4207C2.67773 21.3237 3.70208 22.3214 5.68439 22.3214Z" fill="currentColor"/></svg>`;
const diagnoseSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0121 4.2001C20.9579 4.20426 15.4204 4.67926 12.7871 2.2001C12.6288 2.04593 12.3788 2.04593 12.2163 2.2001C9.58294 4.67926 4.04961 4.20426 3.99128 4.2001C3.87461 4.1876 3.76211 4.22926 3.67461 4.30843C3.58711 4.3876 3.53711 4.49593 3.53711 4.6126V8.4751C3.53711 21.3793 12.3496 22.9001 12.4371 22.9126C12.4579 22.9168 12.4829 22.9168 12.5038 22.9168C12.5246 22.9168 12.5454 22.9168 12.5663 22.9126C12.6538 22.9001 21.4663 21.3793 21.4663 8.4751V4.6126C21.4663 4.49593 21.4163 4.3876 21.3329 4.30843C21.2454 4.22926 21.1288 4.1876 21.0121 4.2001ZM16.9538 13.5584C16.9538 13.7876 16.7663 13.9751 16.5371 13.9751H13.9704V16.5418C13.9704 16.7709 13.7829 16.9584 13.5538 16.9584H11.4454C11.2163 16.9584 11.0288 16.7709 11.0288 16.5418V13.9751H8.46211C8.23294 13.9751 8.04544 13.7876 8.04544 13.5584V11.4501C8.04544 11.2209 8.23294 11.0334 8.46211 11.0334H11.0288V8.46676C11.0288 8.2376 11.2163 8.0501 11.4454 8.0501H13.5538C13.7829 8.0501 13.9704 8.2376 13.9704 8.46676V11.0334H16.5371C16.7663 11.0334 16.9538 11.2209 16.9538 11.4501V13.5584Z" fill="currentColor"/></svg>`;
const scanSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4678 11.6519C23.9141 11.6519 24.2772 12.0169 24.2773 12.4673C24.2773 12.9167 23.9142 13.2808 23.4678 13.2808H22.3389V17.1655C22.3387 19.5175 20.4395 21.4282 18.1055 21.4282H16.4121C15.9647 21.4281 15.6025 21.0632 15.6025 20.6128C15.6027 20.1636 15.9648 19.7985 16.4121 19.7983H18.1055C19.5478 19.7983 20.7215 18.6186 20.7217 17.1655V13.2808H17.9336V14.3628C17.9441 15.7164 16.8651 16.8226 15.5205 16.8354H9.64941C8.30593 16.8226 7.22677 15.7164 7.2373 14.3628V13.2808H4.44922V17.1694C4.44922 18.6173 5.61948 19.7952 7.05762 19.7974L8.78809 19.7983C9.23439 19.7984 9.59653 20.1635 9.59668 20.6128C9.59562 21.0633 9.23453 21.4281 8.78711 21.4282L7.05566 21.4272C4.72679 21.4251 2.83008 19.5151 2.83008 17.1694V13.2808H1.70215C1.2559 13.2805 0.892578 12.9166 0.892578 12.4673C0.89268 12.017 1.25596 11.6521 1.70215 11.6519H23.4678ZM15.5205 5.86963C16.1636 5.86963 16.7818 6.12991 17.2314 6.59326C17.6842 7.06089 17.9347 7.68947 17.9336 8.34326V9.70166C17.9283 9.86111 17.8019 9.99133 17.6436 9.99561H7.52441C7.36718 9.99017 7.24049 9.85998 7.2373 9.70166V8.34326C7.22561 6.98958 8.30588 5.88354 9.64941 5.86963H15.5205ZM8.78711 1.78564C9.23354 1.78564 9.59668 2.15056 9.59668 2.60107C9.59667 3.05051 9.2346 3.41553 8.78711 3.41553L7.05566 3.4165C5.61881 3.41882 4.44933 4.59679 4.44922 6.04443V8.07373C4.44912 8.52309 4.08602 8.88916 3.63965 8.88916C3.19332 8.8891 2.83115 8.52306 2.83105 8.07373V6.04443C2.83117 3.69895 4.726 1.78889 7.05469 1.78662L8.78613 1.78564H8.78711ZM18.1045 1.78564C20.4397 1.78564 22.3389 3.69733 22.3389 6.04834V8.07373C22.3389 8.52317 21.9768 8.88916 21.5293 8.88916C21.0831 8.88893 20.7207 8.52303 20.7207 8.07373V6.04834C20.7207 4.59621 19.5469 3.41455 18.1045 3.41455H16.4121C15.9657 3.41455 15.6025 3.05052 15.6025 2.60107C15.6027 2.15069 15.9658 1.78564 16.4121 1.78564H18.1045Z" fill="currentColor"/></svg>`;
const myGardenSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_594_5795)"><g clip-path="url(#clip1_594_5795)"><path d="M13.5205 1.59473C13.8276 1.16428 14.4478 1.13706 14.7939 1.51367L14.8594 1.59473L20.5859 9.62207C23.1474 13.2118 22.2311 18.182 18.6045 20.6445L18.4072 20.7734L18.2061 20.8975C17.2131 21.4871 16.1221 21.8406 15.0117 21.957V24.1797C15.0117 24.6324 14.6441 24.9999 14.1904 25C13.7691 25 13.4215 24.6831 13.374 24.2754L13.3691 24.1797L13.3682 21.957C12.2576 21.8406 11.166 21.4873 10.1729 20.8975C6.29808 18.5946 5.17076 13.5307 7.65918 9.81641L7.79395 9.62207L13.5205 1.59473ZM23.0527 18.3271C23.1441 17.8838 23.5781 17.5985 24.0225 17.6895C24.4667 17.7806 24.7532 18.2138 24.6621 18.6572C24.4719 19.5826 24.0349 20.3783 23.4316 21.0459C22.939 21.591 22.4436 21.9482 22.085 22.1377C21.684 22.3495 21.187 22.1969 20.9746 21.7969C20.7775 21.4253 20.8955 20.9709 21.2344 20.7383L21.4375 20.6143L21.5693 20.5234C21.7874 20.3662 22.0077 20.1732 22.2119 19.9473C22.6297 19.4848 22.9255 18.946 23.0527 18.3271ZM14.1904 8.39844C13.7691 8.39844 13.4215 8.71531 13.374 9.12305L13.3691 9.21777L13.3682 12.3242L12.1211 11.0518L12.0449 10.9824C11.7254 10.7288 11.2584 10.7468 10.959 11.0391C10.6599 11.3313 10.632 11.7959 10.8789 12.1201L10.9463 12.1982L13.3086 14.6074L13.3682 14.6621L13.3691 18.4414L13.374 18.5371C13.4216 18.9448 13.7692 19.2607 14.1904 19.2607C14.5793 19.2607 14.9051 18.991 14.9902 18.6289L15.0059 18.5371L15.0107 18.4561L17.7842 15.4805L17.8496 15.4014C18.0883 15.0709 18.0479 14.6068 17.7412 14.3223C17.4346 14.0378 16.9682 14.0316 16.6553 14.293L16.5801 14.3643L15.0117 16.0479V9.21777L15.0059 9.12305C14.9584 8.71537 14.6117 8.39853 14.1904 8.39844ZM5.30078 7.09375C5.62843 6.78052 6.14901 6.79218 6.46289 7.11914C6.75238 7.42095 6.76519 7.88606 6.50781 8.20215L6.31543 8.40918L6.18555 8.56543C5.97114 8.83106 5.75388 9.14816 5.55078 9.51465C5.26407 10.0321 5.03033 10.6026 4.86719 11.2236C4.75215 11.6616 4.30219 11.9234 3.86328 11.8086C3.42484 11.6936 3.16264 11.2463 3.27734 10.8086C3.47634 10.0509 3.76249 9.35371 4.11328 8.7207C4.54557 7.94068 4.98537 7.39534 5.30078 7.09375Z" fill="currentColor"/></g></g><defs><clipPath id="clip0_594_5795"><rect width="25" height="25" fill="white"/></clipPath><clipPath id="clip1_594_5795"><rect width="25" height="25" fill="white" transform="translate(2)"/></clipPath></defs></svg>`;
const profileSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9528 11.7719C15.337 11.7719 17.4092 9.76968 17.4092 7.16262C17.4092 4.58684 15.337 2.67847 12.9528 2.67847C10.5687 2.67847 8.49651 4.62855 8.49651 7.18347C8.49651 9.76968 10.5576 11.7719 12.9528 11.7719ZM5.47735 21.4285H20.4172C21.6093 21.4285 22.3223 20.9071 22.3223 20.0415C22.3223 17.351 18.7238 13.6386 12.9417 13.6386C7.17075 13.6386 3.57227 17.351 3.57227 20.0415C3.57227 20.9071 4.28528 21.4285 5.47735 21.4285Z" fill="currentColor"/></svg>`;

// BDBDBD, green400

const getIconSvg = (routeName: string) => {
  switch (routeName) {
    case ScreenNames.Main.Home:
      return homeSvg;
    case ScreenNames.Main.Diagnose:
      return diagnoseSvg;
    case ScreenNames.Main.Identify:
      return scanSvg;
    case ScreenNames.Main.MyGarden:
      return myGardenSvg;
    case ScreenNames.Main.Profile:
      return profileSvg;
    default:
      return '';
  }
};

type TabBarSideButtonProps = {
  title: string;
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
};
const TabBarSideButton = ({ title, routeName, isFocused, onPress }: TabBarSideButtonProps) => {
  //
  const iconsvg = getIconSvg(routeName);

  //
  return (
    <PlatformPressable
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      hitSlop={8}
      onPress={onPress}
    >
      <SvgXml
        xml={iconsvg}
        width={25}
        height={25}
        color={isFocused ? colors.green400 : '#BDBDBD'}
      />
      <Text
        style={[
          { fontFamily: fonts.Rubik400Regular, fontSize: 10, letterSpacing: -0.24 },
          { marginTop: 4.8 },
          { color: isFocused ? colors.green400 : '#979798' },
        ]}
      >
        {title}
      </Text>
    </PlatformPressable>
  );
};

type TabBarCenterButtonProps = {
  onPress: () => void;
};
const TabBarCenterButton = ({ onPress }: TabBarCenterButtonProps) => {
  return (
    <PlatformPressable style={{ width: 64 }} onPress={onPress}>
      <View
        style={{
          position: 'absolute',
          top: -24,
          left: 0,
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: colord(colors.green400).alpha(0.7).toHex(),
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: colors.green400,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SvgXml xml={scanSvg} width={25} height={25} color={colors.white} />
        </View>
      </View>
    </PlatformPressable>
  );
};

// TODO: move tab bar component to a separate file
/* eslint-disable react/no-unstable-nested-components */

//
const Tab = createBottomTabNavigator();
const BoottomTabNavigator = () => {
  //
  const insets = useSafeAreaInsets();

  //
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        console.log({ state, descriptors, navigation });
        return (
          <View
            style={[
              styles.tabBarContainer,
              { height: insets.bottom + 49, paddingBottom: insets.bottom },
            ]}
          >
            {state.routes.map((route, index) => {
              //
              const { options } = descriptors[route.key];
              const label = options.tabBarLabel || options.title || route.name;
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              const isCenter = route.name === ScreenNames.Main.Identify;
              if (isCenter) {
                return (
                  <TabBarCenterButton
                    key={index}
                    onPress={() => {
                      console.log('Tab - Center Button Pressed');
                    }}
                  />
                );
              }

              // else
              return (
                <TabBarSideButton
                  key={index}
                  title={label as string}
                  routeName={route.name}
                  isFocused={isFocused}
                  onPress={onPress}
                />
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name={ScreenNames.Main.Home}
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={ScreenNames.Main.Diagnose}
        component={TempScreen}
        options={{ tabBarLabel: 'Diagnose' }}
        initialParams={{ text: 'Diagnose' }}
      />
      <Tab.Screen
        name={ScreenNames.Main.Identify}
        component={TempScreen}
        options={{ tabBarLabel: 'Identify' }}
        initialParams={{ text: 'Identify' }}
      />
      <Tab.Screen
        name={ScreenNames.Main.MyGarden}
        component={TempScreen}
        options={{ tabBarLabel: 'My Garden' }}
        initialParams={{ text: 'My Garden' }}
      />
      <Tab.Screen
        name={ScreenNames.Main.Profile}
        component={TempScreen}
        options={{ tabBarLabel: 'Profile' }}
        initialParams={{ text: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export { BoottomTabNavigator };

//
const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopColor: '#13231B1A', // 10%
    borderTopWidth: 1,
    backgroundColor: '#FFFFFFEB', // 90%
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 6,
  },
});

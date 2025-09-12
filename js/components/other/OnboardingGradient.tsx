import LinearGradient from 'react-native-linear-gradient';

export const OnboardingGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={['#F8FAFD', '#EDF7FE']}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.3 }}
      style={{ flex: 1, width: '100%' }}
    >
      {children}
    </LinearGradient>
  );
};

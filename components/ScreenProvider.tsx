import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';

type ScreenProviderProps = {
  children: ReactNode;
};

export default function ScreenProvider({ children }: ScreenProviderProps) {
  return (
    <ScrollView
      className="flex-1 bg-white px-[5vw] pt-4"
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

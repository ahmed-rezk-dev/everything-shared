import type { PressableRef, SlottablePressableProps } from '@everything-shared/types';

type RootProps = SlottablePressableProps & {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  disabled?: boolean;
};

type RootRef = PressableRef;

export type { RootProps, RootRef };

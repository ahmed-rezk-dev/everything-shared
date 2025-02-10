import * as React from 'react';
import * as SeparatorPrimitive from '@everything-shared/separator';
import { cn } from '@everything-shared/utils';

const Separator = React.forwardRef<SeparatorPrimitive.RootRef, SeparatorPrimitive.RootProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = 'Separator';

export { Separator };

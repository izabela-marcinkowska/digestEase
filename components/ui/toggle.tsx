'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-rose-100 hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-rose-100 data-[state=on]:text-rose-900 dark:ring-offset-rose-950 dark:hover:bg-rose-800 dark:hover:text-rose-400 dark:focus-visible:ring-rose-300 dark:data-[state=on]:bg-rose-800 dark:data-[state=on]:text-rose-50',
  {
    variants: {
      variant: {
        default: 'bg-emerald-300 text-emerald-900',
        outline:
          'border border-rose-200 bg-transparent hover:bg-rose-100 hover:text-rose-900 dark:border-rose-800 dark:hover:bg-rose-800 dark:hover:text-rose-50',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
        auto: 'h-auto px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

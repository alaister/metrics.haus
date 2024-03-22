import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import LoadingDots from './LoadingDots'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const loadingDotVariants = cva(
  'absolute inset-0 flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'text-gray-50',
        destructive: 'text-gray-50',
        outline: 'text-gray-950',
        secondary: 'text-gray-900',
        ghost: 'text-gray-950',
        link: 'text-gray-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading: _isLoading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(false)
    const artificialDelayPromiseRef = useRef<Promise<void>>(Promise.resolve())

    useEffect(() => {
      if (_isLoading) {
        setIsLoading(true)
        artificialDelayPromiseRef.current = new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 500)
        })
      } else {
        artificialDelayPromiseRef.current.then(() => {
          setIsLoading(false)
        })
      }
    }, [_isLoading])

    const loadingEl = useMemo(
      () =>
        isLoading && (
          <div className={loadingDotVariants({ variant })}>
            <LoadingDots />
          </div>
        ),
      [isLoading, variant],
    )

    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading &&
            'select-none text-[rgba(0,0,0,0)] hover:text-[rgba(0,0,0,0)]',
        )}
        ref={ref}
        {...props}
      >
        {asChild ? (
          isValidElement(children) ? (
            cloneElement(
              children,
              undefined,
              children.props.children,
              loadingEl,
            )
          ) : null
        ) : (
          <>
            {children}

            {loadingEl}
          </>
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

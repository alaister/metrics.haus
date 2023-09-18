import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '~/lib/utils'
import LoadingDots from './LoadingDots'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
        destructive:
          'bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90',
        outline:
          'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80',
        ghost:
          'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
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
  }
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
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
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
    ref
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
      [isLoading, variant]
    )

    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading &&
            'select-none text-[rgba(0,0,0,0)] hover:text-[rgba(0,0,0,0)]'
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
              loadingEl
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
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

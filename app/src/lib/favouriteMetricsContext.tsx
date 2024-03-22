import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
const FAVOURITE_METRICS = 'favouriteMetrics'

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}

const FavouriteMetricsContext = createContext<{
  ids: string[]
  setIds: (ids: string[]) => void
}>({ ids: [], setIds: () => {} })

export const FavouriteMetricsProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [ids, setIds] = useLocalStorage<string[]>(FAVOURITE_METRICS, []) //

  return (
    <FavouriteMetricsContext.Provider value={{ ids, setIds }}>
      {children}
    </FavouriteMetricsContext.Provider>
  )
}
export const useFavouriteMetrics = () => {
  return useContext(FavouriteMetricsContext)
}

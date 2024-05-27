import { CookieOptions, Response } from 'express'

export const omit = <T extends object, K extends keyof T>(object: T, fields: K[]): Record<K, T[K]> => {
      const newObj = { ...object }

      for (let index = 0; index < fields.length; index++) {
            if (fields[index] in object) {
                  delete newObj[fields[index]]
            }
      }

      return newObj
}

export const oneWeek = 7 * 24 * 60 * 60 * 1000 // 7 ngày tính bằng miligiây
export const expriresAT = new Date(Date.now() + oneWeek)

export const setCookieResponse = (
      res: Response,
      // expires: number = oneWeek,
      name: string,
      value: string,
      options?: CookieOptions
) => {
      const expiryDate = new Date(Date.now() + oneWeek)
      const maxAge = 24 * 60 * 60 * 7
      res.cookie(name, value, { ...options, maxAge: oneWeek, sameSite: 'none', secure: true })
      return expiryDate
}

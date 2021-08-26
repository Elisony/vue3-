import Cookies from 'js-cookie'

export function getToken (TokenKey:string) {
  return Cookies.get(TokenKey)
}

export function setToken (TokenKey:string, token:string) {
  return Cookies.set(TokenKey, token, { expires: 30 })
}

export function removeToken (TokenKey:string) {
  return Cookies.remove(TokenKey)
}

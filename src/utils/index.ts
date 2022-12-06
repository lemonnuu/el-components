export const toKebabCase = (camelCaseStr: string) => {
  return camelCaseStr.replace(/([A-Z])/g, '-$1').toLowerCase()
}

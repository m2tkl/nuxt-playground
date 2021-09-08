/**
 * Validate Password with the following conditions
 * - length: 8 characters or more and less than 99 characters
 * - contains at least one
 *   - lowercase letter
 *   - uppercase letter
 *   - digit
 *   - symbol
 *    ```
 *    = + - ^ $ * . [ ] { } ( ) ? " ! @ # % & / \ , > < ' : ; | _ ~
 *    ```
 * @param password
 * @return If no validation error occurs, return true, Otherwise return false.
 */
export const isValidPassword = (password: string): Boolean => {
  const regexp = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,100}$/
  return regexp.test(password)
}

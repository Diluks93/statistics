import { ThemeType } from './styles';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
  }
}

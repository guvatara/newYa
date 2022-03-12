import { TEMPORARY_ANY } from '@models';

declare module '*.svg' {
  const content: TEMPORARY_ANY;
  export default content;
}

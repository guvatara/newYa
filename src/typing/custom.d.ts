import { TEMPORARY_ANY } from '../models/_project';

declare module '*.svg' {
  const content: TEMPORARY_ANY;
  export default content;
}

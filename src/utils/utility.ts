import { LabelCarouselClassName, LabelCarouselSlideTextClassName } from "../components/carousel/carousel";
import { HTTPS } from "../lib/endpoints";

export function createClassName(defaultClass: string, classes?: string): string {
  return classes ? `${classes} ${defaultClass}` : defaultClass;
}

export const checkUrlContentfulData = (
  urlContentful: string | undefined | null, 
  urlLocal: string
  ): string => {
  /* validates a url from contentful, if it's not valid it will match the provided one */
  if(urlContentful === undefined || urlContentful === null || !!urlContentful){
    urlContentful = urlLocal;
  }
  return urlContentful;
}

/* Does not work */
export function errorHandler() {
  process.on('uncaughtException', function (err) {
    console.log(err); // Displays the Error;
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message); // Displays the Date and Error Message.
    console.error(err.stack);  // Stack in Which the error occurred.
  });
}

export function concatHttpsAndUrlFromContentful(httpsContentful: string): string {
  return HTTPS.concat(httpsContentful);
}

export interface IWindowSize {
  innerWidth: number, 
  innerHeight: number
}

export function getWindowSize(): IWindowSize | undefined {
  if (typeof window !== "undefined") {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export function combineObjects<T extends LabelCarouselSlideTextClassName | LabelCarouselClassName>(
  defaultClass: T,
  classes: T | undefined
  ): T {
    if(classes) {
      let merged = Object.entries(defaultClass).reduce((acc, [key, value]) => 
      // if key is already in defaultClass, add the values, otherwise, create new pair
      ({ ...acc, [key]: (acc[key] || 0) + ' ' + value }), { ...classes });
      return merged;
    } else {
      return defaultClass;
    }
}
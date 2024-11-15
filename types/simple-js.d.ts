declare module '@jidan/simple-js' {
  export function Simple(selector: string): HTMLElement | null;
  export function click(selector: string | HTMLElement, callback: Function): void;
  export function dbclick(selector: string | HTMLElement, callback: Function): void;
  export function hover(selector: string | HTMLElement, callback: Function, callback2?: Function): void;
  export function show(selector: string | HTMLElement): void;
  export function hide(selector: string | HTMLElement): void;
  export function toggle(selector: string | HTMLElement): void;
  export function clone(selector: string | HTMLElement, deep?: boolean): void;
  export function cloneAppend(selector: string | HTMLElement, deep?: boolean): void;
  export function addClass(selector: string | HTMLElement, className: string[]): void;
  export function removeClass(selector: string | HTMLElement, className: string[]): void;
  export function toggleClass(selector: string | HTMLElement, className: string[]): void;
  export function css(selector: string | HTMLElement, property: string, value: string): void;
  export function text(selector: string | HTMLElement, text: string): void;
  export function html(selector: string | HTMLElement, property: string, content: string, append?: boolean): void;
  export function scrollTo(selector: string | HTMLElement): void;
  export function toLink(url: string): void;
  export function on(selector: string | HTMLElement, event: string, callback: Function): void;
  export function off(selector: string | HTMLElement, event: string, callback: Function): void;
}

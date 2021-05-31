declare module '*.css' {
    const styles: any;
    export default styles;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
  }
  
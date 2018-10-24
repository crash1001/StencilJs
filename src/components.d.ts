/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    'description': string;
    'location': string;
    'note': string;
    'time': string;
    'topic': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'location'?: string;
    'note'?: string;
    'time'?: string;
    'topic'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

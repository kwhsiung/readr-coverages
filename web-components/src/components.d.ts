/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LatestCoverages {
    }
    interface ReadrHeader {
    }
}
declare global {
    interface HTMLLatestCoveragesElement extends Components.LatestCoverages, HTMLStencilElement {
    }
    var HTMLLatestCoveragesElement: {
        prototype: HTMLLatestCoveragesElement;
        new (): HTMLLatestCoveragesElement;
    };
    interface HTMLReadrHeaderElement extends Components.ReadrHeader, HTMLStencilElement {
    }
    var HTMLReadrHeaderElement: {
        prototype: HTMLReadrHeaderElement;
        new (): HTMLReadrHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "latest-coverages": HTMLLatestCoveragesElement;
        "readr-header": HTMLReadrHeaderElement;
    }
}
declare namespace LocalJSX {
    interface LatestCoverages {
    }
    interface ReadrHeader {
        "onReadrLogoLinkClick"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "latest-coverages": LatestCoverages;
        "readr-header": ReadrHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "latest-coverages": LocalJSX.LatestCoverages & JSXBase.HTMLAttributes<HTMLLatestCoveragesElement>;
            "readr-header": LocalJSX.ReadrHeader & JSXBase.HTMLAttributes<HTMLReadrHeaderElement>;
        }
    }
}

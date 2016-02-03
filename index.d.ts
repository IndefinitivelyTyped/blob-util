declare function createBlob(parts: any[], options?: { type: string }): Blob
declare function createObjectURL(blob: Blob): string
declare function revokeObjectURL(url: string): void
declare function blobToBinaryString(blob: Blob): Promise<string>
declare function binaryStringToBlob(binary: string, type?: string): Promise<Blob>
declare function blobToBase64String(blob: Blob): Promise<string>
declare function base64StringToBlob(base64: string, type?: string): Promise<Blob>
declare function dataURLToBlob(dataURL: string): Promise<Blob>
declare function imgSrcToDataURL(src: string, type?: string, crossOrigin?: string): Promise<string>
declare function canvasToBlob(canvas: HTMLCanvasElement, type?: string): Promise<Blob>
declare function imgSrcToBlob(src: string, type?: string, crossOrigin?: string): Promise<Blob>
declare function arrayBufferToBlob(arrayBuff: ArrayBuffer, type?: string): Promise<Blob>
declare function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>er file contents here

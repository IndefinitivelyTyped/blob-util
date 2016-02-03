declare export function createBlob(parts: any[], options?: { type: string }): Blob
declare export function createObjectURL(blob: Blob): string
declare export function revokeObjectURL(url: string): void
declare export function blobToBinaryString(blob: Blob): Promise<string>
declare export function binaryStringToBlob(binary: string, type?: string): Promise<Blob>
declare export function blobToBase64String(blob: Blob): Promise<string>
declare export function base64StringToBlob(base64: string, type?: string): Promise<Blob>
declare export function dataURLToBlob(dataURL: string): Promise<Blob>
declare export function imgSrcToDataURL(src: string, type?: string, crossOrigin?: string): Promise<string>
declare export function canvasToBlob(canvas: HTMLCanvasElement, type?: string): Promise<Blob>
declare export function imgSrcToBlob(src: string, type?: string, crossOrigin?: string): Promise<Blob>
declare export function arrayBufferToBlob(arrayBuff: ArrayBuffer, type?: string): Promise<Blob>
declare export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>

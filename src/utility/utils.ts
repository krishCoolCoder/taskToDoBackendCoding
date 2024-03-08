const CryptoJS = require('crypto-js');

export function cryptoEncode( input : Object ): string {
    return CryptoJS.AES.encrypt(
        JSON.stringify(input),
        "godstylekdkd*#&@*"
      ).toString();
}
export function cryptoDecode( input : Object ): any {
    return JSON.parse(
        CryptoJS.AES.decrypt(input, "godstylekdkd*#&@*").toString(CryptoJS.enc.Utf8)
      );
}
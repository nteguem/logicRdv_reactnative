declare module 'react-native-wonderpush' {
    export default class WonderPush {
        static setLogging(enable: boolean): Promise<void>;
        static subscribeToNotifications(fallbackToSettings: boolean): Promise<void>;
        static unsubscribeFromNotifications(): Promise<void>;
        static isSubscribedToNotifications(): Promise<boolean>;
        static trackEvent(type: string, attributes?: Record<string, any>): Promise<void>;
        static addTag(...tags: string[]): Promise<void>;
        static removeTag(...tags: string[]): Promise<void>;
        static removeAllTags(): Promise<void>;
        static hasTag(tag: string): Promise<boolean>;
        static getPropertyValue(property: string): Promise<any>;
        static getPropertyValues(property: string): Promise<any[]>;
        static addProperty(str: string, property: any | any[]): Promise<void>;
        static removeProperty(str: string, property: any | any[]): Promise<void>;
        static setProperty(str: string, property: any | any[]): Promise<void>;
        static unsetProperty(property: string): Promise<void>;
        static putProperties(property: Record<string, any>): Promise<void>;
        static getProperties(): Promise<Record<string, any>>;
        static getTags(): Promise<string[]>;
        static getCountry(): Promise<string>;
        static setCountry(country: string): Promise<void>;
        static getCurrency(): Promise<string>;
        static setCurrency(currency: string): Promise<void>;
        static getLocale(): Promise<string>;
        static setLocale(locale: string): Promise<void>;
        static getTimeZone(): Promise<string>;
        static setTimeZone(timeZone: string): Promise<void>;
        static getUserId(): Promise<string>;
        static setUserId(userId: string): Promise<void>;
        static getDeviceId(): Promise<string>;
        static getInstallationId(): Promise<string>;
        static getPushToken(): Promise<string>;
        static getAccessToken(): Promise<string>;
        static setRequiresUserConsent(isConsent: boolean): Promise<void>;
        static getUserConsent(): Promise<boolean>;
        static setUserConsent(isConsent: boolean): Promise<void>;
        static disableGeolocation(): Promise<void>;
        static enableGeolocation(): Promise<void>;
        static setGeolocation(lat: number, lon: number): Promise<void>;
        static clearEventsHistory(): Promise<void>;
        static clearPreferences(): Promise<void>;
        static clearAllData(): Promise<void>;
        static downloadAllData(): Promise<void>;
        static setDelegate(delegate: {
            onNotificationReceived?(notification: any): void;
            onNotificationOpened?(notification: any, buttonIndex: number): void;
        }): void;
        static getInitialURL(): Promise<string | null>;
    }
}

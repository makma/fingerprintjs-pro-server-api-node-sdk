/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/events/{request_id}': {
    /**
     * Get event by requestId
     * @description This endpoint allows you to get a detailed analysis of an individual request.
     * **Only for Enterprise customers:** Please note that the response includes mobile signals (e.g. `rootApps`) even if the request originated from a non-mobile platform.
     * It is highly recommended that you **ignore** the mobile signals for such requests.
     *
     * Use `requestId` as the URL path parameter. This API method is scoped to a request, i.e. all returned information is by `requestId`.
     */
    get: operations['getEvent']
  }
  '/visitors/{visitor_id}': {
    /**
     * Get visits by visitorId
     * @description This endpoint allows you to get a history of visits for a specific `visitorId`. Use the `visitorId` as a URL path parameter.
     * Only information from the _Identification_ product is returned.
     *
     * #### Headers
     *
     * * `Retry-After` — Present in case of `429 Too many requests`. Indicates how long you should wait before making a follow-up request. The value is non-negative decimal integer indicating the seconds to delay after the response is received.
     */
    get: operations['getVisits']
  }
  '/webhook': {
    /** @description Fake path to describe webhook format. More information about webhooks can be found in the [documentation](https://dev.fingerprint.com/docs/webhooks) */
    trace: {
      responses: {
        /** @description Dummy for the schema */
        default: {
          content: never
        }
      }
    }
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /**
     * PaginatedResponse
     * @description Fields `lastTimestamp` and `paginationKey` added when `limit` or `before` parameter provided and there is more data to show
     */
    Response: {
      visitorId: string
      visits: {
        /**
         * @description Unique identifier of the user's identification request.
         * @example 1654815516083.OX6kx8
         */
        requestId: string
        browserDetails: components['schemas']['BrowserDetails']
        /** @description Flag if user used incognito session. */
        incognito: boolean
        /**
         * Format: ipv4
         * @example 8.8.8.8
         */
        ip: string
        /**
         * DeprecatedIPLocation
         * @deprecated
         * @description This field is **deprecated** and will not return a result for **applications created after January 23rd, 2024**. Please use the [IP Geolocation Smart signal](https://dev.fingerprint.com/docs/smart-signals-overview#ip-geolocation) for geolocation information.
         */
        ipLocation?: {
          /** @description The IP address is likely to be within this radius (in km) of the specified location. */
          accuracyRadius?: number
          /** Format: double */
          latitude?: number
          /** Format: double */
          longitude?: number
          postalCode?: string
          /** Format: timezone */
          timezone?: string
          /** DeprecatedIPLocationCity */
          city?: {
            name?: string
          }
          country?: components['schemas']['Location']
          continent?: components['schemas']['Location']
          subdivisions?: components['schemas']['Subdivision'][]
        }
        /**
         * Format: int64
         * @description Timestamp of the event with millisecond precision in Unix time.
         * @example 1654815516086
         */
        timestamp: number
        /**
         * Time
         * Format: date-time
         * @description Time expressed according to ISO 8601 in UTC format.
         * @example 2022-06-09T22:58:36Z
         */
        time: string
        /**
         * @description Page URL from which the identification request was sent.
         * @example https://some.website/path?query=params
         */
        url: string
        /** @description A customer-provided value or an object that was sent with identification request. */
        tag: {
          [key: string]: unknown
        }
        /**
         * @description A customer-provided id that was sent with identification request.
         * @example someID
         */
        linkedId?: string
        confidence?: components['schemas']['Confidence']
        /** @description Attribute represents if a visitor had been identified before. */
        visitorFound: boolean
        firstSeenAt: components['schemas']['SeenAt']
        lastSeenAt: components['schemas']['SeenAt']
      }[]
      /**
       * Format: int64
       * @description ⚠️ Deprecated paging attribute, please use `paginationKey` instead. Timestamp of the last visit in the current page of results.
       *
       * @example 1654815517198
       */
      lastTimestamp?: number
      /**
       * @description Request ID of the last visit in the current page of results. Use this value in the following request as the `paginationKey` parameter to get the next page of results.
       * @example 1654815517198.azN4IZ
       */
      paginationKey?: string
    }
    ErrorEvent403Response: {
      /** ErrorEvent403ResponseError */
      error?: {
        /**
         * @description Error code:
         *  * `TokenRequired` - `Auth-API-Key` header is missing or empty
         *  * `TokenNotFound` - subscription not found for specified secret key
         *  * `SubscriptionNotActive` - subscription is not active
         *  * `WrongRegion` - server and subscription region differ
         *
         * @example TokenRequired
         * @enum {string}
         */
        code: 'TokenRequired' | 'TokenNotFound' | 'SubscriptionNotActive' | 'WrongRegion'
        /** @example secret key is required */
        message: string
      }
    }
    ErrorEvent404Response: {
      /** ErrorEvent404ResponseError */
      error?: {
        /**
         * @description Error code:
         *  * `RequestNotFound` - request not found for specified id
         *
         * @example RequestNotFound
         * @enum {string}
         */
        code: 'RequestNotFound'
        /** @example request id is not found */
        message: string
      }
    }
    ErrorVisits403: {
      /**
       * @description Error text.
       * @example Forbidden (HTTP 403)
       */
      error: string
    }
    ManyRequestsResponse: {
      /**
       * @description Error text.
       * @example request throttled
       */
      error: string
    }
    WebhookVisit: {
      /** @example 3HNey93AkBW6CRbxV6xP */
      visitorId: string
      /** @example https://google.com?search=banking+services */
      clientReferrer?: string
      /** @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 */
      userAgent?: string
      bot?: components['schemas']['BotdDetectionResult']
      ipInfo?: components['schemas']['IpInfoResult']
      /** @description Flag if user used incognito session. */
      incognito: boolean
      rootApps?: components['schemas']['RootAppsResult']
      emulator?: components['schemas']['EmulatorResult']
      clonedApp?: components['schemas']['ClonedAppResult']
      factoryReset?: components['schemas']['FactoryResetResult']
      jailbroken?: components['schemas']['JailbrokenResult']
      frida?: components['schemas']['FridaResult']
      ipBlocklist?: components['schemas']['IpBlockListResult']
      tor?: components['schemas']['TorResult']
      privacySettings?: components['schemas']['PrivacySettingsResult']
      virtualMachine?: components['schemas']['VirtualMachineResult']
      vpn?: components['schemas']['VpnResult']
      proxy?: components['schemas']['ProxyResult']
      tampering?: components['schemas']['TamperingResult']
      rawDeviceAttributes?: components['schemas']['RawDeviceAttributesResult']
      highActivity?: components['schemas']['HighActivityResult']
      locationSpoofing?: components['schemas']['LocationSpoofingResult']
      suspectScore?: components['schemas']['SuspectScoreResult']
      /**
       * @description Unique identifier of the user's identification request.
       * @example 1654815516083.OX6kx8
       */
      requestId: string
      browserDetails: components['schemas']['BrowserDetails']
      /**
       * Format: ipv4
       * @example 8.8.8.8
       */
      ip: string
      /**
       * DeprecatedIPLocation
       * @deprecated
       * @description This field is **deprecated** and will not return a result for **applications created after January 23rd, 2024**. Please use the [IP Geolocation Smart signal](https://dev.fingerprint.com/docs/smart-signals-overview#ip-geolocation) for geolocation information.
       */
      ipLocation?: {
        /** @description The IP address is likely to be within this radius (in km) of the specified location. */
        accuracyRadius?: number
        /** Format: double */
        latitude?: number
        /** Format: double */
        longitude?: number
        postalCode?: string
        /** Format: timezone */
        timezone?: string
        /** DeprecatedIPLocationCity */
        city?: {
          name?: string
        }
        country?: components['schemas']['Location']
        continent?: components['schemas']['Location']
        subdivisions?: components['schemas']['Subdivision'][]
      }
      /**
       * Format: int64
       * @description Timestamp of the event with millisecond precision in Unix time.
       * @example 1654815516086
       */
      timestamp: number
      /**
       * Time
       * Format: date-time
       * @description Time expressed according to ISO 8601 in UTC format.
       * @example 2022-06-09T22:58:36Z
       */
      time: string
      /**
       * @description Page URL from which the identification request was sent.
       * @example https://some.website/path?query=params
       */
      url: string
      /** @description A customer-provided value or an object that was sent with identification request. */
      tag: {
        [key: string]: unknown
      }
      /**
       * @description A customer-provided id that was sent with identification request.
       * @example someID
       */
      linkedId?: string
      confidence?: components['schemas']['Confidence']
      /** @description Attribute represents if a visitor had been identified before. */
      visitorFound: boolean
      firstSeenAt: components['schemas']['SeenAt']
      lastSeenAt: components['schemas']['SeenAt']
    }
    /** Visit */
    Visit: {
      /**
       * @description Unique identifier of the user's identification request.
       * @example 1654815516083.OX6kx8
       */
      requestId: string
      browserDetails: components['schemas']['BrowserDetails']
      /** @description Flag if user used incognito session. */
      incognito: boolean
      /**
       * Format: ipv4
       * @example 8.8.8.8
       */
      ip: string
      /**
       * DeprecatedIPLocation
       * @deprecated
       * @description This field is **deprecated** and will not return a result for **applications created after January 23rd, 2024**. Please use the [IP Geolocation Smart signal](https://dev.fingerprint.com/docs/smart-signals-overview#ip-geolocation) for geolocation information.
       */
      ipLocation?: {
        /** @description The IP address is likely to be within this radius (in km) of the specified location. */
        accuracyRadius?: number
        /** Format: double */
        latitude?: number
        /** Format: double */
        longitude?: number
        postalCode?: string
        /** Format: timezone */
        timezone?: string
        /** DeprecatedIPLocationCity */
        city?: {
          name?: string
        }
        country?: components['schemas']['Location']
        continent?: components['schemas']['Location']
        subdivisions?: components['schemas']['Subdivision'][]
      }
      /**
       * Format: int64
       * @description Timestamp of the event with millisecond precision in Unix time.
       * @example 1654815516086
       */
      timestamp: number
      /**
       * Time
       * Format: date-time
       * @description Time expressed according to ISO 8601 in UTC format.
       * @example 2022-06-09T22:58:36Z
       */
      time: string
      /**
       * @description Page URL from which the identification request was sent.
       * @example https://some.website/path?query=params
       */
      url: string
      /** @description A customer-provided value or an object that was sent with identification request. */
      tag: {
        [key: string]: unknown
      }
      /**
       * @description A customer-provided id that was sent with identification request.
       * @example someID
       */
      linkedId?: string
      confidence?: components['schemas']['Confidence']
      /** @description Attribute represents if a visitor had been identified before. */
      visitorFound: boolean
      firstSeenAt: components['schemas']['SeenAt']
      lastSeenAt: components['schemas']['SeenAt']
    }
    /** BrowserDetails */
    BrowserDetails: {
      /** @example Chrome */
      browserName: string
      /** @example 101 */
      browserMajorVersion: string
      /** @example 101.0.4951 */
      browserFullVersion: string
      /** @example Windows */
      os: string
      /** @example 10 */
      osVersion: string
      /** @example Other */
      device: string
      /** @example Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 */
      userAgent: string
      botProbability?: number
    }
    /** Confidence */
    Confidence: {
      /**
       * Format: float
       * @description The confidence score is a floating-point number between 0 and 1 that represents the probability of accurate identification.
       */
      score: number
      /** @description The revision name of the method used to calculate the Confidence score. This field is only present for customers who opted in to an alternative calculation method. */
      revision?: string
    }
    /**
     * SeenAt
     * @example {
     *   "global": "2022-05-05T18:28:54.535Z",
     *   "subscription": null
     * }
     */
    SeenAt: {
      /**
       * Format: date-time
       * @example 2022-05-05T18:28:54.535Z
       */
      global: string | null
      /**
       * Format: date-time
       * @example 2022-06-09T22:58:05.576Z
       */
      subscription: string | null
    }
    /** ASN */
    ASN: {
      /** @example 7922 */
      asn: string
      /** @example 73.136.0.0/13 */
      network: string
      /** @example COMCAST-7922 */
      name?: string
    }
    /** DataCenter */
    DataCenter: {
      result: boolean
      /** @example DediPath */
      name?: string
    }
    /** IPLocation */
    IPLocation: {
      /**
       * @description The IP address is likely to be within this radius (in km) of the specified location.
       * @example 1000
       */
      accuracyRadius?: number
      /**
       * Format: double
       * @example 37.75
       */
      latitude?: number
      /**
       * Format: double
       * @example -97.82
       */
      longitude?: number
      /** @example 130 00 */
      postalCode?: string
      /**
       * Format: timezone
       * @example America/Chicago
       */
      timezone?: string
      /** IPLocationCity */
      city?: {
        /** @example Prague */
        name?: string
      }
      country?: components['schemas']['Location']
      continent?: components['schemas']['Location']
      subdivisions?: components['schemas']['Subdivision'][]
    }
    /** Location */
    Location: {
      /** @example US */
      code: string
      /** @example United States */
      name: string
    }
    Subdivision: {
      /** @example 10 */
      isoCode?: string
      /** @example Hlavni mesto Praha */
      name?: string
    }
    /** @description Contains all information about the request identified by `requestId`, depending on the pricing plan (Pro, Pro Plus, Enterprise) */
    ProductsResponse: {
      /** ProductsResponseIdentification */
      identification?: {
        /** ProductsResponseIdentificationData */
        data?: {
          /**
           * @description Unique identifier of the user's identification request.
           * @example 1654815516083.OX6kx8
           */
          requestId: string
          browserDetails: components['schemas']['BrowserDetails']
          /** @description Flag if user used incognito session. */
          incognito: boolean
          /**
           * Format: ipv4
           * @example 8.8.8.8
           */
          ip: string
          /**
           * DeprecatedIPLocation
           * @deprecated
           * @description This field is **deprecated** and will not return a result for **applications created after January 23rd, 2024**. Please use the [IP Geolocation Smart signal](https://dev.fingerprint.com/docs/smart-signals-overview#ip-geolocation) for geolocation information.
           */
          ipLocation?: {
            /** @description The IP address is likely to be within this radius (in km) of the specified location. */
            accuracyRadius?: number
            /** Format: double */
            latitude?: number
            /** Format: double */
            longitude?: number
            postalCode?: string
            /** Format: timezone */
            timezone?: string
            /** DeprecatedIPLocationCity */
            city?: {
              name?: string
            }
            country?: components['schemas']['Location']
            continent?: components['schemas']['Location']
            subdivisions?: components['schemas']['Subdivision'][]
          }
          /**
           * Format: int64
           * @description Timestamp of the event with millisecond precision in Unix time.
           * @example 1654815516086
           */
          timestamp: number
          /**
           * Time
           * Format: date-time
           * @description Time expressed according to ISO 8601 in UTC format.
           * @example 2022-06-09T22:58:36Z
           */
          time: string
          /**
           * @description Page URL from which the identification request was sent.
           * @example https://some.website/path?query=params
           */
          url: string
          /** @description A customer-provided value or an object that was sent with identification request. */
          tag: {
            [key: string]: unknown
          }
          /**
           * @description A customer-provided id that was sent with identification request.
           * @example someID
           */
          linkedId?: string
          confidence?: components['schemas']['Confidence']
          /** @description Attribute represents if a visitor had been identified before. */
          visitorFound: boolean
          firstSeenAt: components['schemas']['SeenAt']
          lastSeenAt: components['schemas']['SeenAt']
          /**
           * @description String of 20 characters that uniquely identifies the visitor's browser.
           *
           * @example [
           *   "Ibk1527CUFmcnjLwIs4A"
           * ]
           */
          visitorId: string
        }
        error?: components['schemas']['IdentificationError']
      }
      /** ProductsResponseBotd */
      botd?: {
        data?: components['schemas']['BotdResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseIpInfo */
      ipInfo?: {
        data?: components['schemas']['IpInfoResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseIncognito */
      incognito?: {
        data?: components['schemas']['IncognitoResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseRootApps */
      rootApps?: {
        data?: components['schemas']['RootAppsResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseEmulator */
      emulator?: {
        data?: components['schemas']['EmulatorResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseClonedApp */
      clonedApp?: {
        data?: components['schemas']['ClonedAppResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseFactoryReset */
      factoryReset?: {
        data?: components['schemas']['FactoryResetResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseJailbroken */
      jailbroken?: {
        data?: components['schemas']['JailbrokenResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseFrida */
      frida?: {
        data?: components['schemas']['FridaResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseIpBlocklist */
      ipBlocklist?: {
        data?: components['schemas']['IpBlockListResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseTor */
      tor?: {
        data?: components['schemas']['TorResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponsePrivacySettings */
      privacySettings?: {
        data?: components['schemas']['PrivacySettingsResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseVirtualMachine */
      virtualMachine?: {
        data?: components['schemas']['VirtualMachineResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseVpn */
      vpn?: {
        data?: components['schemas']['VpnResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseProxy */
      proxy?: {
        data?: components['schemas']['ProxyResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseTampering */
      tampering?: {
        data?: components['schemas']['TamperingResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseHighActivity */
      highActivity?: {
        data?: components['schemas']['HighActivityResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseLocationSpoofing */
      locationSpoofing?: {
        data?: components['schemas']['LocationSpoofingResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseSuspectScore */
      suspectScore?: {
        data?: components['schemas']['SuspectScoreResult']
        error?: components['schemas']['ProductError']
      }
      /** SignalResponseRawDeviceAttributes */
      rawDeviceAttributes?: {
        data?: components['schemas']['RawDeviceAttributesResult']
        error?: components['schemas']['ProductError']
      }
    }
    /** @description Contains results from all activated products - Fingerprint Pro, Bot Detection, and others. */
    EventResponse: {
      products: components['schemas']['ProductsResponse']
      error?: components['schemas']['ProductError']
    }
    IdentificationError: {
      /**
       * @description Error code:
       *  * `429 Too Many Requests` - the limit on secret API key requests per second has been exceeded
       *  * `Failed` - internal server error
       *
       * @example 429 Too Many Requests
       * @enum {string}
       */
      code: '429 Too Many Requests' | 'Failed'
      /** @example too many requests */
      message: string
    }
    /** @description Contains all the information from Bot Detection product */
    BotdResult: {
      /**
       * Format: ipv4
       * @description IP address of the requesting browser or bot.
       * @example 8.8.8.8
       */
      ip: string
      /**
       * Time
       * Format: date-time
       * @description Time in UTC when the request from the JS agent was made. We recommend to treat requests that are older than 2 minutes as malicious. Otherwise, request replay attacks are possible
       * @example 2022-06-09T22:58:36Z
       */
      time: string
      /**
       * @description Page URL from which identification request was sent.
       * @example https://example.com/login
       */
      url: string
      /** @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 */
      userAgent: string
      /** @example 1681392853693.lRiBBD */
      requestId: string
      /** @example Automatic tests bot */
      linkedId?: string
      bot: components['schemas']['BotdDetectionResult']
    }
    /** @description Stores bot detection result */
    BotdDetectionResult: {
      /**
       * @description Bot detection result:
       *  * `notDetected` - the visitor is not a bot
       *  * `good` - good bot detected, such as Google bot, Baidu Spider, AlexaBot and so on
       *  * `bad` - bad bot detected, such as Selenium, Puppeteer, Playwright, headless browsers, and so on
       *
       * @example bad
       * @enum {string}
       */
      result: 'notDetected' | 'good' | 'bad'
      /** @example selenium */
      type?: string
    }
    /** @description Details about the request IP address. Has separate fields for v4 and v6 IP address versions. */
    IpInfoResult: {
      v4?: {
        /**
         * Format: ipv4
         * @example 94.142.239.124
         */
        address: string
        geolocation: components['schemas']['IPLocation']
        asn?: components['schemas']['ASN']
        datacenter?: components['schemas']['DataCenter']
      }
      v6?: {
        /**
         * Format: ipv6
         * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
         */
        address: string
        geolocation: components['schemas']['IPLocation']
        asn?: components['schemas']['ASN']
        datacenter?: components['schemas']['DataCenter']
      }
    }
    IpBlockListResult: {
      /**
       * @description `true` if request IP address is part of any database that we use to search for known malicious actors, `false` otherwise.
       *
       * @example false
       */
      result: boolean
      details: {
        /**
         * @description IP address was part of a known email spam attack (SMTP).
         * @example false
         */
        emailSpam: boolean
        /**
         * @description IP address was part of a known network attack (SSH/HTTPS).
         * @example false
         */
        attackSource: boolean
      }
    }
    VpnResult: {
      /**
       * @description VPN or other anonymizing service has been used when sending the request.
       * @example false
       */
      result: boolean
      /**
       * @description Local timezone which is used in timezoneMismatch method.
       * @example Europe/Berlin
       */
      originTimezone: string
      /**
       * @description Country of the request (only for Android SDK version >= 2.4.0, ISO 3166 format or unknown).
       * @example unknown
       */
      originCountry?: string
      methods: {
        /**
         * @description User's browser timezone doesn't match the timezone from which the request was originally made.
         * @example false
         */
        timezoneMismatch: boolean
        /**
         * @description Request IP address is owned and used by a public VPN service provider.
         * @example false
         */
        publicVPN: boolean
        /**
         * @description This method applies to mobile devices only. Indicates the result of additional methods used to detect a VPN in mobile devices.
         * @example false
         */
        auxiliaryMobile: boolean
        /**
         * @description The browser runs on a different operating system than the operating system inferred from the  request network signature.
         * @example false
         */
        osMismatch: boolean
      }
    }
    TamperingResult: {
      /**
       * @description Flag indicating whether browser tampering was detected according to our internal thresholds.
       * @example false
       */
      result: boolean
      /**
       * @description Confidence score (`0.0 - 1.0`) for the tampering detection. Values above `0.5` suggest that we're reasonably sure there was a tampering attempt. Values below `0.5` are genuine browsers.
       * @example 0
       */
      anomalyScore: number
    }
    HighActivityResult: {
      /**
       * @description Flag indicating whether the request came from a high activity visitor.
       * @example false
       */
      result: boolean
      /**
       * @description Number of requests from the same visitor in the previous day.
       * @example 10
       */
      dailyRequests?: number
    }
    LocationSpoofingResult: {
      /**
       * @description Flag indicating whether the request came from a mobile device with location spoofing enabled.
       * @example false
       */
      result: boolean
    }
    SuspectScoreResult: {
      /**
       * @description Suspect Score is an easy way to integrate Smart Signals into your fraud protection work flow.  It is a weighted representation of all Smart Signals present in the payload that helps identify suspicious activity. The value range is [0; S] where S is sum of all Smart Signals weights.  See more details here: https://dev.fingerprint.com/docs/suspect-score
       *
       * @example 0
       */
      result: number
    }
    /**
     * @description It includes 35+ raw browser identification attributes to provide Fingerprint users with even more information than our standard visitor ID provides. This enables Fingerprint users to not have to run our open-source product in conjunction with Fingerprint Pro Plus and Enterprise to get those additional attributes.
     * Warning: The raw signals data can change at any moment as we improve the product. We cannot guarantee the internal shape of raw device attributes to be stable, so typical semantic versioning rules do not apply here. Use this data with caution without assuming a specific structure beyond the generic type provided here.
     */
    RawDeviceAttributesResult: {
      [key: string]: {
        /** error */
        error?: {
          /** error.name */
          name: string
          /** error.message */
          message: string
        }
        /** value */
        value?: unknown
      }
    }
    FactoryResetResult: {
      /**
       * Time
       * Format: date-time
       * @description Time in UTC when the most recent factory reset of the Android or iOS device was done.  If there is no sign of factory reset or the client is not a mobile device, the field will contain the epoch time (1 January 1970) in UTC.
       *
       * @example 2022-06-09T22:58:36Z
       */
      time: string
      /**
       * Format: int64
       * @description Same value as it's in the `time` field but represented in timestamp format.
       * @example 1654815517198
       */
      timestamp: number
    }
    ClonedAppResult: {
      /**
       * @description Android specific cloned application detection. There are 2 values: • `true` - Presence of app cloners work detected (e.g. fully cloned application found or launch of it inside of a not main working profile detected). • `false` - No signs of cloned application detected or the client is not Android.
       *
       * @example false
       */
      result: boolean
    }
    EmulatorResult: {
      /**
       * @description Android specific emulator detection. There are 2 values: • `true` - Emulated environment detected (e.g. launch inside of AVD) • `false` - No signs of emulated environment detected or the client is not Android.
       *
       * @example false
       */
      result: boolean
    }
    RootAppsResult: {
      /**
       * @description Android specific root management apps detection. There are 2 values: • `true` - Root Management Apps detected (e.g. Magisk) • `false` - No Root Management Apps detected or the client isn't Android.
       *
       * @example false
       */
      result: boolean
    }
    IncognitoResult: {
      /**
       * @description `true` if we detected incognito mode used in the browser, `false` otherwise.
       *
       * @example false
       */
      result: boolean
    }
    JailbrokenResult: {
      /**
       * @description iOS specific jailbreak detection. There are 2 values: • `true` - Jailbreak detected • `false` - No signs of jailbreak or the client is not iOS.
       *
       * @example false
       */
      result: boolean
    }
    FridaResult: {
      /**
       * @description [Frida](https://frida.re/docs/) detection for Android and iOS devices. There are 2 values: • `true` - Frida detected • `false` - No signs of Frida or the client is not a mobile device.
       *
       * @example false
       */
      result: boolean
    }
    TorResult: {
      /**
       * @description `true` if the request IP address is a known tor exit node, `false` otherwise.
       *
       * @example false
       */
      result: boolean
    }
    PrivacySettingsResult: {
      /**
       * @description `true` if the request is from a privacy aware browser (e.g. Tor) or from a browser in which fingerprinting is blocked. Otherwise `false`.
       *
       * @example false
       */
      result: boolean
    }
    VirtualMachineResult: {
      /**
       * @description `true` if the request came from a browser running inside a virtual machine (e.g. VMWare), `false` otherwise.
       *
       * @example false
       */
      result: boolean
    }
    ProxyResult: {
      /**
       * @description `true` if the request IP address is used by a public proxy provider, `false` otherwise.
       *
       * @example false
       */
      result: boolean
    }
    ProductError: {
      /**
       * @description Error code:
       *  * `TooManyRequests` - the limit on secret API key requests per second has been exceeded
       *  * `Failed` - internal server error
       *
       * @example TooManyRequests
       * @enum {string}
       */
      code: 'TooManyRequests' | 'Failed'
      /** @example too many requests */
      message: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /**
   * Get event by requestId
   * @description This endpoint allows you to get a detailed analysis of an individual request.
   * **Only for Enterprise customers:** Please note that the response includes mobile signals (e.g. `rootApps`) even if the request originated from a non-mobile platform.
   * It is highly recommended that you **ignore** the mobile signals for such requests.
   *
   * Use `requestId` as the URL path parameter. This API method is scoped to a request, i.e. all returned information is by `requestId`.
   */
  getEvent: {
    parameters: {
      path: {
        /** @description The unique [identifier](https://dev.fingerprint.com/docs/js-agent#requestid) of each analysis request. */
        request_id: string
      }
    }
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['EventResponse']
        }
      }
      /** @description Forbidden */
      403: {
        content: {
          'application/json': components['schemas']['ErrorEvent403Response']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorEvent404Response']
        }
      }
    }
  }
  /**
   * Get visits by visitorId
   * @description This endpoint allows you to get a history of visits for a specific `visitorId`. Use the `visitorId` as a URL path parameter.
   * Only information from the _Identification_ product is returned.
   *
   * #### Headers
   *
   * * `Retry-After` — Present in case of `429 Too many requests`. Indicates how long you should wait before making a follow-up request. The value is non-negative decimal integer indicating the seconds to delay after the response is received.
   */
  getVisits: {
    parameters: {
      query?: {
        /**
         * @description Filter visits by `requestId`.
         *
         * Every identification request has a unique identifier associated with it called `requestId`. This identifier is returned to the client in the identification [result](https://dev.fingerprint.com/docs/js-agent#requestid). When you filter visits by `requestId`, only one visit will be returned.
         */
        request_id?: string
        /**
         * @description Filter visits by your custom identifier.
         *
         * You can use [`linkedId`](https://dev.fingerprint.com/docs/js-agent#linkedid) to associate identification requests with your own identifier, for example: session ID, purchase ID, or transaction ID. You can then use this `linked_id` parameter to retrieve all events associated with your custom identifier.
         */
        linked_id?: string
        /**
         * @description Limit scanned results.
         *
         * For performance reasons, the API first scans some number of events before filtering them. Use `limit` to specify how many events are scanned before they are filtered by `requestId` or `linkedId`. Results are always returned sorted by the timestamp (most recent first).
         * By default, the most recent 100 visits are scanned, the maximum is 500.
         */
        limit?: number
        /**
         * @description Use `paginationKey` to get the next page of results.
         *
         * When more results are available (e.g., you requested 200 results using `limit` parameter, but a total of 600 results are available), the `paginationKey` top-level attribute is added to the response. The key corresponds to the `requestId` of the last returned event. In the following request, use that value in the `paginationKey` parameter to get the next page of results:
         *
         * 1. First request, returning most recent 200 events: `GET api-base-url/visitors/:visitorId?limit=200`
         * 2. Use `response.paginationKey` to get the next page of results: `GET api-base-url/visitors/:visitorId?limit=200&paginationKey=1683900801733.Ogvu1j`
         *
         * Pagination happens during scanning and before filtering, so you can get less visits than the `limit` you specified with more available on the next page. When there are no more results available for scanning, the `paginationKey` attribute is not returned.
         */
        paginationKey?: string
        /** @description ⚠️ Deprecated pagination method, please use `paginationKey` instead. Timestamp (in milliseconds since epoch) used to paginate results. */
        before?: number
      }
      path: {
        /**
         * @description Unique identifier of the visitor issued by Fingerprint Pro.
         * @example uYIm7Ksp5rf00SllPhFp
         */
        visitor_id: string
      }
    }
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['Response']
        }
      }
      /** @description Forbidden. The API Key is probably missing or incorrect. */
      403: {
        content: {
          'application/json': components['schemas']['ErrorVisits403']
        }
      }
      /** @description Too Many Requests */
      429: {
        headers: {
          /** @description Indicates how long you should wait before attempting the next request. */
          'Retry-After'?: number
        }
        content: {
          'application/json': components['schemas']['ManyRequestsResponse']
        }
      }
    }
  }
}

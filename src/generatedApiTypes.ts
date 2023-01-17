/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/events/{request_id}': {
    /** This endpoint allows you to get events with all the information from each activated product (Fingerprint Pro or Bot Detection). Use the requestId as a URL path :request_id parameter. This API method is scoped to a request, i.e. all returned information is by requestId. */
    get: operations['getEvent'];
  };
  '/visitors/{visitor_id}': {
    /** This endpoint allows you to get a history of visits with all available information. Use the visitorId as a URL path parameter. This API method is scoped to a visitor, i.e. all returned information is by visitorId. */
    get: operations['getVisits'];
  };
  '/webhook': {
    /** Fake path to describe webhook format. More information about webhooks can be found in the [documentation](https://dev.fingerprint.com/docs/webhooks) */
    trace: {};
  };
}

export interface components {
  schemas: {
    /**
     * PaginatedResponse
     * @description Fields `lastTimestamp` and `paginationKey` added when `limit` or `before` parameter provided and there is more data to show
     */
    Response: {
      visitorId: string;
      visits: {
        /**
         * @description Unique identifier of the user's identification request.
         * @example 1654815516083.OX6kx8
         */
        requestId: string;
        browserDetails: components['schemas']['BrowserDetails'];
        /** @description Flag if user used incognito session. */
        incognito: boolean;
        /**
         * Format: ipv4
         * @example 8.8.8.8
         */
        ip: string;
        ipLocation: components['schemas']['IPLocation'];
        /**
         * Format: int64
         * @description Timestamp of the event with millisecond precision in Unix time.
         * @example 1654815516086
         */
        timestamp: number;
        /**
         * Time
         * Format: date-time
         * @description Time expressed according to ISO 8601 in UTC format.
         * @example 2022-06-09T22:58:36Z
         */
        time: string;
        /**
         * Format: uri
         * @description Page URL from which identification request was sent.
         * @example https://some.website/path?query=params
         */
        url: string;
        /** @description A customer-provided value or an object that was sent with identification request. */
        tag: { [key: string]: unknown };
        /**
         * @description A customer-provided id that was sent with identification request.
         * @example someID
         */
        linkedId?: string;
        confidence: components['schemas']['Confidence'];
        /** @description Attribute represents if a visitor had been identified before. */
        visitorFound: boolean;
        /**
         * @example {
         *   "global": "2022-05-05T18:28:54.535Z",
         *   "subscription": "2022-06-09T22:58:05.576Z"
         * }
         */
        firstSeenAt: components['schemas']['SeenAt'];
        /**
         * @example {
         *   "global": "2022-06-09T22:58:35.795Z",
         *   "subscription": null
         * }
         */
        lastSeenAt: components['schemas']['SeenAt'];
      }[];
      /**
       * Format: int64
       * @description When more results are available (e.g., you scanned 200 results using `limit` parameter, but a total of 600 results are available), a special `lastTimestamp` top-level attribute is added to the response. If you want to paginate the results further in the past, you should use the value of this attribute.
       * @example 1654815517198
       */
      lastTimestamp?: number;
      /**
       * @description Visit's `requestId` of the last visit in the current page.
       * @example 1654815517198.azN4IZ
       */
      paginationKey?: string;
    };
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
        code: 'TokenRequired' | 'TokenNotFound' | 'SubscriptionNotActive' | 'WrongRegion';
        /** @example secret key is required */
        message: string;
      };
    };
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
        code: 'RequestNotFound';
        /** @example request id is not found */
        message: string;
      };
    };
    ManyRequestsResponse: {
      /**
       * @description Error text.
       * @example request throttled
       */
      error: string;
    };
    WebhookVisit: {
      visitorId: string;
      clientReferrer?: string;
      /**
       * @description Unique identifier of the user's identification request.
       * @example 1654815516083.OX6kx8
       */
      requestId: string;
      browserDetails: components['schemas']['BrowserDetails'];
      /** @description Flag if user used incognito session. */
      incognito: boolean;
      /**
       * Format: ipv4
       * @example 8.8.8.8
       */
      ip: string;
      ipLocation: components['schemas']['IPLocation'];
      /**
       * Format: int64
       * @description Timestamp of the event with millisecond precision in Unix time.
       * @example 1654815516086
       */
      timestamp: number;
      /**
       * Time
       * Format: date-time
       * @description Time expressed according to ISO 8601 in UTC format.
       * @example 2022-06-09T22:58:36Z
       */
      time: string;
      /**
       * Format: uri
       * @description Page URL from which identification request was sent.
       * @example https://some.website/path?query=params
       */
      url: string;
      /** @description A customer-provided value or an object that was sent with identification request. */
      tag?: { [key: string]: unknown };
      /**
       * @description A customer-provided id that was sent with identification request.
       * @example someID
       */
      linkedId?: string;
      confidence: components['schemas']['Confidence'];
      /** @description Attribute represents if a visitor had been identified before. */
      visitorFound: boolean;
      /**
       * @example {
       *   "global": "2022-05-05T18:28:54.535Z",
       *   "subscription": "2022-06-09T22:58:05.576Z"
       * }
       */
      firstSeenAt: components['schemas']['SeenAt'];
      /**
       * @example {
       *   "global": "2022-06-09T22:58:35.795Z",
       *   "subscription": null
       * }
       */
      lastSeenAt: components['schemas']['SeenAt'];
    };
    /** Visit */
    Visit: {
      /**
       * @description Unique identifier of the user's identification request.
       * @example 1654815516083.OX6kx8
       */
      requestId: string;
      browserDetails: components['schemas']['BrowserDetails'];
      /** @description Flag if user used incognito session. */
      incognito: boolean;
      /**
       * Format: ipv4
       * @example 8.8.8.8
       */
      ip: string;
      ipLocation: components['schemas']['IPLocation'];
      /**
       * Format: int64
       * @description Timestamp of the event with millisecond precision in Unix time.
       * @example 1654815516086
       */
      timestamp: number;
      /**
       * Time
       * Format: date-time
       * @description Time expressed according to ISO 8601 in UTC format.
       * @example 2022-06-09T22:58:36Z
       */
      time: string;
      /**
       * Format: uri
       * @description Page URL from which identification request was sent.
       * @example https://some.website/path?query=params
       */
      url: string;
      /** @description A customer-provided value or an object that was sent with identification request. */
      tag?: { [key: string]: unknown };
      /**
       * @description A customer-provided id that was sent with identification request.
       * @example someID
       */
      linkedId?: string;
      confidence: components['schemas']['Confidence'];
      /** @description Attribute represents if a visitor had been identified before. */
      visitorFound: boolean;
      /**
       * @example {
       *   "global": "2022-05-05T18:28:54.535Z",
       *   "subscription": "2022-06-09T22:58:05.576Z"
       * }
       */
      firstSeenAt: components['schemas']['SeenAt'];
      /**
       * @example {
       *   "global": "2022-06-09T22:58:35.795Z",
       *   "subscription": null
       * }
       */
      lastSeenAt: components['schemas']['SeenAt'];
    };
    /** BrowserDetails */
    BrowserDetails: {
      /** @example Chrome */
      browserName: string;
      /** @example 101 */
      browserMajorVersion: string;
      /** @example 101.0.4951 */
      browserFullVersion: string;
      /** @example Windows */
      os: string;
      /** @example 10 */
      osVersion: string;
      /** @example Other */
      device: string;
      /** @example Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 */
      userAgent: string;
      botProbability?: number;
    };
    /** Confidence */
    Confidence: {
      /**
       * Format: float
       * @description The confidence score is a floating-point number between 0 and 1 that represents the probability of accurate identification.
       */
      score: number;
    };
    /** SeenAt */
    SeenAt: {
      /** Format: date-time */
      global: string | null;
      /** Format: date-time */
      subscription: string | null;
    };
    /** IPLocation */
    IPLocation: {
      /** @example 1000 */
      accuracyRadius: number;
      /**
       * Format: double
       * @example 37.75
       */
      latitude: number;
      /**
       * Format: double
       * @example -97.82
       */
      longitude: number;
      /** @example 130 00 */
      postalCode?: string;
      /**
       * Format: timezone
       * @example America/Chicago
       */
      timezone: string;
      /** IPLocationCity */
      city?: {
        /** @example Prague */
        name?: string;
      };
      /**
       * @example {
       *   "code": "US",
       *   "name": "United States"
       * }
       */
      country: components['schemas']['Location'];
      /**
       * @example {
       *   "code": "NA",
       *   "name": "North America"
       * }
       */
      continent: components['schemas']['Location'];
      subdivisions?: components['schemas']['Subdivision'][];
    };
    /** Location */
    Location: {
      /** @example US */
      code: string;
      /** @example United States */
      name: string;
    };
    Subdivision: {
      /** @example 10 */
      isoCode?: string;
      /** @example Hlavni mesto Praha */
      name?: string;
    };
    /** @description Contains all the information from each activated product - Fingerprint Pro or Bot Detection */
    ProductsResponse: {
      /** ProductsResponseIdentification */
      identification?: {
        /** ProductsResponseIdentificationData */
        data?: {
          /**
           * @description Unique identifier of the user's identification request.
           * @example 1654815516083.OX6kx8
           */
          requestId: string;
          browserDetails: components['schemas']['BrowserDetails'];
          /** @description Flag if user used incognito session. */
          incognito: boolean;
          /**
           * Format: ipv4
           * @example 8.8.8.8
           */
          ip: string;
          ipLocation: components['schemas']['IPLocation'];
          /**
           * Format: int64
           * @description Timestamp of the event with millisecond precision in Unix time.
           * @example 1654815516086
           */
          timestamp: number;
          /**
           * Time
           * Format: date-time
           * @description Time expressed according to ISO 8601 in UTC format.
           * @example 2022-06-09T22:58:36Z
           */
          time: string;
          /**
           * Format: uri
           * @description Page URL from which identification request was sent.
           * @example https://some.website/path?query=params
           */
          url: string;
          /** @description A customer-provided value or an object that was sent with identification request. */
          tag?: { [key: string]: unknown };
          /**
           * @description A customer-provided id that was sent with identification request.
           * @example someID
           */
          linkedId?: string;
          confidence: components['schemas']['Confidence'];
          /** @description Attribute represents if a visitor had been identified before. */
          visitorFound: boolean;
          /**
           * @example {
           *   "global": "2022-05-05T18:28:54.535Z",
           *   "subscription": "2022-06-09T22:58:05.576Z"
           * }
           */
          firstSeenAt: components['schemas']['SeenAt'];
          /**
           * @example {
           *   "global": "2022-06-09T22:58:35.795Z",
           *   "subscription": null
           * }
           */
          lastSeenAt: components['schemas']['SeenAt'];
          visitorId: string;
        };
      };
      /** ProductsResponseBotd */
      botd?: {
        data?: components['schemas']['BotdResult'];
        error?: components['schemas']['BotdError'];
      };
    };
    /** @description Contains event from activated products - Fingerprint Pro or Bot Detection */
    EventResponse: {
      products?: components['schemas']['ProductsResponse'];
    };
    /** @description Contains all the information from Bot Detection product */
    BotdResult: {
      /**
       * Format: ipv4
       * @description IP address of the requesting browser or bot.
       * @example 8.8.8.8
       */
      ip: string;
      /**
       * Time
       * Format: date-time
       * @description Time in UTC when the request from the JS agent was made. We recommend to treat requests that are older than 2 minutes as malicious. Otherwise, request replay attacks are possible
       * @example 2022-06-09T22:58:36Z
       */
      time: string;
      /**
       * Format: uri-reference
       * @description Page URL from which identification request was sent.
       * @example https://example.com/login
       */
      url: string;
      /**
       * @example {
       *   "result": "notDetected"
       * }
       */
      bot: components['schemas']['BotdDetectionResult'];
    };
    /** @description Stores bot detection result */
    BotdDetectionResult: {
      /**
       * @description Bot detection result:
       *  * `notDetected` - the visitor is not a bot
       *  * `good` - good bot detected, such as Google bot, Baidu Spider, AlexaBot and so on
       *  * `bad` - bad bot detected, such as Selenium, Puppeteer, Playwright, headless browsers, and so on
       *
       * @enum {string}
       */
      result: 'notDetected' | 'good' | 'bad';
    };
    BotdError: {
      /**
       * @description Error code:
       *  * `TooManyRequests` - the limit on secret API key requests per second has been exceeded
       *  * `Failed` - internal server error
       *
       * @example TooManyRequests
       * @enum {string}
       */
      code: 'TooManyRequests' | 'Failed';
      /** @example too many requests */
      message: string;
    };
  };
}

export interface operations {
  /** This endpoint allows you to get events with all the information from each activated product (Fingerprint Pro or Bot Detection). Use the requestId as a URL path :request_id parameter. This API method is scoped to a request, i.e. all returned information is by requestId. */
  getEvent: {
    parameters: {
      path: {
        /** requestId is the unique identifier of each request */
        request_id: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': components['schemas']['EventResponse'];
        };
      };
      /** Forbidden */
      403: {
        content: {
          'application/json': components['schemas']['ErrorEvent403Response'];
        };
      };
      /** Bad Request */
      404: {
        content: {
          'application/json': components['schemas']['ErrorEvent404Response'];
        };
      };
      /** Too Many Requests */
      429: {
        headers: {
          /** Indicates how long the user should wait in seconds before attempting the next request. */
          'Retry-After'?: number;
        };
        content: {
          'application/json': components['schemas']['ManyRequestsResponse'];
        };
      };
    };
  };
  /** This endpoint allows you to get a history of visits with all available information. Use the visitorId as a URL path parameter. This API method is scoped to a visitor, i.e. all returned information is by visitorId. */
  getVisits: {
    parameters: {
      path: {
        visitor_id: string;
      };
      query: {
        /** Filter visits by requestId */
        request_id?: string;
        /** Filter visits by custom identifier */
        linked_id?: string;
        /** Limit scanned results */
        limit?: number;
        /** Used to paginate results */
        before?: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': components['schemas']['Response'];
        };
      };
      /** Forbidden. Probably ApiKey is missed or provided the wrong one. */
      403: {
        content: {
          'text/html': string;
        };
      };
      /** Too Many Requests */
      429: {
        headers: {
          /** Indicates how long the user should wait before attempting the next request. */
          'Retry-After'?: number;
        };
        content: {
          'application/json': components['schemas']['ManyRequestsResponse'];
        };
      };
    };
  };
}

export interface external {}

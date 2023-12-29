import {
  GetConferenceInfoResponse,
  ManageConferenceParticipantRequest,
} from '../../../models/';
import {
  RequestBody,
  SinchClientParameters,
} from '@sinch/sdk-client';
import { VoiceApi } from '../voice-api';

export interface GetConferenceInfoRequestData {
  /** The unique identifier of the conference. The user sets this value. */
  'conferenceId': string;
}
export interface KickAllRequestData {
  /** The unique identifier of the conference. The user sets this value. */
  'conferenceId': string;
}
export interface KickParticipantRequestData {
  /** The unique identifier of the call. This value is generated by the system. */
  'callId': string;
  /** The unique identifier of the conference. The user sets this value. */
  'conferenceId': string;
}
export interface ManageParticipantRequestData {
  /** The unique identifier of the call. This value is generated by the system. */
  'callId': string;
  /** The unique identifier of the conference. The user sets this value. */
  'conferenceId': string;
  /**  */
  'manageParticipantRequestBody'?: ManageConferenceParticipantRequest;
}

export class ConferencesApi extends VoiceApi {

  /**
   * Initialize your interface
   *
   * @param {SinchClientParameters} sinchClientParameters - The parameters used to initialize the API Client.
   */
  constructor(sinchClientParameters: SinchClientParameters) {
    super(sinchClientParameters, 'ConferencesApi');
  }

  /**
   * Get Conference Info
   * Returns information about a conference that matches the provided conference ID.
   * @param { GetConferenceInfoRequestData } data - The data to provide to the API call.
   */
  public async get(data: GetConferenceInfoRequestData): Promise<GetConferenceInfoResponse> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<GetConferenceInfoRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const path = `/calling/v1/conferences/id/${data['conferenceId']}`;
    const basePathUrl = this.client.apiClientOptions.basePath + path;

    const requestOptions
        = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, path);
    const url = this.client.prepareUrl(requestOptions.basePath, requestOptions.queryParams);

    return this.client.processCall<GetConferenceInfoResponse>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'GetConferenceInfo',
    });
  }

  /**
   * Kick Conference All
   * Removes all participants from a conference.
   * @param { KickAllRequestData } data - The data to provide to the API call.
   */
  public async kickAll(data: KickAllRequestData): Promise<void> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<KickAllRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const path = `/calling/v1/conferences/id/${data['conferenceId']}`;
    const basePathUrl = this.client.apiClientOptions.basePath + path;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body, path);
    const url = this.client.prepareUrl(requestOptions.basePath, requestOptions.queryParams);

    return this.client.processCall<void>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'KickConferenceAll',
    });
  }

  /**
   * Kick Conference Participant
   * Remove a specified conference participant from a specified conference.
   * @param { KickParticipantRequestData } data - The data to provide to the API call.
   */
  public async kickParticipant(data: KickParticipantRequestData): Promise<void> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<KickParticipantRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = '';
    const path = `/calling/v1/conferences/id/${data['conferenceId']}/${data['callId']}`;
    const basePathUrl = this.client.apiClientOptions.basePath + path;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body, path);
    const url = this.client.prepareUrl(requestOptions.basePath, requestOptions.queryParams);

    return this.client.processCall<void>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'KickConferenceParticipant',
    });
  }

  /**
   * Manage Conference Participant
   * Manages conference participant in a specified conference: * mute / unmute * put on hold / resume.
   * @param { ManageParticipantRequestData } data - The data to provide to the API call.
   */
  public async manageParticipant(data: ManageParticipantRequestData): Promise<void> {
    this.client = this.getSinchClient();
    const getParams = this.client.extractQueryParams<ManageParticipantRequestData>(data, [] as never[]);
    const headers: { [key: string]: string | undefined } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const body: RequestBody = data['manageParticipantRequestBody']
      ? JSON.stringify(data['manageParticipantRequestBody']) : '{}';
    const path = `/calling/v1/conferences/id/${data['conferenceId']}/${data['callId']}`;
    const basePathUrl = this.client.apiClientOptions.basePath + path;

    const requestOptions = await this.client.prepareOptions(basePathUrl, 'PATCH', getParams, headers, body, path);
    const url = this.client.prepareUrl(requestOptions.basePath, requestOptions.queryParams);

    return this.client.processCall<void>({
      url,
      requestOptions,
      apiName: this.apiName,
      operationId: 'ManageConferenceParticipant',
    });
  }

}
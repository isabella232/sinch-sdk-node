import { VerificationStatusApi, VerificationStatusByIdRequestData, VerificationStatusByIdentityRequestData, VerificationStatusByReferenceRequestData } from './verification-status-api';
import { VerificationReportResponse } from '../../../models';

export class VerificationStatusApiFixture implements Partial<Readonly<VerificationStatusApi>> {

  /**
   * Fixture associated to function verificationStatusById
   */
  public getById:
    jest.Mock<Promise<VerificationReportResponse>, [VerificationStatusByIdRequestData]> = jest.fn();
  /**
   * Fixture associated to function verificationStatusByIdentity
   */
  public getByIdentity:
    jest.Mock<Promise<VerificationReportResponse>, [VerificationStatusByIdentityRequestData]> = jest.fn();
  /**
   * Fixture associated to function verificationStatusByReference
   */
  public getByReference:
    jest.Mock<Promise<VerificationReportResponse>, [VerificationStatusByReferenceRequestData]> = jest.fn();
}


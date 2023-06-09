/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllAdmins
   */
  static readonly GetAllAdminsPath = '/admins';

  /**
   * Get All Admins
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAdmins()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdmins$Response(params?: {
    skip?: number;
    limit?: number;
    name?: string;
    email?: string;
    role?: 'super admin' | 'editor' | 'mentor' | 'instructor';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetAllAdminsPath, 'get');
    if (params) {
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('email', params.email, {});
      rb.query('role', params.role, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<Admin>;
        }>;
      })
    );
  }

  /**
   * Get All Admins
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAdmins$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdmins(params?: {
    skip?: number;
    limit?: number;
    name?: string;
    email?: string;
    role?: 'super admin' | 'editor' | 'mentor' | 'instructor';
  },
  context?: HttpContext

): Observable<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}> {

    return this.getAllAdmins$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<Admin>;
})
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Apis for assessing Forums
 */
@Injectable({
  providedIn: 'root',
})
export class ForumService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createForum
   */
  static readonly CreateForumPath = '/forum/{forumId}';

  /**
   * Create Forum.
   *
   * Create Forum
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForum$Response(params: {
    forumId: string;
    body?: {
'forumName'?: string;
'description'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.CreateForumPath, 'post');
    if (params) {
      rb.path('forumId', params.forumId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Forum.
   *
   * Create Forum
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForum(params: {
    forumId: string;
    body?: {
'forumName'?: string;
'description'?: string;
}
  }): Observable<void> {

    return this.createForum$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteForum
   */
  static readonly DeleteForumPath = '/forum/{forumId}';

  /**
   * Delete Forum.
   *
   * Delete Forum
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteForum()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum$Response(params: {
    forumId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.DeleteForumPath, 'delete');
    if (params) {
      rb.path('forumId', params.forumId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete Forum.
   *
   * Delete Forum
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteForum$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum(params: {
    forumId: string;
  }): Observable<void> {

    return this.deleteForum$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation renameForum
   */
  static readonly RenameForumPath = '/forum/{forumId}';

  /**
   * Rename Forum.
   *
   * Rename Forum
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `renameForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  renameForum$Response(params: {
    forumId: string;
    body?: {
'forumName'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.RenameForumPath, 'patch');
    if (params) {
      rb.path('forumId', params.forumId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Rename Forum.
   *
   * Rename Forum
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `renameForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  renameForum(params: {
    forumId: string;
    body?: {
'forumName'?: string;
}
  }): Observable<void> {

    return this.renameForum$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getForumsByUserId
   */
  static readonly GetForumsByUserIdPath = '/forum/user/{userId}';

  /**
   * Get Forums.
   *
   * Get Forums By User ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getForumsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getForumsByUserId$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<{
'forumName'?: string;
'description'?: string;
'forumId'?: string;
'creatorId'?: string;
'date'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.GetForumsByUserIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'forumName'?: string;
        'description'?: string;
        'forumId'?: string;
        'creatorId'?: string;
        'date'?: string;
        }>;
      })
    );
  }

  /**
   * Get Forums.
   *
   * Get Forums By User ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getForumsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getForumsByUserId(params: {
    userId: string;
  }): Observable<{
'forumName'?: string;
'description'?: string;
'forumId'?: string;
'creatorId'?: string;
'date'?: string;
}> {

    return this.getForumsByUserId$Response(params).pipe(
      map((r: StrictHttpResponse<{
'forumName'?: string;
'description'?: string;
'forumId'?: string;
'creatorId'?: string;
'date'?: string;
}>) => r.body as {
'forumName'?: string;
'description'?: string;
'forumId'?: string;
'creatorId'?: string;
'date'?: string;
})
    );
  }

  /**
   * Path part for operation getAllPostsByForumId
   */
  static readonly GetAllPostsByForumIdPath = '/posts/{forumId}';

  /**
   * Get Posts By Forum ID.
   *
   * Get All Posts By Forum ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPostsByForumId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByForumId$Response(params: {
    forumId: string;
  }): Observable<StrictHttpResponse<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.GetAllPostsByForumIdPath, 'get');
    if (params) {
      rb.path('forumId', params.forumId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'postId'?: string;
        'forumId'?: string;
        'senderId'?: string;
        'name'?: string;
        'date'?: string;
        'thread'?: Array<{
        'participantId'?: string;
        'participantName'?: string;
        'participantRole'?: 'admin' | 'learner';
        'date'?: string;
        }>;
        }>;
      })
    );
  }

  /**
   * Get Posts By Forum ID.
   *
   * Get All Posts By Forum ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllPostsByForumId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByForumId(params: {
    forumId: string;
  }): Observable<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}> {

    return this.getAllPostsByForumId$Response(params).pipe(
      map((r: StrictHttpResponse<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>) => r.body as {
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
})
    );
  }

  /**
   * Path part for operation createCourseForum
   */
  static readonly CreateCourseForumPath = '/course/{courseId}/create-forum';

  /**
   * Create Course Forum.
   *
   * Create Course Forum
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCourseForum()` instead.
   *
   * This method doesn't expect any request body.
   */
  createCourseForum$Response(params: {
    courseId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.CreateCourseForumPath, 'post');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Course Forum.
   *
   * Create Course Forum
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCourseForum$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createCourseForum(params: {
    courseId: string;
  }): Observable<void> {

    return this.createCourseForum$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllForums
   */
  static readonly GetAllForumsPath = '/forums';

  /**
   * Get All Forums.
   *
   * Get All Forums
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllForums()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForums$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.GetAllForumsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'postId'?: string;
        'forumId'?: string;
        'senderId'?: string;
        'name'?: string;
        'date'?: string;
        'thread'?: Array<{
        'participantId'?: string;
        'participantName'?: string;
        'participantRole'?: 'admin' | 'learner';
        'date'?: string;
        }>;
        }>>;
      })
    );
  }

  /**
   * Get All Forums.
   *
   * Get All Forums
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllForums$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForums(params?: {
  }): Observable<Array<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>> {

    return this.getAllForums$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>>) => r.body as Array<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<{
'participantId'?: string;
'participantName'?: string;
'participantRole'?: 'admin' | 'learner';
'date'?: string;
}>;
}>)
    );
  }

  /**
   * Path part for operation createPost
   */
  static readonly CreatePostPath = '/post/{postId}';

  /**
   * Create Post.
   *
   * Create Post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost$Response(params: {
    postId: string;
    body?: {
'forumId'?: string;
'postMessage'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.CreatePostPath, 'post');
    if (params) {
      rb.path('postId', params.postId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Post.
   *
   * Create Post
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost(params: {
    postId: string;
    body?: {
'forumId'?: string;
'postMessage'?: string;
}
  }): Observable<void> {

    return this.createPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation respondToPost
   */
  static readonly RespondToPostPath = '/post/{postId}';

  /**
   * Respond to Post.
   *
   * Respond To Post
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `respondToPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  respondToPost$Response(params: {
    postId: string;
    body?: {
'response'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.RespondToPostPath, 'patch');
    if (params) {
      rb.path('postId', params.postId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Respond to Post.
   *
   * Respond To Post
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `respondToPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  respondToPost(params: {
    postId: string;
    body?: {
'response'?: string;
}
  }): Observable<void> {

    return this.respondToPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addAdminToForum
   */
  static readonly AddAdminToForumPath = '/forum/{forumId}/add-admin';

  /**
   * Add Admin To Forum.
   *
   * Add Admin To Forum
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAdminToForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAdminToForum$Response(params?: {
    body?: {
'adminId'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ForumService.AddAdminToForumPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add Admin To Forum.
   *
   * Add Admin To Forum
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addAdminToForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAdminToForum(params?: {
    body?: {
'adminId'?: string;
}
  }): Observable<void> {

    return this.addAdminToForum$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

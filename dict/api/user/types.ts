/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface UserApi {
	answerCreated: (request: Api.BODYDATA | undefined) => Promise<AnswerCreatedResponse>
	questionCreated: (request: Api.BODYDATA | undefined) => Promise<QuestionCreatedResponse>
	userCreate: (request: Api.BODYDATA | undefined) => Promise<UserCreateResponse>
	getAnswer: (qid: string) => Promise<GetAnswerResponse>
	getQuestion: (topicId: string) => Promise<GetQuestionResponse>
	getUser: () => Promise<GetUserResponse>
}

export type AnswerCreatedResponse = AnswerCreated201Response | AnswerCreated400Response

export interface AnswerCreated201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface AnswerCreated400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type QuestionCreatedResponse = QuestionCreated201Response | QuestionCreated400Response

export interface QuestionCreated201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface QuestionCreated400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type UserCreateResponse = UserCreate201Response | UserCreate400Response

export interface UserCreate201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface UserCreate400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetAnswerResponse = GetAnswer201Response | GetAnswer400Response

export interface GetAnswer201Response {
	status: 201
	body: Api.BODYDATA[]
	headers?: never
}

export interface GetAnswer400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetQuestionResponse = GetQuestion201Response | GetQuestion400Response

export interface GetQuestion201Response {
	status: 201
	body: Api.BODYDATA[]
	headers?: never
}

export interface GetQuestion400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetUserResponse = GetUser201Response | GetUser400Response

export interface GetUser201Response {
	status: 201
	body: Api.BODYDATA[]
	headers?: never
}

export interface GetUser400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}


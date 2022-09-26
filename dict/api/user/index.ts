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
import passport from 'passport'
import * as t from './types'
import * as v from '../../validation'
import { Api } from '../../models'

export default function(app: Express, impl: t.UserApi) {
	app.post(
		'/createAnswer',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.answerCreated(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.answerCreated', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.answerCreated', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.answerCreated', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.answerCreated', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.post(
		'/createQuestion',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.questionCreated(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.questionCreated', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.questionCreated', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.questionCreated', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.questionCreated', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.post(
		'/createUser',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.userCreate(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.userCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.userCreate', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.userCreate', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.userCreate', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/getAnswer/:Qid',
		function (req, res) {
			try {
				impl.getAnswer(v.parseString('params.Qid', req.params['Qid'])).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.arrayToJson(v.modelApiBODYDATAToJson)('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getAnswer', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getAnswer', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.getAnswer', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.getAnswer', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/getQuestion/:TopicId',
		function (req, res) {
			try {
				impl.getQuestion(v.parseString('params.TopicId', req.params['TopicId'])).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.arrayToJson(v.modelApiBODYDATAToJson)('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getQuestion', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getQuestion', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.getQuestion', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.getQuestion', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/getUser',
		function (req, res) {
			try {
				impl.getUser().then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.arrayToJson(v.modelApiBODYDATAToJson)('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getUser', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getUser', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.getUser', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.getUser', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

}

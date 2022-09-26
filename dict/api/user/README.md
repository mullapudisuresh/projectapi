# User

## Operations

### answerCreated

```http
POST /createAnswer
```

answer created

### questionCreated

```http
POST /createQuestion
```

question created

### userCreate

```http
POST /createUser
```

UserCreate

### getAnswer

```http
GET /getAnswer/{Qid}
```

GetAnswer

### getQuestion

```http
GET /getQuestion/{TopicId}
```

GetQuestion

### getUser

```http
GET /getUser
```

GetUser

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function answerCreated(request: Api.BODYDATA | undefined): Promise<t.AnswerCreatedResponse> {
	throw 'Unimplemented'
}

async function questionCreated(request: Api.BODYDATA | undefined): Promise<t.QuestionCreatedResponse> {
	throw 'Unimplemented'
}

async function userCreate(request: Api.BODYDATA | undefined): Promise<t.UserCreateResponse> {
	throw 'Unimplemented'
}

async function getAnswer(qid: string): Promise<t.GetAnswerResponse> {
	throw 'Unimplemented'
}

async function getQuestion(topicId: string): Promise<t.GetQuestionResponse> {
	throw 'Unimplemented'
}

async function getUser(): Promise<t.GetUserResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	answerCreated,
	questionCreated,
	userCreate,
	getAnswer,
	getQuestion,
	getUser,
}

export default api
```

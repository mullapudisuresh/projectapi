import {  GetUserResponse,GetAnswerResponse,AnswerCreatedResponse,GetQuestionResponse, QuestionCreatedResponse, UserApi, UserCreateResponse } from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'
import { Questions }from '../../../src/admin/types'


export class UserApiImpl implements UserApi {
    getUser(): Promise<GetUserResponse>  {
        return new Promise<GetUserResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetUserResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetUserResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

    questionCreated(request: Api.BODYDATA | undefined): Promise<QuestionCreatedResponse>
    {
        return new Promise<QuestionCreatedResponse>((resolve,reject)=>{ 
            Questions.ques!.findOne(
                {Qid:request?.Qid}, 
                function(err:any,result:any){
                    if(result){
                        const response=<QuestionCreatedResponse>{
                            status:400,
                            body:{message:`Question  Already Created`}
                        }
                        resolve(response)
                    }
                    else{
                        Questions.ques!.insertOne(
                            {Qid:request?.Qid,TopicId:request?.TopicId,Question:request?.Question,option1:request?.option1,option2:request?.option2,option3:request?.option3,option4:request?.option4},
                            function(err:any,result:any){
                              if(err){
                                const response=<UserCreateResponse>{
                                    status:400,
                                    body:{message:`Someting Went Wrong`}
                                }
                                resolve(response)
                              }
                              else{
                                const response=<UserCreateResponse>{
                                    status:201,
                                    body:{message:`Create User Sucessfuly`}
                                }
                                resolve(response)
                              }
                                
                            }
    
                        )
                    }
                }
            )
        })
    }



 userCreate(request: Api.BODYDATA | undefined): Promise<UserCreateResponse>
 {
    return new Promise<UserCreateResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {TopicId:request?.TopicId},
            function(err:any,result:any){
                if(result){
                    const response=<UserCreateResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {TopicName:request?.TopicName,TopicId:request?.TopicId},
                        function(err:any,result:any){
                          if(err){
                            const response=<UserCreateResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UserCreateResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }

 getQuestion(TopicId: string):Promise<GetQuestionResponse>  {
    return new Promise<GetQuestionResponse>((resolve,reject)=>{
        Questions.ques!.find({TopicId:TopicId}).toArray(function (err: any,result:any){
            if(err) {
                const response=<GetUserResponse>{
                    status: 400,
                   body:{message: `something went wrong`},
                }
                resolve(response)                   
            }
            const response=<GetUserResponse>{
                status:201,
                body: result
            }
            resolve(response)
        })  
    })   
}

answerCreated(request: Api.BODYDATA | undefined): Promise<AnswerCreatedResponse>
{
    return new Promise<AnswerCreatedResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {Qid:request?.Qid},
            function(err:any,result:any){
                if(result){
                    const response=<AnswerCreatedResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    Questions.ques!.insertOne(
                        {Qid:request?.Qid,Answer:request?.Answer},
                        function(err:any,result:any){
                          if(err){
                            const response=<AnswerCreatedResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<AnswerCreatedResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }

 getAnswer(Qid: string):Promise<GetAnswerResponse>  {
    return new Promise<GetAnswerResponse>((resolve,reject)=>{
        Questions.ques!.find({Qid:Qid}).toArray(function (err: any,result:any){
            if(err) {
                const response=<GetAnswerResponse>{
                    status: 400,
                   body:{message: `something went wrong`},
                }
                resolve(response)                   
            }
            const response=<GetAnswerResponse>{
                status:201,
                body: result
            }
            resolve(response)
        })  
    })   
}
}

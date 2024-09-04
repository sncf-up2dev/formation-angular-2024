import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http"
import { catchError, filter, of, tap, throwError } from "rxjs"
import { Fruit } from "../20-state-management-project/model/fruit"
import { inject } from "@angular/core"
import { Logger } from "./logger.service"
import { IS_LOGGING_ENABLED, LOG_MESSAGE } from "./context-token"

const mockFruits: Fruit[] = [
  {
    "id": 1,
    "name": "Pomme",
    "price": 1
  },
  {
    "id": 2,
    "name": "Banane",
    "price": 2
  },
  {
    "id": 3,
    "name": "Poire",
    "price": 4
  }
]

export const firstInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  req.context.set(LOG_MESSAGE, "Mutation Log Message")

  console.log("req first interceptor")
  // Modifications sur la requète
  const res = next(req).pipe(
    tap(_ => console.log("res first interceptor"))
  )
  // Modifications sur l'observable de retour
  return res
}

export const secondInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  console.log("req second interceptor")
  // Modifications sur la requète
  const res = next(req).pipe(
    tap(_ => console.log("res second interceptor"))
  )
  // Modifications sur l'observable de retour
  return res
}

/* 
  reponseObs$ = httpBackend().pipe(
    tap(_ => console.log("res second interceptor"))
  ).pipe(
    tap(_ => console.log("res first interceptor"))
  ).pipe(
    httpClient
  )

*/

export const logInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const logger = inject(Logger)
  const start = performance.now()

  const isLogged = req.context.get(IS_LOGGING_ENABLED)
  const logMessage = req.context.get(LOG_MESSAGE)

  console.log("Message original : " + logMessage)
  console.log("Header original : ")
  console.log(req.headers)

  return isLogged
    ? next(req).pipe(
      tap((respone) => {
        if (respone instanceof HttpResponse) {
          logger.log(`Requète terminée en ${performance.now() - start}ms + ${logMessage}`)
          logger.log(req)
          logger.log(respone)
        }
      })
    )
    : next(req)

}

export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const authToken = "AUTHORISATION_TOKEN"

  const clone = req.clone({
    headers: req.headers.set('Authorization', authToken)
  })

  return next(clone)
}

export const mockInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  return of(new HttpResponse<null>({ body: null }))
}




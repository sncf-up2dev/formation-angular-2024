import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpContextToken } from "@angular/common/http"
import { Authentification, AuthentificationService } from "./authentification.service"
import { inject } from "@angular/core"

export const AUTHORISATION_CONTEXT_TOKEN = new HttpContextToken<boolean>(() => false)

export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {

  const authentificationService = inject(AuthentificationService)

  let authentification = authentificationService.getStatus()

  if (authentification && req.context.get(AUTHORISATION_CONTEXT_TOKEN)) {
    const clone = req.clone({
      headers: req.headers.set('authorization', "Bearer " + authentification.accessToken)
    })
    return next(clone)
  }

  return next(req)


}
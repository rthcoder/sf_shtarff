import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosResponseHeaders, InternalAxiosRequestConfig, isAxiosError, RawAxiosResponseHeaders } from "axios";
import * as https from 'https'

const agent = new https.Agent({
  rejectUnauthorized: false
});


class MyAxiosResponse<T, D> implements AxiosResponse<T, D> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
  error: boolean
}

@Injectable()
export class MyHttpService {
  constructor(
    private http: HttpService
  ) {
  }
  private readonly logger = new Logger(MyHttpService.name)


  async get<T = any, D = any>(
    url: string,
    config: AxiosRequestConfig<D> = {}
  ): Promise<MyAxiosResponse<T, D> | null> {
    try {

      let response = await this.http.get(
        url,
        {
          ...config,
          httpsAgent: agent,
        }
      ).toPromise()

      this.logger.log({ url: url, response: response?.data });

      return {
        data: response?.data ?? null,
        status: response?.status ?? 0,
        statusText: response?.statusText ?? '',
        headers: response?.headers ?? {},
        config: response?.config ?? { headers: {} as AxiosRequestHeaders },
        request: response?.request ?? null,
        error: false
      }
    } catch (error) {
      if (isAxiosError(error)) {
        let response = error.response
        this.logger.error(error.message, error)
        return {
          data: response?.data ?? null,
          status: response?.status ?? 0,
          statusText: response?.statusText ?? '',
          headers: response?.headers ?? {},
          config: response?.config ?? { headers: {} as AxiosRequestHeaders },
          request: response?.request ?? null,
          error: true
        }
      }
      return null
    }
  }

  async delete<T = any, D = any>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<MyAxiosResponse<T, D> | null> {
    try {
      let response = await this.http.delete(
        url,
        {
          ...config,
          httpsAgent: agent,
        }
      ).toPromise()
      this.logger.log({ url: url, config: config, response: response?.data });
      return {
        data: response?.data ?? null,
        status: response?.status ?? 0,
        statusText: response?.statusText ?? '',
        headers: response?.headers ?? {},
        config: response?.config ?? { headers: {} as AxiosRequestHeaders },
        request: response?.request ?? null,
        error: false
      }
    } catch (error) {
      if (isAxiosError(error)) {
        let response = error.response
        this.logger.error(error.message, error)
        return {
          data: response?.data ?? null,
          status: response?.status ?? 0,
          statusText: response?.statusText ?? '',
          headers: response?.headers ?? {},
          config: response?.config ?? { headers: {} as AxiosRequestHeaders },
          request: response?.request ?? null,
          error: true
        }
      }
      return null
    }
  }

  async post<T = any, D = any>(
    url: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<MyAxiosResponse<T, D> | null> {
    try {

      let response = await this.http.post(
        url,
        data,
        {
          ...config,
          httpsAgent: agent,
        }
      ).toPromise()

      this.logger.log({ url: url, data: data, config: config, response: response?.data, });

      return {
        data: response?.data ?? null,
        status: response?.status ?? 0,
        statusText: response?.statusText ?? '',
        headers: response?.headers ?? {},
        config: response?.config ?? { headers: {} as AxiosRequestHeaders },
        request: response?.request ?? null,
        error: false
      }

    } catch (error) {
      if (isAxiosError(error)) {
        let response = error.response
        this.logger.error(error.message)
        console.log(error);
        return {
          data: response?.data ?? null,
          status: response?.status ?? 0,
          statusText: response?.statusText ?? '',
          headers: response?.headers ?? {},
          config: response?.config ?? { headers: {} as AxiosRequestHeaders },
          request: response?.request ?? null,
          error: true
        }
      }
      return null
    }
  }

  async generateConfig() {

  }
}

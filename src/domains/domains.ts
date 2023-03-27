import { Resend } from '../resend';
import {
  CreateDomainOptions,
  CreateDomainRequestOptions,
  CreateDomainResponse,
} from './interfaces';

export class Domains {
  constructor(private readonly resend: Resend) {}

  async create(
    payload: CreateDomainOptions,
    options: CreateDomainRequestOptions = {},
  ): Promise<CreateDomainResponse> {
    const { data } = await this.resend.post('/domains', payload, options);
    return data;
  }

  async remove(id: string) {
    await this.resend.delete(`/domains/${id}`);
  }

  async verify(id: string) {
    await this.resend.post(`/domains/${id}/verify`);
  }
}